const express = require("express")
const app = express()

const conexion = require("./database/db")

app.set("view engine", "ejs")

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static("public"))

const alumnos = require('./routes/alumnos')
app.use(alumnos)

app.get("/", (req, res) => {
  res.send("Hola")
})

app.listen(3000, () => {
  console.log("SERVIDOR A SU SERVICIO EN EL PUERTO 3000")
})