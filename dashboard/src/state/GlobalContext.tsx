import React, { createContext, useContext, useState } from "react";

// Define a TypeScript interface for the shared state
interface GlobalState {
    user: string;
    theme: "light" | "dark";
    setUser: (user: string) => void;
    toggleTheme: () => void;
}

// ✅ Provide a default state to avoid `undefined` errors
const defaultState: GlobalState = {
    user: "Guest",
    theme: "light",
    setUser: () => {},  // Placeholder function (will be replaced in provider)
    toggleTheme: () => {} // Placeholder function
};

// Create the context with default values
const GlobalContext = createContext<GlobalState>(defaultState);

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<string>("Guest");
    const [theme, setTheme] = useState<"light" | "dark">("light");

    const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

    return (
        <GlobalContext.Provider value={{ user, setUser, theme, toggleTheme }}>
            {children}
        </GlobalContext.Provider>
    );
};

// Custom hook for easy access
export const useGlobalContext = (): GlobalState => {
    return useContext(GlobalContext);
};
