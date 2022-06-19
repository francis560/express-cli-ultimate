#!/usr/bin/env node
import { program } from "commander";
import generateProject from "./app.js";


program.name("express-cli").version("0.2.0").description("An easier way to build your project structure in express.");

program.command("new").description("Generate project").action(() => {
    generateProject();
});

// program.option("-r, --router <name>", "Generate router file");

// program.command("g").description("Generate file").action((args) => {
//     console.log(args.router);
// });


program.parse(process.argv);