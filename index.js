#!/usr/bin/env node
require("./utils/initial");
const { program } = require("commander");
const json = require("@/package.json");


program
  .usage("pdf-split <cmd>")
  .version(json.version);

program
  .command("single <source>", { isDefault: true })
  .description("将指定的pdf文件按页数分裂")
  .action(require("@/actions/splite-single"));

program.parse(process.argv);


