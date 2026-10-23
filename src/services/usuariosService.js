const ormPrisma = require("../config/conexion")


const listarUsuarios = async ()=>{
    const usuarios = await ormPrisma.usuarios.findMany();
    return usuarios
}

const registrarUsuario = async (dataUser)=>{
    const create = await ormPrisma.usuarios.create({data: dataUser});

    return create
}

const listarUsuarioID = async (idUser)=>{
    const usuario = await ormPrisma.usuarios.findUnique({ where: {id: idUser} })
    return usuario
}   
const usuarioEditar = async (idUser, dataUser)=>{
    const usuarioUpdated = await ormPrisma.usuarios.update({ where: {id: idUser}, data: dataUser })
    return usuarioUpdated
}   
const usuarioEliminar = async (idUser)=>{
    const usuarioDeleted = await ormPrisma.usuarios.delete({ where: {id: idUser} })
    return usuarioDeleted
}   

module.exports = {listarUsuarios, registrarUsuario, listarUsuarioID, usuarioEditar, usuarioEliminar}