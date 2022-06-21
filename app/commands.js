#!/usr/bin/env node
import { program } from "commander";
import generateProject from "./app.js";
import { generateRoute } from "./config/generateRoutes.js";


program.name("express-cli").version("0.2.0").description("An easier way to build your project structure in express.");

// program.option("-t, --type <type>", "Type of file");

program.command("new").description("Generate project").action(() => {
    generateProject();
});

// program.option("-r, --router <name>", "Generate router file");

program.command("generate").alias("g").description("Generate file").option("-r, --route <name>", "Generate router file").option("-t, --type <type>", "Type of file").action((args) => {
    generateRoute(args);
});


program.parse(process.argv);