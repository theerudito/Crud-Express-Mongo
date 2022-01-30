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

const port = process.env.PORT || 3500
app.listen(port, () => console.log("SERVIDOR A SU SERVICIO EN EL PUERTO", port))

