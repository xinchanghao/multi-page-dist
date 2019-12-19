const entryObj = require("./entry");

const configObj = {
  //项目A
  projectA: {
    entry: "src/projects/projectA/main.js",
    template: "public/projectA.html",
    filename: "projectA.html"
  },
  //项目B
  projectB: {
    entry: "src/projects/projectB/main.js",
    template: "public/projectB.html",
    filename: "projectB.html"
  },
  //项目C
  projectC: {
    entry: "src/projects/projectC/main.js",
    template: "public/projectC.html",
    filename: "projectC.html"
  }
};

const isAll = ["all", "undefined"].includes(entryObj.entryName);

console.log(`===start build ${!isAll ? entryObj.entryName : "all"}===`);

const obj = isAll
  ? configObj
  : { [`${entryObj.entryName}`]: configObj[entryObj.entryName] };

module.exports = obj;
