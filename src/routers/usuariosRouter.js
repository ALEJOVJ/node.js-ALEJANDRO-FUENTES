//Ruta de solo prueba
const { Router } = require('express')
const enrutador = Router()
const { mostrarUsuarios, registrarController, loginController, listUserIdController, editarController, eliminarController } = require('../controllers/listarUsuariosController')

//Funcion (req, res) debe ir en el controlador
enrutador.get("/listado", mostrarUsuarios)

//Ruta pra listar por ID
enrutador.get("/listadoID/:id", listUserIdController)

//Ruta para registrarse
enrutador.post("/registrar", registrarController)

//Ruta para editar 
enrutador.put("/editar/:id", editarController)

//Ruta para eliminar
enrutador.delete("/eliminar/:id", eliminarController)

//Ruta para iniciar sesion
enrutador.get("/login", loginController)

module.exports = enrutador