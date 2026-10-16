const ormprisma = require("../config/conexion")

const listarUsuarios = async ()=>{
    const usuarios = await ormprisma.usuarios.findMany()
    return usuarios

}

module.exports = listarUsuarios