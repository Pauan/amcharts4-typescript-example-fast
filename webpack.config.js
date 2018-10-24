var $path = require("path");

module.exports = {
  mode: "production",

  devtool: "source-map",

  entry: {
    index: "./index.ts"
  },

  output: {
    path: $path.join(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "[name].js",
    chunkFilename: "[name].js"
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    rules: [{
        test: /\.tsx?$/,
        use: [{
            loader: "ts-loader"
        }],
        exclude: $path.join(__dirname, "node_modules")
    }, {
      test: /.js$/,
      use: ["source-map-loader"],
      enforce: "pre"
    }]
  }
};
