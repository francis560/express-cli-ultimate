#!/usr/bin/env node

import inquirer from "inquirer";
import path from "path";
import shell from "shelljs";
import fs from "fs";
import gradient from "gradient-string"; 
import { createSpinner } from "nanospinner";
import { fileURLToPath } from "url";
import welcome from "./welcome.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


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
    
        fs.mkdir(path.join(process.cwd(), `/${name}/`), (err) => {

            if (err) {
                spinner.error({text: `The name ${name} is in use.`});
    
                throw new Error();
            }

        });
        
        shell.cp("-R", path.join(process.cwd(), `app/template/${type}`), path.join(process.cwd(), `/${name}`));
        
        // if (database) {
        //     fs.writeFile(path.join(__dirname, `../../${name}/config/ database.js`), "hola desde config" , (err) => {
                
        //         if (err) {
        //             throw new Error();
        //         }

        //     });
        // }
        
        spinner.success({text: gradient.rainbow("Project created successfully.")});

        

    } catch (err) {

        console.error(err);

    }
    

});