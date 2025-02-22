import React, { Suspense } from "react";

// Dynamically import Analytics component from analyticsApp
const Analytics = React.lazy(() => import("analyticsApp/Analytics"));

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <Suspense fallback={<div>Loading Analytics...</div>}>
                <Analytics />
            </Suspense>
        </div>
    );
};

export default Dashboard;
