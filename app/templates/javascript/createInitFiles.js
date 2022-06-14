import path from "path";
import fs from "fs";
import { appFile, configServer, indexRoutes, indexController } from "./contentFiles.js";


class CreateInitFiles {
    
    createFolderProject (name) {
        fs.mkdir(path.join(process.cwd(), `/${name}/`), (err) => {

            if (err) {
                spinner.error({text: `The name ${name} is in use.`});
    
                throw new Error();
            }

        });
    }

    createAppFile () {
        fs.writeFile(path.join(process.cwd(), `/app.js`), appFile, err => {
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

        fs.writeFile(path.join(process.cwd(), `/config/server.js`), configServer, err => {
            if (err) {
                console.error(err);
            }
            // file written successfully
        });
    }
    
    createIndexRoutesFile () {
        fs.mkdir(path.join(process.cwd(), `/routes/`), (err) => {

            if (err) {    
                throw new Error();
            }

        });

        fs.writeFile(path.join(process.cwd(), `/routes/index.routes.js`), indexRoutes, err => {
            if (err) {
                console.error(err);
            }
            // file written successfully
        });
    }

    createIndexControllerFile () {
        fs.mkdir(path.join(process.cwd(), `/controllers/`), (err) => {

            if (err) {    
                throw new Error();
            }

        });

        fs.writeFile(path.join(process.cwd(), `/controllers/index.controller.js`), indexController, err => {
            if (err) {
                console.error(err);
            }
            // file written successfully
        });
    }

}


const createInitFiles = new CreateInitFiles();
export default createInitFiles;