import { Router } from "express";
import indexController from "../controllers/index.controllers.js";


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