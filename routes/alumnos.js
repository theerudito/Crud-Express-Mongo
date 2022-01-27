const express = require("express")
const router = express.Router()


const alumnoControler = require("../controles/alumnoControler")


//Mostrar todos los alumnos (GET)
router.get('/', alumnoControler.mostrar)
//Crear alumno (POST)
router.post('/crear', alumnoControler.crear)
//Editar alumno (POST)
router.post('/editar', alumnoControler.editar)
//Borrar alumno (GET)
router.get('/borrar/:id', alumnoControler.borrar)

module.exports = router


