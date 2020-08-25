// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: 'production',
  entry: __dirname + '/pages/index.jsx',
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
   output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css']
  },
//   plugins: [
//     new BundleAnalyzerPlugin()
//   ]
}
