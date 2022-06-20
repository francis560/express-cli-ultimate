import inquirer from "inquirer";
import shell from "shelljs";
import gradient from "gradient-string"; 
import { createSpinner } from "nanospinner";
import { createBasicFiles, createFolderProject } from "./createInitFolders.js";
import { createDbConnection } from "./createdb.js";
import welcome from "./welcome.js";
import finalMessage from "./finalProjectMessages.js";


const generateProject = () => {

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
    },
    {
        type: "confirm",
        name: "database",
        message: "Do you want to use a database?"
    }
    ]).then(({ name, type, database }) => {
    
        try {
    
            shell.config.silent = true;
    
            if (database) {
                inquirer.prompt({
                    type: "list",
                    name: "database_type",
                    message: "Select your database type",
                    choices: ["mongodb", "postgresql", "mysql"]
                }).then(({ database_type }) => {
    
                    console.log("\n");
                    
                    const spinner = createSpinner(gradient.rainbow(`Creating a new Express project in ${process.cwd()} \n`)).start();
            
                    createFolderProject(name);
            
                    createBasicFiles(name, type);

                    createDbConnection(database_type, type, name);
                    
                    spinner.stop();
            
                    finalMessage(name, spinner);
    
                });
    
                return;
            } 
            
            console.log("\n");

            const spinner = createSpinner(gradient.rainbow(`Creating a new Express project in ${process.cwd()} \n`)).start();
            
            createFolderProject(name);
    
            createBasicFiles(name, type);
            
            spinner.stop();
    
            finalMessage(name, spinner);
    
        } catch (err) {
    
            console.error(err);
    
        }
        
    
    });

}


export default generateProject;