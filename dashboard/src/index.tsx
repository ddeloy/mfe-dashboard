import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Import from 'react-dom/client' for React 18
import Dashboard from "./Dashboard";

const App = () => (
    <div>
        <h1>Micro Frontend Dashboard</h1>
        <Dashboard />
    </div>
);

// ✅ Use `createRoot()` instead of `render()`
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
