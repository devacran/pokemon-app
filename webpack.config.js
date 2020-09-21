module.exports = {
  entry: "./src/index.js",
  output: {
    path: "/dist",
    filename: "main.js"
  },
  devServer: {
    inline: true,
    host: "0.0.0.0",
    historyApiFallback: {
      index: "index.html"
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        exclude: /node_modules/,
        use: ["file-loader"]
      }
    ]
  }
};
