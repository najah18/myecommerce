var path = require('path'); 
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPulgin = require("mini-css-extract-plugin");
var OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

module.exports = { 
  entry: { main: path.resolve(__dirname, './src/index.js'), },

  
  output: { 
    		filename: 'main.js', 
    		path: path.resolve(__dirname, 'dist'),
			publicPath: '' ,
filename: "main.js"			
          } ,
	
	mode:"development",
	devServer: {
		contentBase: path.join(__dirname, "/dist"),
		port: 1239,
		 writeToDisk: true,
	},
	module: {
		rules: [
		{
			
		
		
		test: /\.html$/,
		use: [
		{loader: "html-loader" ,
		options: {
			minimize: true,
		         }	
		}
		]
		},
		{
		 
		 test: /\.css$/,
		use: [
		MiniCssExtractPulgin.loader,
		'css-loader'
		]
		         	
		},
		
		
		{
		 
		 test: /\.(png|svg|jpe?g|gif)$/,
		use: [
		{
		loader: "file-loader" ,
		options: {
			name:'[name].[ext]',
			outputpath: "images",
		
		}
		}
		
		]
		         	
		},
		
		{
			test: /\.(svg|eot|woff|woff2|ttf)$/,
			use: [{
			  loader: "file-loader",
			  options: {
				name: '[name].[ext]',
				outputPath: "fonts",
				esModule: false,
			  }
			}]
		  },
		 
		 {
  test: require.resolve("jquery"),
  loader: "expose-loader",
  options: {
    exposes: ["$", "jQuery"],
  },
},
		
		
		
		
		
	         ]
},
	plugins: [
	new HtmlWebpackPlugin({
							filename: "index.html" ,
							template: "./src/index.html" ,
	}),	
	
	
	new HtmlWebpackPlugin({
							filename: "product.html" ,
							template: "./src/product.html" ,
	}),	
	
	new MiniCssExtractPulgin({filename: "css/style.css"}),
	
	new OptimizeCSSAssetsPlugin({}),
	         ],
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	} ;