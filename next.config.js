const TerserPlugin = require('terser-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const { name } = require('./package.json');
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
	distDir: 'build',
	// 默认压缩，不用额外配置compression
	compress: true,
	env: {
		API_HOST: process.env.PROD ? 'http://localhost:3000/api' : 'http://localhost:3000/api',
		STATIC_HOST: isProd ? `/static` : 'http://localhost:3000/static',
	},

	// cdn in production and localhost for development
	assetPrefix: isProd ? 'http://localhost:3000' : '',

	// 运行时配置(server client皆可获取)
	publicRuntimeConfig: {},

	api: {
		bodyParser: true,
	},

	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		// Note: we provide webpack above so you should not `require` it
		// Perform customizations to webpack config
		// Important: return the modified config
		config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
		config.plugins.push(new AntdDayjsWebpackPlugin()); // 默认不引用momentjs，减小antd打包体积

		if (isProd) {
			config.plugins.push(
				new CleanWebpackPlugin(
					['build/server/static/', 'build/static/'], // 匹配删除的文件
					{
						root: __dirname, // 根目录
						verbose: true, // 开启在控制台输出信息
						dry: false, // 启用删除文件
					}
				)
			);

			config.optimization.minimizer.push(
				new TerserPlugin({
					terserOptions: {
						warnings: false,
						extractComments: false, // 移除注释
						compress: {
							drop_console: true,
						},
					},
				})
			);
		}
		return config;
	},
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer(nextConfig);
