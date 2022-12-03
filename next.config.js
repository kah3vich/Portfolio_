/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: false,
	webpack: config => {
		config.module.rules.push({
			test: /\.glsl$/,
			use: 'raw-loader'
		});

		return config;
	}
};
