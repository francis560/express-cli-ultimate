#!/usr/bin/env node

import inquirer from "inquirer";
import path from "path";
import shell from "shelljs";
import fs, { copyFile } from "fs";
import chalkAnimation from "chalk-animation";
import { createSpinner } from "nanospinner";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



console.clear();


const createProject = () => {

    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is the name of your project?",
        default: "test-project"
    }, {
        type: "list",
        name: "type",
        message: "Select your type of project",
        choices: ["javascript", "typescript"]
    }, {
        type: "confirm",
        name: "database",
        message: "Do you want to use a database?"
    }]).then(({ name, type, database }) => {
    
        const spinner = createSpinner("Creating...").start();
    
        
        fs.mkdir(path.join(__dirname, `../../${name}/`), (err) => spinner.error({text: `The name ${name} is in use.`}));
        
        shell.cp("-R", path.join(__dirname, `/template/${type}/*`), path.join(__dirname, `../../${name}`));
        
        if (database) {
            fs.writeFile(path.join(__dirname, `../../${name}/config/ database.js`), "hola desde config" , (err) => console.error(err));
        }
        
        spinner.success({text: chalkAnimation.rainbow("Project created successfully."), mark: ""});
    });

}


createProject();