import express from "express";
import morgan from "morgan";
import indexRoutes from "../app/routes/index.routes.js";


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
    }

    routes () {
        this.server.use(indexRoutes.router);
    }

}


export default Server;