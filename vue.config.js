const path = require("path")

module.exports = {
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true
  },
  outputDir: "docs",
	publicPath:"./"
}