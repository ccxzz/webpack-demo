const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const webpack = require('webpack')
const path = require('path')

let entryFnc = () => {
	/*
	 * 实现入口文件逻辑
	 * ......
	 */
	console.log(__dirname)
	console.log(path.resolve(__dirname, 'dist'))
	
	return {index: './page/index.js'}
}

module.exports = {
	// 入口配置
	entry: entryFnc(),
	// entry: {index: './page/index.js'},
	// entry: () => new Promise((resolve) => resolve({index: './page/index.js'})),
	output: {
		//配置输出目录
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		// publicPath: "https://cdn.example.com/assets/", // CDN（总是 HTTPS 协议）
		// publicPath: "//cdn.example.com/assets/", // CDN (协议相同)
		// publicPath: "/assets/", // 相对于服务(server-relative)
		// publicPath: "assets/", // 相对于 HTML 页面
		// publicPath: "../assets/", // 相对于 HTML 页面
		publicPath: "", // 相对于 HTML 页面（目录相同）
	},
	plugins: [
		new HtmlWebpackPlugin({template: './page/index.html'})
	]
}