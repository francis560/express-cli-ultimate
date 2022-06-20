export const mongoConnection = `import mongoose from "mongoose";


const connection = () => {

    mongoose.connect("mongodb_uri").then(res => {
        console.log("Database is conected");
    }).catch(err => {
        console.error(err);
    });

}

export default connection;
`

export const postgresqlConnection = `import { Pool } from "pg";


const pool = new Pool({
    
    user: "",
    password: "",
    host: "localhost",
    port: 5432,
    database: ""

});


export default pool;
`

export const mysqlConnection = `import mysql from "mysql";


const mysqlConnection = mysql.createConnection({

    host: "localhost",
    user: "",
    password: "",
    database: "",
    multipleStatements: true

});


mysqlConnection.connect((err) => {
    if (err) {
        console.error(err);
        return;
    } else {
        console.log('Database is connected');
    }
});


export default mysqlConnection;
`