import gradient from "gradient-string";


const message = `
▓█████ ▒██   ██▒ ██▓███   ██▀███  ▓█████   ██████   ██████     ▄████▄   ██▓     ██▓
▓█   ▀ ▒▒ █ █ ▒░▓██░  ██▒▓██ ▒ ██▒▓█   ▀ ▒██    ▒ ▒██    ▒    ▒██▀ ▀█  ▓██▒    ▓██▒
▒███   ░░  █   ░▓██░ ██▓▒▓██ ░▄█ ▒▒███   ░ ▓██▄   ░ ▓██▄      ▒▓█    ▄ ▒██░    ▒██▒
▒▓█  ▄  ░ █ █ ▒ ▒██▄█▓▒ ▒▒██▀▀█▄  ▒▓█  ▄   ▒   ██▒  ▒   ██▒   ▒▓▓▄ ▄██▒▒██░    ░██░
░▒████▒▒██▒ ▒██▒▒██▒ ░  ░░██▓ ▒██▒░▒████▒▒██████▒▒▒██████▒▒   ▒ ▓███▀ ░░██████▒░██░
░░ ▒░ ░▒▒ ░ ░▓ ░▒▓▒░ ░  ░░ ▒▓ ░▒▓░░░ ▒░ ░▒ ▒▓▒ ▒ ░▒ ▒▓▒ ▒ ░   ░ ░▒ ▒  ░░ ▒░▓  ░░▓  
 ░ ░  ░░░   ░▒ ░░▒ ░       ░▒ ░ ▒░ ░ ░  ░░ ░▒  ░ ░░ ░▒  ░ ░     ░  ▒   ░ ░ ▒  ░ ▒ ░
   ░    ░    ░  ░░         ░░   ░    ░   ░  ░  ░  ░  ░  ░     ░          ░ ░    ▒ ░
   ░  ░ ░    ░              ░        ░  ░      ░        ░     ░ ░          ░  ░ ░  
                                                              ░                                                                                  

Created by Francis Pinales: https://github.com/francis560
`;


const welcome = () => {

    console.clear();

    console.log(gradient.rainbow.multiline(message));

    console.log("\n");
}


export default welcome;