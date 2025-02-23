import React from "react";

const About = () => {
    return (
        <div style={{padding: "20px", maxWidth: "800px", margin: "0"}}>
            <h2>About This Project</h2>
            <p>
                This project demonstrates a simple Micro-Frontend (MFE) architecture using Webpack Module Federation.
                The main application ('Dummy' Dashboard / Host App) dynamically loads a remote application ('Dummy' Analytics App) at runtime.
            </p>

            <h2>Key Features:</h2>
            <ul>
                <li>Micro-Frontend Architecture – Independent apps work together seamlessly.</li>
                <li>Remote Loading – `dashboard` loads `analytics-app` dynamically.</li>
                <li>API Integration – Fetching data from a sample API.</li>
                <li>React & TypeScript – Type-safe modern frontend (un-styled).</li>
                <li>Deployed on Vercel – Live & accessible from anywhere.</li>
            </ul>

            <h2>How It Works:</h2>
            <ol>
                <li>Dashboard App (`mfe-dashboard`) dynamically imports `Analytics`.</li>
                <li>Analytics App (`analytics-app`) exposes components via Webpack Module Federation.</li>
                <li>Both apps share React to avoid redundant dependencies.</li>
            </ol>

            <h2>Work in Progress [WIP]</h2>
            <p>
                This project is an evolving proof of concept and will be gradually expanded with new features,
                optimizations, and enhancements.
            </p>

            <h2>Useful Links</h2>
            <ul>
                <li>
                    GitHub Repo:<a href="https://github.com/ddeloy/mfe-dashboard" target="_blank"
                                          rel="noopener noreferrer">
                    github.com/ddeloy/mfe-dashboard
                </a>
                </li>
                <li>
                    More Projects: Check out my portfolio for fully functional applications, including my Day Trading App:
                    <a href="http://ddeloy.com" target="_blank" rel="noopener noreferrer">
                        ddeloy.com
                    </a>
                </li>
            </ul>

            <p><strong>Developed to demonstrate modular and scalable frontend architecture!</strong></p>
        </div>
    );
};

export default About;
