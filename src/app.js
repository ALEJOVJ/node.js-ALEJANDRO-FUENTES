require("dotenv").config()
const express = require("express")

//importar enrutador

const enrutador = require("./routers")

const app = express()

//USAR MIDDLEWARE, FORMATEAR EL BODY
app.use(express.json())
app.use(express.urlencoded({extended: true}))
//IMPORTAR EL ARCHIVO ENRUTADOR DE ROUTERS
app.use("/api", enrutador)


//ENDPONIT RAIZ
app.get("/",(req,res)=>{
    res.send("API, REST ESTRUCTURADO POR CAPAS")
})

module.exports = app