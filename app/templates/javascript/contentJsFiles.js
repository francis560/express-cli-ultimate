export const appFileJs = `import Server from "./config/server.js";


class App extends Server {
            
    start () {
        this.server.listen(this.server.get("PORT"), () => {
            console.log("🚀 Server on port", this.server.get("PORT"));
        });
    }
        
}
        
        
const app = new App().start();
`;

export const configServerJs = `import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import indexRoutes from "../app/routes/index.routes.js";
dotenv.config();
        
        
class Server {
        
    server;
        
    constructor () {
        this.server = express();
        this.config();
        this.routes();
    }
        
    config () {
        this.server.use(express.json());
        this.server.use(express.urlencoded({ extended: true }));
        this.server.use(morgan("dev"));
        this.server.set("PORT", process.env.PORT || 3000);

        // Import database
    }
        
    routes () {
        this.server.use(indexRoutes.router);
    }
        
}
        
        
export default Server;
`;

export const indexRoutesJs = `import { Router } from "express";
import indexController from "../controllers/index.controller.js";


class IndexRoutes extends indexController{

    router;

    constructor () {
        super();
        this.router = Router();
        this.routes();
    }

    routes () {
        this.router.get("/hello-world", this.home);
    }

}


const indexRoutes = new IndexRoutes();
export default indexRoutes;
`;

export const indexControllerJs = `
class IndexController {

    home (req, res) {

        res.send("Hello World");

    }

}


export default IndexController;
`;



// import { Router } from "express";
// import indexController from "../controllers/index.controllers.js";


// class IndexRoutes extends indexController{

//     router;

//     constructor () {
//         super();
//         this.router = Router();
//         this.routes();
//     }

//     routes () {
//         this.router.get("/hello-world", this.home);
//     }

// }


// const indexRoutes = new IndexRoutes();
// export default indexRoutes;