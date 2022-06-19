export const mongoConnectionJs = `import mongoose from "mongoose";


const connection = () => {

    mongoose.connect("mongodb_uri").then(res => {
        console.log("Database is conected");
    }).catch(err => {
        console.error(err);
    });

}

export default connection;
`

export const postgresqlConnectionJs = `import { Pool } from "pg";


const pool = new Pool({
    
    user: "",
    password: "",
    host: "localhost",
    port: 5432,
    database: ""

});


export default pool;
`