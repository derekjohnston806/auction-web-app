/**
    webpack.config.js

    @author:
      - Derek Johnston
      - Attribution:
        - https://www.codementor.io/tamizhvendan/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr

    @desc:
      - Configure webpack to build and deploy the single-page react application.
*/
var webpack = require("webpack");
var path = require("path");

var BUILD_DIR = path.resolve(__dirname + "/public/scripts/");
var APP_DIR = path.resolve(__dirname + "/src/client/");

var config = {
  entry: APP_DIR + "/index.js",
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  }
};

module.exports = config;
