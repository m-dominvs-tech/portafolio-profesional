const mongoose= require("mongoose");
require("dotenv").config();

const conectarDB = async () =>{
    try{
           await mongoose.connect(process.env.MONGO_URI);
           console.log("'🚀 Base de datos conectada para el proyecto Portafolio")
    }catch(error){
        console.error('❌ Error al conectar:', error);
    process.exit(1); // Detener si falla
    }
};

module.exports = conectarDB;