const listarUsuarios = require("../services/usuariosService")

const mostrarUsuarios = async(req, res)=>{
    try{
        const usuarios = await listarUsuarios()
        res.json(usuarios)
    }catch(error){
        res.status(500).json({mensaje: "error al comunicarse con la base datos.", Error: error.message})
    }
    //res.json({mensaje:"es mi ruta de usuarios"})

}

const registrarcontroller = async(req, res)=>{
    res.json({mensaje:"ruta de registrarme"})

}

const logincontroller = async(req, res)=>{
    res.json({mensaje:"ruta para iniciar sesion"})

}

module.exports = {mostrarUsuarios,registrarcontroller, logincontroller}