//ruta de solo usuarios

const {Router} = require("express")
const enrutador = Router()
const {mostrarUsuarios , registrarcontroller, logincontroller} = require ('../controllers/listarUsuariosController')






enrutador.get("/listado", mostrarUsuarios)
enrutador.get("/registrar", registrarcontroller)
enrutador.post("/login", logincontroller)


module.exports = enrutador