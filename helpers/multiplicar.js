const fs = require("fs");
const colors = require("colors/safe");
const { argv } = require("process");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try{

        let salida= "";

            for (let i=0; i<=hasta; i++){
                let resultado;
                resultado =  base*i;
                salida += (`${base} x ${i}: ${resultado}\n`);
            }   
        
        if(listar){

            console.log(colors.green("======================="));
            console.log(colors.custom_trap(`   TABLA DEL ${base}   `));
            console.log(colors.green("======================="));

            console.log(colors.custom(salida));
        }
    
        fs.writeFileSync(`./archivos/tabla-${base}.txt`, salida);
    
    return (`tabla-${base}.txt`);
    }catch (err){
        throw err;
    }
    
}

colors.setTheme({
    custom:["america", "bold"],
    custom_trap:["trap", "rainbow"]
});

module.exports = {
    crearArchivo
}