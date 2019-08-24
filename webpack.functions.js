require('dotenv').config();
const webpack = require('webpack');

module.exports = {
	optimization: { minimize: false },
	plugins: [
		new webpack.EnvironmentPlugin([
      'JSON_PLACEHOLDER_URL',
      'GRAPHQL_SERVER_URL'
    ]),
		new webpack.NormalModuleReplacementPlugin(
			/\/iconv-loader$/, 'node-noop',
		)
	]
};
