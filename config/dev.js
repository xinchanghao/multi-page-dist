let projectName = process.argv[2] || "all";

let fs = require("fs");

fs.writeFileSync("./config/entry.js", `exports.entryName = '${projectName}'`);

let exec = require("child_process").execSync;
exec("npm run serve", { stdio: "inherit" });
