import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Analytics from "./Analytics";

const Root = () => (
    <BrowserRouter>
        <nav style={{ padding: "10px", borderBottom: "1px solid gray" }}>
            <Link to="/">Analytics Home</Link>
        </nav>

        <Routes>
            <Route path="/" element={<Analytics />} />
        </Routes>
    </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<Root />);
