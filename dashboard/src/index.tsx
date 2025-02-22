import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { GlobalProvider } from "./state/GlobalContext"; // ✅ Import Global Context
import Dashboard from "./Dashboard";
import About from "./About"; // ✅ Import About Page

const AnalyticsApp = React.lazy(() => import("analyticsApp/Analytics"));

const Root = () => (
    <GlobalProvider>
        <BrowserRouter>
            <nav style={{ padding: "10px", borderBottom: "1px solid gray" }}>
                <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
                <Link to="/analytics" style={{ marginRight: "10px" }}>Analytics</Link>
                <Link to="/about">About</Link> {/* ✅ Add About Page Link */}
            </nav>

            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/about" element={<About />} /> {/* ✅ Add About Page Route */}
                <Route
                    path="/analytics"
                    element={
                        <Suspense fallback={<div>Loading Analytics...</div>}>
                            <AnalyticsApp />
                        </Suspense>
                    }
                />
            </Routes>
        </BrowserRouter>
    </GlobalProvider>
);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<Root />);
