module.exports = {
  entry: "./entry.jsx",
  output: {
    path: __dirname,
    filename: "./bundle.js",
    // publicPath: "/static/"
  },

  module: {
    loaders: [{
      test: [
        /\.jsx?$/, /\.js?$/
      ],
      exclude: /node_modules/,
      loader: "babel-loader",
      include: __dirname,
      query: {
        presets: [ 'es2015', 'react', 'react-hmre' ]
      }
    }]
  }
}