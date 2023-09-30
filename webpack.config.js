const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const distFolder = path.resolve(__dirname, "dist");

module.exports = (_, argv) => {
  const isProduction = argv.mode === "production";
  return {
    entry: {
      options: "./src/options.ts",
      contentScript: "./src/contentScript.ts",
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    output: {
      filename: "[name].bundle.js",
      path: distFolder,
    },
    optimization: {
      minimize: isProduction,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/options.html",
        chunks: ["options"],
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: "./src/manifest.json", to: distFolder },
          { from: "./assets", to: distFolder },
        ],
      }),
    ],
  };
};
