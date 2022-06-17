#!/usr/bin/env node
import inquirer from "inquirer";
import shell from "shelljs";
import gradient from "gradient-string"; 
import { createSpinner } from "nanospinner";
import createInitFilesJs from "./templates/javascript/createInitFiles.js";
import createInitFilesTs from "./templates/typescript/createInitFiles.js";
import welcome from "./welcome.js";


welcome();


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

    const spinner = createSpinner(gradient.rainbow("Creating...")).start();

    try {

        createInitFilesJs.createFolderProject(name);
        
        shell.config.silent = true;
        
        if (type === "javascript") {

            shell.cd(`${name}`);
            shell.exec("npm init --y");
            shell.exec("npm i express morgan");
    
            createInitFilesJs.createAppFolder();
            createInitFilesJs.createAppFile();
            createInitFilesJs.createConfigServerFile();
            createInitFilesJs.createIndexRoutesFile();
            createInitFilesJs.createIndexControllerFile();

        }

        if (type === "typescript") {
            
            shell.cd(`${name}`);

            createInitFilesTs.createAppFolder();
            createInitFilesTs.createAppFile();
            createInitFilesTs.createConfigServerFile();
            createInitFilesTs.createIndexRoutesFile();
            createInitFilesTs.createIndexControllerFile();
            createInitFilesTs.createNodemonFile();

        }
        
        spinner.success({text: gradient.rainbow("Project created successfully.")});

    } catch (err) {

        console.error(err);

    }
    

});