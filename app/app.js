#!/usr/bin/env node
import inquirer from "inquirer";
import shell from "shelljs";
import gradient from "gradient-string"; 
import { createSpinner } from "nanospinner";
import { createBasicFiles, createFolderProject } from "./createInitFolders.js";
import welcome from "./welcome.js";
import "./commands.js";


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
} 
// {
//     type: "confirm",
//     name: "database",
//     message: "Do you want to use a database?"
// }
]).then(({ name, type, database }) => {

    try {

        shell.config.silent = true;

        // if (database) {
        //     inquirer.prompt({
        //         type: "list",
        //         name: "database_type",
        //         message: "Select your database type",
        //         choices: ["mongodb"]
        //     }).then(({ database_type }) => {



        //     });

        //     return;
        // } 
        
        
        const spinner = createSpinner(gradient.rainbow("Creating...")).start();
        
        createFolderProject(name);

        createBasicFiles(name, type);
        
        spinner.success({text: gradient.rainbow("Project created successfully. \n")});

    } catch (err) {

        console.error(err);

    }
    

});