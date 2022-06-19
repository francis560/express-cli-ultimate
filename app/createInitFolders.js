import path from "path";
import fs from "fs";
import shell from "shelljs";
import gradient from "gradient-string"; 
import { createSpinner } from "nanospinner";
import { appFileJs, configServerJs, indexControllerJs, indexRoutesJs } from "./templates/javascript/contentJsFiles.js";
import { appFileTs, configServerTs, indexControllerTs, indexRoutesTs, nodemonFile } from "./templates/typescript/contentTsFiles.js";


const contentBasicFiles = (name, type) => {

    fs.appendFile(path.join(process.cwd(), type === "javascript" ? `/${name}/app.js` : `/${name}/app.ts`), type === "javascript" ? appFileJs : appFileTs, (err) => {
        if (err) {
            console.error(err)
            return
        }
    });

    fs.appendFile(path.join(process.cwd(), type === "javascript" ? `/${name}/config/server.js` : `/${name}/config/server.ts`), type === "javascript" ? configServerJs : configServerTs, (err) => {
        if (err) {
            console.error(err)
            return
        }
    });

    fs.appendFile(path.join(process.cwd(), type === "javascript" ? `/${name}/app/routes/index.routes.js` : `/${name}/app/routes/index.routes.ts`), type === "javascript" ? indexRoutesJs : indexRoutesTs, (err) => {
        if (err) {
            console.error(err)
            return
        }
    });

    fs.appendFile(path.join(process.cwd(), type === "javascript" ? `/${name}/app/controllers/index.controller.js` : `/${name}/app/controllers/index.controller.ts`), type === "javascript" ? indexControllerJs : indexControllerTs, (err) => {
        if (err) {
            console.error(err)
            return
        }
    });

    if (type === "typescript") {
        fs.appendFile(path.join(process.cwd(), `/${name}/nodemon.json`), nodemonFile, (err) => {
            if (err) {
                console.error(err)
                return
            }
        });
    }
    // package json for javascript project
    if (type === "javascript") {
        fs.appendFile(path.join(process.cwd(), `/${name}/package.json`), `{
  "name": "${name}",
  "version": "1.0.0",
  "description": "",
  "type": "module",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "build": "npm i",
    "dev": "nodemon app.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "morgan": "^1.10.0",
    "dotenv": "^16.0.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
}
        `, (err) => {
            if (err) {
                console.error(err)
                return
            }
        });

    }

    if (type === "typescript") {
        fs.appendFile(path.join(process.cwd(), `/${name}/package.json`), `{
  "name": "${name}",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "build": "npx tsc -b",
    "dev": "nodemon"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "morgan": "^1.10.0",
    "dotenv": "^16.0.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.7",
    "ts-node": "^10.7.0",
    "typescript": "^4.6.3",
    "@types/dotenv": "^8.2.0",
    "@types/express": "^4.17.13",
    "@types/morgan": "^1.9.3",
    "@types/nodemon": "^1.19.1"
  }
}
        `, (err) => {
            if (err) {
                console.error(err)
                return
            }
        });

    }

}

export const createBasicFiles = (name, type) => {

    shell.touch(path.join(process.cwd(), `/${name}/.env`));
    shell.touch(path.join(process.cwd(), `/${name}/README.md`));
    shell.touch(path.join(process.cwd(), `/${name}/.gitignore`));
    shell.touch(path.join(process.cwd(), `/${name}/package.json`));
    
    if (type === "javascript") {
        shell.touch(path.join(process.cwd(), `/${name}/app.js`));    
        shell.touch(path.join(process.cwd(), `/${name}/config/server.js`));
        shell.touch(path.join(process.cwd(), `/${name}/app/routes/index.routes.js`));    
        shell.touch(path.join(process.cwd(), `/${name}/app/controllers/index.controller.js`));
    }

    if (type === "typescript") {
        shell.touch(path.join(process.cwd(), `/${name}/app.ts`));   
        shell.touch(path.join(process.cwd(), `/${name}/nodemon.json`)); 
        shell.touch(path.join(process.cwd(), `/${name}/config/server.ts`));
        shell.touch(path.join(process.cwd(), `/${name}/app/routes/index.routes.ts`));    
        shell.touch(path.join(process.cwd(), `/${name}/app/controllers/index.controller.ts`));
    }


    contentBasicFiles(name, type);

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