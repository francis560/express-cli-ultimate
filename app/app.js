#!/usr/bin/env node

import inquirer from "inquirer";
import shell from "shelljs";
import gradient from "gradient-string"; 
import { createSpinner } from "nanospinner";
import createInitFiles from "./templates/javascript/createInitFiles.js";
import welcome from "./welcome.js";


welcome();
// {
//     type: "confirm",
//     name: "database",
//     message: "Do you want to use a database?"
// }

inquirer.prompt([{
    type: "input",
    name: "name",
    message: "What is the name of your project?",
    default: "test-project"
}, {
    type: "list",
    name: "type",
    message: "Select your type of project",
    choices: ["javascript"]
}]).then(({ name, type, database }) => {

    const spinner = createSpinner(gradient.rainbow("Creating...")).start();

    try {

        createInitFiles.createFolderProject(name);
        
        shell.cd(`${name}`);
        shell.exec("npm init --y");
        shell.exec("npm i express morgan");

        createInitFiles.createAppFile();
        createInitFiles.createConfigServerFile();
        createInitFiles.createIndexRoutesFile();
        createInitFiles.createIndexControllerFile();
        
        spinner.success({text: gradient.rainbow("Project created successfully.")});

    } catch (err) {

        console.error(err);

    }
    

});