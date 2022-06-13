import Server from "./config/server.js";


class App extends Server {
    
    start () {
        this.server.listen(this.server.get("PORT"), () => {
            console.log("🚀 Server on port", this.server.get("PORT"));
        });
    }

}


const app = new App().start();