const {crearArchivo} = require('./helpers/multiplicar');
const argv = require("./config/yargs");
const colors = require("colors/safe");

console.clear();

//const [ , , arg3 = "base=5"] = process.argv;
//const [, base = 5] = arg3.split("=");

//console.log(argv);
//const base = 5;

crearArchivo(argv.b, argv.l, argv.h)
    .then (nombreArchivo => console.log(colors.custom_trap(nombreArchivo, "creado")))
    .catch(err => console.log(err));

colors.setTheme({
    custom_trap: ["trap", "rainbow"]
})    