import React, { useEffect, useState } from "react";
import { useGlobalContext } from "dashboard/GlobalContext"; // ✅ Now TypeScript should recognize it

interface Post {
    id: number;
    title: string;
}

const Analytics = () => {
    const { user, theme } = useGlobalContext(); // ✅ Access shared state
    const [data, setData] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch data");
                return res.json();
            })
            .then((data: Post[]) => {
                setData(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div style={{padding: "20px", maxWidth: "800px", margin: "0"}}>
            <h2>Analytics Dashboard</h2>
            <p>
                The 'Dummy' Analytics Dashboard: API Integration – Fetching data from a sample API and
                shares state with the 'Dummy' Dashboard.
            </p>
            <p>Welcome, {user}!</p> {/* ✅ Shared state */}
            <p>Current Theme: {theme}</p> {/* ✅ Shared state */}

            <h3>Analytics Data</h3>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Analytics;
