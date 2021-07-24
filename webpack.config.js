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
			
		         }	
		}
		]
		},
		{
		 
		 test: /\.(sa|sc|c)ss$/,
		use: [
		{
		loader: MiniCssExtractPulgin.loader,
		options:{
			publicPath: '../'
		}
		},
		'css-loader' , 'sass-loader'
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
	
		new HtmlWebpackPlugin({
							filename: "checkout.html" ,
							template: "./src/checkout.html" ,
	}),	
	
		new HtmlWebpackPlugin({
							filename: "payment.html" ,
							template: "./src/payment.html" ,
	}),	
	
		new HtmlWebpackPlugin({
							filename: "search.html" ,
							template: "./src/search.html" ,
	}),	
			new HtmlWebpackPlugin({
									filename: "contact.html" ,
									template: "./src/contact.html" ,
			}),	
	
	new MiniCssExtractPulgin({filename: "css/style.css"}),
	
	new OptimizeCSSAssetsPlugin({}),
	
	         ],
	
	

	
	
	
	
	} ;