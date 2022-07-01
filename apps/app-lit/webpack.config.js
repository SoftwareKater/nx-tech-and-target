const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (config, context) => {
  return {
    ...config,
    // devServer: {
    //   historyApiFallback: true,
    // },
    mode: 'production',
    entry: './src/main.ts',
    // plugins: [
    //   new HtmlWebpackPlugin({
    //     // chunksSortMode: 'none',
    //     template: './src/index.html',
    //   }),
    // ],
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, '../../dist/apps/app-lit'),
    },
    module: {
      ...config.module,
      // rules: [
      //   {
      //     test: /\.ts$/,
      //     exclude: /node_modules/,
      //     use: {
      //       loader: 'babel-loader',
      //       options: {
      //         plugins: [
      //           // [
      //           //   '@babel/plugin-proposal-decorators',
      //           //   { decoratorsBeforeExport: true },
      //           // ],
      //           // ['@babel/plugin-proposal-class-properties', { loose: true }],
      //         ],
      //       },
      //     },
      //   },
      // ],
    },
    // serve: {
    //   host: '127.0.0.1',
    //   port: 8081,
    //   hotClient: false
    // },
  };
};
