const webpack = require('webpack');
const path = require('path');
const { config } = require('dotenv');

config({
  path: path.resolve(__dirname, '..', '..', '.env')
});

module.exports = {
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin([
      'JSON_PLACEHOLDER_URL',
      'GRAPHQL_SERVER_URL'
    ]))
    return config
  }
};
