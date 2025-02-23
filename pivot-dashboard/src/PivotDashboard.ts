import { fetchLast5DaysData } from './api';

export function PivotDashboard(): HTMLElement {
    const dashboard = document.createElement('div');

    dashboard.innerHTML = `
   <h2>Pivot Trading Dashboard</h2>
   <p>
    This micro-service is a streamlined standalone version of a key component from my  
    trading application. To explore my latest mvp version, visit  
    <a href="https://ddeloy.com/d-trade" target="_blank">d-trade</a>.
    </p>

    <div>
        <h4>Enter a valid symbol, number of days, and click 'Fetch Data' to load data from Alpha Vantage API</h4>
        <input id="symbol-input" type="text" placeholder="Enter stock symbol" />
        <input id="days-input" type="number" min="1" max="30" value="9" placeholder="Days" style="width: 80px;" />
        <button id="fetch-button">Fetch Data</button>
        <button id="reset-button" style="margin-left: 8px;">Reset</button>
    </div>
    <div>
        <h3>Pivot Day Trading Dashboard</h3>
        <p>
            Inspired by <a href="https://www.marketswiki.com/wiki/Mark_B._Fisher" target="_blank"><em>Mark Fisher's "ACD Trading Method"</em></a>, this dashboard identifies key 
            day trading entry and exit points using price action, volume, and volatility analysis.<br/><br/>
        </p>
    </div>
    <div id="stock-data" style="margin-top: 1rem;"></div>
    <div id="rolling-pivot-data" style="margin-top: 1rem; text-align: left;"></div>
    <div id="daily-table-container" style="margin-top: 2rem;">
        <h3 style="text-align:left">Data for Rolling Last 'N' Trading Days</h3>
    </div>
    `;

    const input = dashboard.querySelector<HTMLInputElement>('#symbol-input')!;
    const daysInput = dashboard.querySelector<HTMLInputElement>('#days-input')!;
    const fetchButton = dashboard.querySelector<HTMLButtonElement>('#fetch-button')!;
    const resetButton = dashboard.querySelector<HTMLButtonElement>('#reset-button')!;
    const stockDataDiv = dashboard.querySelector<HTMLDivElement>('#stock-data')!;
    const rollingPivotDiv = dashboard.querySelector<HTMLDivElement>('#rolling-pivot-data')!;
    const dailyTableContainer = dashboard.querySelector<HTMLDivElement>('#daily-table-container')!;

    fetchButton.addEventListener('click', async () => {
        const symbol = input.value.trim().toUpperCase();
        const numDays = Math.max(parseInt(daysInput.value.trim(), 10), 9); // Ensure at least 9 days of data

        if (!symbol) {
            stockDataDiv.textContent = 'Please enter a valid stock symbol.';
            return;
        }

        try {
            stockDataDiv.textContent = 'Loading...';

            const { last5Days, rolling2DayPivot } = await fetchLast5DaysData(symbol, numDays);

            // Calculate running sum of Plus/Minus
            let runningSum = 0;

            // Calculate Bias & Momentum
            const closePrices = Object.values(last5Days).map(values => parseFloat(values.close));
            const latestClose = closePrices[0]; // Current close
            const close8DaysAgo = closePrices[8]; // Close 8 days ago
            const momentum = parseFloat((latestClose - close8DaysAgo).toFixed(2));

            const latestDay = Object.values(last5Days)[0];
            const pivotHigh = parseFloat(latestDay.pivotHigh);
            const pivotLow = parseFloat(latestDay.pivotLow);
            const closePrice = parseFloat(latestDay.close);

            let bias = 'Neutral';
            if (closePrice > pivotHigh) {
                bias = 'Bullish';
            } else if (closePrice < pivotLow) {
                bias = 'Bearish';
            }

            // Display rolling pivot data with Bias and Momentum
            rollingPivotDiv.innerHTML = `
                <strong>Rolling 2-Day Pivot Diff:</strong> ${rolling2DayPivot.rollingPivotDiff} |
                <strong>Rolling Pivot Range:</strong> ${rolling2DayPivot.rollingPivotRange} |
                <strong>Running Plus/Minus:</strong> <span id="running-sum"></span> |
                <strong>Momentum:</strong> ${momentum > 0 ? '+' : ''}${momentum} |
                <strong>Bias:</strong> ${bias}
            `;

            // Clear existing table
            dailyTableContainer.innerHTML = '<h3 style="text-align:left">Data for Rolling Last "N" Trading Days</h3>';

            // Create new table
            const table = document.createElement('table');
            table.style.width = 'fit-content';
            table.style.borderCollapse = 'collapse';

            // Create table header
            const headerRow = document.createElement('tr');
            headerRow.innerHTML = `
                <th>Date</th>
                <th>Open</th>
                <th>High</th>
                <th>Low</th>
                <th>Close</th>
                <th>Pivot Range</th>
                <th>Plus/Minus</th>
            `;
            table.appendChild(headerRow);

            const dates: string[] = [];

            // Create table rows
            Object.entries(last5Days).forEach(([date, values]) => {
                const open = parseFloat(values.open);
                const close = parseFloat(values.close);
                const pivotLow = parseFloat(values.pivotLow);
                const pivotHigh = parseFloat(values.pivotHigh);

                let plusMinus = 0;
                if (open < pivotLow && close > pivotHigh) {
                    plusMinus = 1;
                } else if (open > pivotHigh && close < pivotLow) {
                    plusMinus = -1;
                }

                runningSum += plusMinus;

                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${date}</td>
                    <td>${values.open}</td>
                    <td>${values.high}</td>
                    <td>${values.low}</td>
                    <td>${values.close}</td>
                    <td>${values.pivotHigh} to ${values.pivotLow}</td>
                    <td>${plusMinus}</td>
                `;
                table.appendChild(row);

                dates.push(date);
            });

            dailyTableContainer.appendChild(table);
            stockDataDiv.textContent = `Data for ${symbol} updated successfully.`;

            // Update running sum display
            const runningSumElement = rollingPivotDiv.querySelector<HTMLSpanElement>('#running-sum');
            if (runningSumElement) {
                runningSumElement.textContent = runningSum.toString();
            }

        } catch (error) {
            console.error('Error fetching or rendering data:', error);
            stockDataDiv.textContent = `Error: ${error instanceof Error ? error.message : 'Unable to fetch data.'}`;
        }
    });

    resetButton.addEventListener('click', () => {
        input.value = ''; // Clear symbol input
        daysInput.value = '9'; // Reset days input to default 9
        stockDataDiv.textContent = '';
        rollingPivotDiv.innerHTML = '';
        dailyTableContainer.innerHTML = '';
    });

    return dashboard;
}
