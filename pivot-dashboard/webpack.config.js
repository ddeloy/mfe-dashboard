const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const Dotenv = require("dotenv-webpack");  // ✅ Import dotenv-webpack

module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    devServer: {
        port: 3003,  // ✅ Unique port for pivot-dashboard
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
            name: "pivotDashboard",
            filename: "remoteEntry.js",
            exposes: {
                "./PivotDashboard": "./src/PivotDashboard.ts", // ✅ Expose the main dashboard module
            },
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html"),
        }),
        new Dotenv(),  // ✅ Load .env variables (only needed locally)
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
};
