import app from "./config/server.js";


app.listen( app.get("PORT"), () => {
    
    console.log("Server on port", app.get("PORT"));

});