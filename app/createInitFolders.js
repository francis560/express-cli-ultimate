import path from "path";
import fs from "fs";
import shell from "shelljs";
import gradient from "gradient-string"; 
import { createSpinner } from "nanospinner";
import { appFile, configServer, indexController, indexRoutes } from "./templates/javascript/contentJsFiles.js";


const contentBasicJsFiles = (name) => {

    fs.appendFile(path.join(process.cwd(), `/${name}/app.js`), appFile, (err) => {
        if (err) {
            console.error(err)
            return
        }
    });

    fs.appendFile(path.join(process.cwd(), `/${name}/config/server.js`), configServer, (err) => {
        if (err) {
            console.error(err)
            return
        }
    });

    fs.appendFile(path.join(process.cwd(), `/${name}/app/routes/index.routes.js`), indexRoutes, (err) => {
        if (err) {
            console.error(err)
            return
        }
    });

    fs.appendFile(path.join(process.cwd(), `/${name}/app/controllers/index.controller.js`), indexController, (err) => {
        if (err) {
            console.error(err)
            return
        }
    });

}

export const createBasicJsFiles = (name) => {

    shell.touch(path.join(process.cwd(), `/${name}/app.js`));

    shell.touch(path.join(process.cwd(), `/${name}/README.md`));

    shell.touch(path.join(process.cwd(), `/${name}/.gitignore`));

    shell.touch(path.join(process.cwd(), `/${name}/config/server.js`));

    shell.touch(path.join(process.cwd(), `/${name}/app/routes/index.routes.js`));

    shell.touch(path.join(process.cwd(), `/${name}/app/controllers/index.controller.js`));

    contentBasicJsFiles(name);

}

const createBasicFolders = (name) => {

    shell.mkdir('-p', path.join(process.cwd(), `/${name}/app/`));

    shell.mkdir('-p', path.join(process.cwd(), `/${name}/config/`));

    shell.mkdir('-p', path.join(process.cwd(), `/${name}/app/routes/`));

    shell.mkdir('-p', path.join(process.cwd(), `/${name}/app/controllers/`));

}

export const createFolderProject = (name) => {

    if (!fs.existsSync(path.join(process.cwd(), `/${name}/`))) {

        shell.mkdir('-p', path.join(process.cwd(), `/${name}/`));

        createBasicFolders(name);

    } else {
    
        createSpinner(gradient.rainbow(`The name ${name} is in use. \n`)).error();
        
        shell.exit(1);

    }

}