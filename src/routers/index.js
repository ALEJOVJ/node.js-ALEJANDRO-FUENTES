// agrupa las rutas de mi aplicacion(usuarios,productos, notas, citas)

const {Router} = require("express")
const enrutador = Router()
const pruebaRouter = require("./pruebaRouter")
const usuariosRouter = require("./usuariosRouter")


enrutador.use("/mirutaPrueba", pruebaRouter)
enrutador.use("/usuarios", usuariosRouter)

module.exports = enrutador