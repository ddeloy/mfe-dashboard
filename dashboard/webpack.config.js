const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    devServer: {
        port: 3001,  // Ensure dashboard is on a different port
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
            name: "dashboard",
            filename: "remoteEntry.js",
            remotes: {
                analyticsApp: "analyticsApp@http://localhost:3002/remoteEntry.js",
            },
            exposes: {
                "./GlobalContext": "./src/state/GlobalContext.tsx", // ✅ Ensure correct file extension
            },
            shared: {
                react: { singleton: true, requiredVersion: "18.3.1", eager: true },
                "react-dom": { singleton: true, requiredVersion: "18.3.1", eager: true },
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
