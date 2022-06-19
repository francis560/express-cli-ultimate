import path from "path";
import fs from "fs";
import shell from "shelljs";
import { mongoConnectionJs, postgresqlConnectionJs } from "./templates/javascript/contentdbJs.js";
import { mongoConnectionTs, postgresqlConnectionTs } from "./templates/typescript/contentdbTs.js";


const contentdbFile = (database_type, type, name) => {
    
    if (database_type === "mongodb") {

        fs.appendFile(path.join(process.cwd(), type === "javascript" ? `/${name}/config/database.js` : `/${name}/config/database.ts`), type === "javascript" ? mongoConnectionJs : mongoConnectionTs, (err) => {

            if (err) {
                console.error(err)
                return
            }

        });

        if (type === "javascript") {
            fs.writeFile(path.join(process.cwd(), `/${name}/package.json`), `{
  "name": "${name}",
  "version": "1.0.0",
  "description": "",
  "type": "module",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "build": "npm i",
    "dev": "nodemon app.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "morgan": "^1.10.0",
    "dotenv": "^16.0.1",
    "mongoose": "^6.3.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
}
            `, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
            });

        }

        if (type === "typescript") {
            fs.appendFile(path.join(process.cwd(), `/${name}/package.json`), `{
  "name": "${name}",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "build": "npx tsc -b",
    "dev": "nodemon"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "morgan": "^1.10.0",
    "dotenv": "^16.0.1",
    "mongoose": "^6.3.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.7",
    "ts-node": "^10.7.0",
    "typescript": "^4.6.3",
    "@types/dotenv": "^8.2.0",
    "@types/express": "^4.17.13",
    "@types/morgan": "^1.9.3",
    "@types/nodemon": "^1.19.1",
    "@types/mongoose": "^5.11.97"
  }
}
            `, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
            });

        }
    
    }

    if (database_type === "postgresql") {

      fs.appendFile(path.join(process.cwd(), type === "javascript" ? `/${name}/config/database.js` : `/${name}/config/database.ts`), type === "javascript" ? postgresqlConnectionJs : postgresqlConnectionTs, (err) => {

          if (err) {
              console.error(err)
              return
          }

      });

      if (type === "javascript") {
          fs.writeFile(path.join(process.cwd(), `/${name}/package.json`), `{
  "name": "${name}",
  "version": "1.0.0",
  "description": "",
  "type": "module",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "build": "npm i",
    "dev": "nodemon app.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "morgan": "^1.10.0",
    "dotenv": "^16.0.1",
    "pg": "^8.7.3"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
}
          `, (err) => {
              if (err) {
                  console.error(err)
                  return
              }
          });

      }

      if (type === "typescript") {
          fs.appendFile(path.join(process.cwd(), `/${name}/package.json`), `{
  "name": "${name}",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "build": "npx tsc -b",
    "dev": "nodemon"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "morgan": "^1.10.0",
    "dotenv": "^16.0.1",
    "pg": "^8.7.3"
  },
  "devDependencies": {
    "nodemon": "^2.0.7",
    "ts-node": "^10.7.0",
    "typescript": "^4.6.3",
    "@types/dotenv": "^8.2.0",
    "@types/express": "^4.17.13",
    "@types/morgan": "^1.9.3",
    "@types/nodemon": "^1.19.1"
  }
}
          `, (err) => {
              if (err) {
                  console.error(err)
                  return
              }
          });

      }
  
    }

}

export const createDbConnection = (database_type, type, name) => {

    if (type === "javascript") {
        shell.touch(path.join(process.cwd(), `/${name}/config/database.js`)); 
    }

    if (type === "typescript") {
        shell.touch(path.join(process.cwd(), `/${name}/config/database.ts`)); 
    }

    contentdbFile(database_type, type, name);

} 