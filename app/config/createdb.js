import path from "path";
import fs from "fs";
import shell from "shelljs";
import { mongodbJs, mongodbTs, mysqlJs, mysqlTs, postgresqlJs, postgresqlTs } from "../templates/packageJson.js";
import { mongoConnection, mysqlConnection, postgresqlConnection } from "../templates/database/dbConections.js";


const contentdbFile = (database_type, type, name) => {

    if (database_type === "mongodb") {

        shell.mkdir('-p', path.join(process.cwd(), `/${name}/app/models/`));

        fs.appendFile(path.join(process.cwd(), type === "javascript" ? `/${name}/config/database.js` : `/${name}/config/database.ts`), mongoConnection, (err) => {
            if (err) {
                console.error(err)
                return
            }
        });

        fs.writeFile(path.join(process.cwd(), `/${name}/package.json`), type === "javascript" ? mongodbJs : mongodbTs, (err) => {
            if (err) {
                console.error(err)
                return
            }
        });

    }

    if (database_type === "postgresql") {

        fs.appendFile(path.join(process.cwd(), type === "javascript" ? `/${name}/config/database.js` : `/${name}/config/database.ts`), postgresqlConnection, (err) => {
            if (err) {
                console.error(err)
                return
            }
        });

        fs.writeFile(path.join(process.cwd(), `/${name}/package.json`), type === "javascript" ? postgresqlJs : postgresqlTs, (err) => {
            if (err) {
                console.error(err)
                return
            }
        });

    }

    if (database_type === "mysql") {

        fs.appendFile(path.join(process.cwd(), type === "javascript" ? `/${name}/config/database.js` : `/${name}/config/database.ts`), mysqlConnection, (err) => {
            if (err) {
                console.error(err)
                return
            }
        });

        fs.writeFile(path.join(process.cwd(), `/${name}/package.json`), type === "javascript" ? mysqlJs : mysqlTs, (err) => {
            if (err) {
                console.error(err)
                return
            }
        });

    }

}

export const createDbConnection = (database_type, type, name) => {

    shell.touch(path.join(process.cwd(), type === "javascript" ? `/${name}/config/database.js` : `/${name}/config/database.ts`));

    contentdbFile(database_type, type, name);

} 