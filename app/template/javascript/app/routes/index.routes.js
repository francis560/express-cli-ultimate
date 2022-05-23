import { Router } from "express";
import indexController from "../controllers/index.controllers";


class IndexRoutes extends indexController{

    router = Router();

    config () {
        this.routes();
    }

    routes () {
        this.router.get("/hello-world", this.home);
    }

}


const indexRoutes = new IndexRoutes();
export default indexRoutes;