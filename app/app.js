import inquirer from "inquirer";
import path from "path";
import fs from "fs";
import chalkAnimation from "chalk-animation";
import { exec } from "child_process";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.clear();

//chalkAnimation.rainbow("ExpressJs cli");

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

    fs.mkdir(path.join(__dirname, `../../${name}`), { recursive: true }, (err) => {});

    fs.mkdir(path.join(__dirname, `../../${name}/app`), { recursive: true }, (err) => {});

    fs.mkdir(path.join(__dirname, `../../${name}/config`), { recursive: true }, (err) => {});

    fs.writeFile(path.join(__dirname, `../../${name}/ app.js`), "hola desde app" , (err) => {});

    fs.writeFile(path.join(__dirname, `../../${name}/config/ server.js`), "hola desde config" , (err) => {});

    if (database) {
        fs.writeFile(path.join(__dirname, `../../${name}/config/ database.js`), "hola desde config" , (err) => {});
    }

});