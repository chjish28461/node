const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");  //css单独打包
const HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html
const OpenBrowserPlugin = require('open-browser-webpack-plugin');//自动打开浏览器
const port = require('./config/config').port;

const config={
	devtool:'eval-source-map',
	entry:__dirname+'/src/index',
	output:{
		path:__dirname+'/build',
		filename:'main.js'
	},
	module:{
		rules:[
			{//jsx?编译器
				test:/\.jsx?$/,
				include:/src/,
				loader:'babel-loader',
				options:{
					presets:['es2015','stage-0','react'],
					plugins:[
						["transform-runtime"],
            			["import", [{ "style": "css", "libraryName": "antd-mobile" }]]
					]
				}
			},
			{//css编译器
				test:/\.css$/i,
				use: ExtractTextPlugin.extract({
		          	fallback: "style-loader",
		          	use: ["css-loader"]
		        })
			},
			{//less编译器
				test:/\.less$/i,
				use: ExtractTextPlugin.extract({
		          	fallback: "style-loader",
		          	use: ["css-loader","less-loader"]
		        })
			},
			{//sass编译器
				test:/\.scss$/i,
				use: ExtractTextPlugin.extract({
		          	fallback: "style-loader",
		          	use: ["css-loader","sass-loader"]
		        })
			},
			{ 
				test: /\.(jpg|png)$/, 
				loader: "url-loader?limit=8192" 
			}
		]
	},
	resolve: {
	    modules: [path.resolve(__dirname, 'node_modules'), path.join(__dirname, 'src')],
	    extensions: ['.web.js', '.jsx', '.js', '.json']
  	},
  	plugins:[
  		new ExtractTextPlugin('main.css'),
  		new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            filename: './index.html', //生成的html存放路径，相对于 path
            template: './src/index.html', //html模板路径
            hash: true,    //为静态资源生成hash值
        }),
        new OpenBrowserPlugin({ url: 'http://localhost:'+port })//自动用默认浏览器打开项目
  	]
}

module.exports=config;
