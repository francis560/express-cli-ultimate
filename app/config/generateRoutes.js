import path from "path";
import shell from "shelljs";


export const generateRoute = (args) => {

    if (args.route) {

        shell.touch(path.join(process.cwd(), args.type === "ts" || "typescript" ? `/app/routes/${args.route}.routes.ts` : `/app/routes/${args.route}.routes.js`));
        shell.touch(path.join(process.cwd(), args.type === "ts" || "typescript" ? `/app/controllers/${args.route}.controller.ts` : `/app/controllers/${args.route}.controller.js`));
                
    }

}