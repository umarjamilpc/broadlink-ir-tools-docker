"use strict";

const webpack = require("webpack");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.config.base");

const HOST = "0.0.0.0";
const PORT = 8080;

module.exports = merge(baseConfig, {
  mode: "development",

  devServer: {
    client: {
      logging: "warn",
      overlay: {
        warnings: false,
        errors: true,
      },
    },
    hot: true,
    static: {
      directory: "dist",
    },
    compress: true,
    https: true,
    host: HOST,
    port: PORT,
    open: true,
    allowedHosts: "all",
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
      {
        test: /\.styl(us)?$/,
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],
});
