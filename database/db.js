const mongoose = require("mongoose")

const url = "mongodb://localhost/AlumnosDB"

const conexion = mongoose.connect(url)
.then( () =>console.log("Conectado a la Base de Datos de MongoDB"))
.catch( (e) => console.log("Error en conectar con mongo: " + e))

module.exports = conexion