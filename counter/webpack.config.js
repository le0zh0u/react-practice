var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry:[
    'webpack-hot-middleware/client',
    './index'
  ],
  output:{
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    //OccurenceOrderPlugin 给经常使用的模块分配最小长度的id
    new webpack.optimize.OccurenceOrderPlugin(),
    //HotModuleReplacementPlugin 热替换，不用刷新页面
    new webpack.HotModuleReplacementPlugin(),
    //NoErrorsPlugin 保证编译后的代码永远是对的
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader:  'babel-loader' ,
        exclude: /node_modules/,
        include: __dirname,
        query:
                {
                  presets:['react','es2015']
                }
      }
    ]
  }
}
