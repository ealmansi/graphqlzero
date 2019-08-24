const webpack = require('webpack');
module.exports = {
	optimization: { minimize: false },
	plugins: [
		new webpack.NormalModuleReplacementPlugin(
			/\/iconv-loader$/, 'node-noop',
		)
	]
};
