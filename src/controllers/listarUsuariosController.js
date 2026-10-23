const {listarUsuarios, registrarUsuario, listarUsuarioID, usuarioEditar, usuarioEliminar} = require("../services/usuariosService")

const mostrarUsuarios = async (req, res)=>{
    try {
        const usuarios = await listarUsuarios()
        res.json(usuarios)
    } catch (error) {
        res.status(500).json({mensaje : "Error al comunicarse con la base de datos.", Error: error.message})
    }
}
//Ruta registrarse
const registrarController = async (req, res) => {
    try {
        const dataUser = req.body;
        
        // Guardamos el usuario creado que retorna el servicio
        const nuevoUsuario = await registrarUsuario(dataUser);
        
        // Le respondemos al cliente con el usuario creado y un estado 201 (Creado)
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        // En caso de que falle, respondemos con el error para no colgar la app
        res.status(400).json({ error: error.message });
    }
}

const listUserIdController = async (req, res) =>{
    try {
        const { id } = req.params
        const idUser = Number(id)

        const userForID = await listarUsuarioID(idUser);

        res.status(200).json(userForID);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const editarController = async (req, res) =>{
    try {
        const { id } = req.params
        const idUser = Number(id)

        const userDataCh = req.body

        const userEdit = await usuarioEditar(idUser, userDataCh);

        res.status(200).json(userEdit);
    } catch (error) {
        res.status(400).json({ error: error.message }); 
    }
}

const eliminarController = async (req, res) =>{
    try {
        const { id } = req.params
        const idUser = Number(id)

        const userDelete = await usuarioEliminar(idUser);

        res.status(200).json(userDelete);
    } catch (error) {
        res.status(400).json({ error: error.message }); 
    }
}


//Ruta de login
const loginController = async (req, res)=>{
    res.json({mensaje: "Ruta para iniciar sesion"})
}

module.exports = {
    mostrarUsuarios,
    registrarController,
    listUserIdController,
    editarController,
    eliminarController,
    loginController
}