//ruta de solo usuarios

const {Router} = require("express")
const enrutador = Router()



enrutador.get("/rutaPersonal2", (req,res)=>{
    res.json({mensaje: "es mi rutausuarios y rutaPersonal2"})
})


module.exports = enrutador