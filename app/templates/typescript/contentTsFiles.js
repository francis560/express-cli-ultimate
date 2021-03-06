export const appFileTs = `import Server from "./config/server";


class App extends Server {
            
    public start () {
        this.server.listen(this.server.get("PORT"), () => {
            console.log("🚀 Server on port", this.server.get("PORT"));
        });
    }
        
}
        
        
const app = new App().start();
`;

export const configServerTs = `import express, { Application } from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import indexRoutes from "../app/routes/index.routes";
dotenv.config();
        
        
class Server {
        
    public server: Application;
        
    constructor () {
        this.server = express();
        this.config();
        this.routes();
    }
        
    private config () {
        this.server.use(express.json());
        this.server.use(express.urlencoded({ extended: true }));
        this.server.use(morgan("dev"));
        this.server.set("PORT", process.env.PORT || 3000);

        // Import database
    }
        
    private routes () {
        this.server.use(indexRoutes.router);
    }
        
}
        
        
export default Server;
`;

export const indexRoutesTs = `import { Router } from "express";
import indexController from "../controllers/index.controller";


class IndexRoutes extends indexController{

    public router: Router;

    constructor () {
        super();
        this.router = Router();
        this.routes();
    }

    private routes () {
        this.router.get("/hello-world", this.home);
    }

}


const indexRoutes = new IndexRoutes();
export default indexRoutes;
`;

export const indexControllerTs = `import { Request, Response } from "express";


class IndexController {

    public home (req: Request, res: Response) {

        res.send("Hello World");

    }

}


export default IndexController;
`;

export const nodemonFile = `{
"whatch": ["app.ts", "config", "app"],
"ext": "ts",
"ignore": ["app/**/*.spec.ts"],
"exec": "ts-node app.ts"
}
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