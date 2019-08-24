const webpack = require('webpack');

module.exports = {
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin([
      'JSON_PLACEHOLDER_URL',
      'GRAPHQL_SERVER_URL'
    ]))
    return config
  }
};
