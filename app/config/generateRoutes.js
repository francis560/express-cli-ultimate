import shell from "shelljs";


export const generateRoute = (args) => {
    
    if (args.route) {
        
        args.type === "ts" ? console.log("ts") : console.log("js")

        console.log(args.route);
        
    }

}