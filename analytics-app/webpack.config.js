const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    devServer: {
        port: 3002,  // Ensure analytics-app is on a separate port
        historyApiFallback: true,
        static: path.resolve(__dirname, "public"),
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "analyticsApp",
            filename: "remoteEntry.js",
            exposes: {
                "./Analytics": "./src/Analytics.tsx",
            },
            shared: {
                react: { singleton: true, requiredVersion: "18.3.1", eager: true, strictVersion: false },
                "react-dom": { singleton: true, requiredVersion: "18.3.1", eager: true, strictVersion: false },
            },
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html"),
        }),
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
};
