import path from "path";
import fs from "fs";
import { appFile, configServer, indexRoutes, indexController, nodemonFile } from "./contentFiles.js";


class CreateInitFiles {
    
    createFolderProject (name) {
        fs.mkdir(path.join(process.cwd(), `/${name}/`), (err) => {

            if (err) {
                spinner.error({text: `The name ${name} is in use.`});
    
                throw new Error();
            }
            
        });
    }

    createAppFolder () {
        fs.mkdir(path.join(process.cwd(), `/app/`), (err) => {

            if (err) {
                console.error(err);
            }

        });
    }

    createAppFile () {
        fs.writeFile(path.join(process.cwd(), `/app.ts`), appFile, err => {
            if (err) {
                console.error(err);
            }
            // file written successfully
        });
    }

    createNodemonFile () {
        fs.writeFile(path.join(process.cwd(), `/nodemon.json`), nodemonFile, err => {
            if (err) {
                console.error(err);
            }
            // file written successfully
        });
    }

    createConfigServerFile () {
        fs.mkdir(path.join(process.cwd(), `/config/`), (err) => {

            if (err) {    
                throw new Error();
            }

        });

        fs.writeFile(path.join(process.cwd(), `/config/server.ts`), configServer, err => {
            if (err) {
                console.error(err);
            }
            // file written successfully
        });
    }
    
    createIndexRoutesFile () {
        fs.mkdir(path.join(process.cwd(), `/app/routes/`), (err) => {

            if (err) {    
                throw new Error();
            }

        });

        fs.writeFile(path.join(process.cwd(), `/app/routes/index.routes.ts`), indexRoutes, err => {
            if (err) {
                console.error(err);
            }
            // file written successfully
        });
    }

    createIndexControllerFile () {
        fs.mkdir(path.join(process.cwd(), `/app/controllers/`), (err) => {

            if (err) {    
                throw new Error();
            }

        });

        fs.writeFile(path.join(process.cwd(), `/app/controllers/index.controller.ts`), indexController, err => {
            if (err) {
                console.error(err);
            }
            // file written successfully
        });
    }

}


const createInitFiles = new CreateInitFiles();
export default createInitFiles;