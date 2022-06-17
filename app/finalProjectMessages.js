import gradient from "gradient-string"; 


const finalMessage = (name, spinner) => {
    spinner.success({text: "Project created successfully."});

    spinner.success({text: "Inside your project you can run several commands: \n", mark: " "});

    spinner.success({text: gradient.rainbow("   npm start:"), mark: " "});

    spinner.success({text: "   Start the production server. \n", mark: " "});

    spinner.success({text: gradient.rainbow("   npm run dev:"), mark: " "});

    spinner.success({text: "   Start the development server. \n", mark: " "});
    
    spinner.success({text: "We suggest you start by typing: \n", mark: " "});

    spinner.success({text: `   cd ${name} \n`, mark: " "});

    spinner.success({text: "   npm start \n", mark: " "});

    spinner.success({text: gradient.rainbow("Happy hacking! \n"), mark: " "});
}


export default finalMessage;