import React from "react";
import { Link } from "react-router-dom"; // ✅ Ensure this is correctly used
import { useGlobalContext } from "./state/GlobalContext";

const Dashboard = () => {
    const { user, theme, toggleTheme } = useGlobalContext();

    return (
        <div style={{padding: "20px", maxWidth: "800px", margin: "0"}}>
            <h2>Main Dashboard</h2>
            <p>
                This project demonstrates a simple Micro-Frontend (MFE) architecture using Webpack Module Federation.
                The 'Dummy' Main Dashboard is the entry point and dynamically loads a remote application ('Dummy' Analytics App") at
                runtime.
            </p>
            <p>Welcome, {user}!</p>
            <p>Current Theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>

        </div>
    );
};

export default Dashboard;
