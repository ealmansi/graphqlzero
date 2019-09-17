const dotenv = require('dotenv');
const path = require('path');
const webpack = require('webpack');
const withCSS = require('@zeit/next-css');

const { parsed: localEnv } = dotenv.config({
  path: path.resolve(__dirname, '..', '..', '.env')
});

module.exports = withCSS({
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    return config;
  }
});
