const pagesConfigObj = require("./config/entry.config");

module.exports = {
  pages: pagesConfigObj,
  lintOnSave: false,
  devServer: {
    index: "projectA.html"
  }
};
