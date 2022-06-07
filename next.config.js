/** @type {import('next').NextConfig} */
module.exports = {
	// swcMinify: true,
	reactStrictMode: false,
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.glsl$/,
			// use: ['raw-loader', 'glslify-loader'],
			use: 'raw-loader',
		})

		return config
	},
}
