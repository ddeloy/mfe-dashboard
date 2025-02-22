import React from "react";
import ReactDOM from "react-dom/client";
import Analytics from "./Analytics";

const App = () => (
    <div>
        <h1>Analytics Micro Frontend</h1>
        <Analytics />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
