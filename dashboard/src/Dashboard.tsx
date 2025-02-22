import React from "react";
import { useGlobalContext } from "./state/GlobalContext";

const Dashboard = () => {
    const { user, theme, toggleTheme } = useGlobalContext();

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome, {user}!</p>
            <p>Current Theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default Dashboard;
