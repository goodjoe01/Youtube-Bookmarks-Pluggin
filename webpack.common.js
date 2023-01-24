const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

const path = require('path')

module.exports = {
  mode: "development",
  devtool: 'cheap-module-source-map',
  entry: {
    popup: path.resolve('./src/popup/Popup.tsx'),
    options: path.resolve('./src/options/OptionsIndex.tsx'),
    background: path.resolve('./src/background/background.ts'),
    contentScript: path.resolve('./src/content/contentScript.ts')
  },
  module: {
    rules: [
      {
          use: 'ts-loader',
          test: /\.tsx?$/,
          exclude: /node_modules/,
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css?$/,
      },
      {
        type: 'assets/resource',
        test: /\.(png|jpg|jpeg|gif|woff|woff2|tff|eot|svg)$/,
      },
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.resolve('src/static'), to: path.resolve('dist') },
        { from: path.resolve('src/assets'), to: path.resolve('dist') }
      ],
    }),
    ...getHtmlPlugins([
      'popup',
      'options'
    ])
  ],
  resolve: {
    extensions: ['.tsx', '.js', '.ts']
  },
  output: {
    filename: '[name].js'
  },
  optimization: {
    splitChunks: {
        chunks: 'all',
    }
  }
}

function getHtmlPlugins(chunks) {
  return chunks.map(chunk => new HtmlPlugin({
      title: 'React Extension',
      filename: `${chunk}.html`,
      chunks: [chunk]
  }))
}
