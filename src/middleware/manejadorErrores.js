const manejadorErrores = (error,req, res, next)=> {
    const codigoEstado = error.statuscode || 500
    const mensaje = error.mensaje || "Error inesperado !!"

    const fecha = new Date().toISOString();
    console.log(`[Historial de peticones] ${fecha}, ${req.method}, ${req.url}, ${req.ip}`)

    console.error(`[ERROR] - ${new Date().toISOString()} - ${codigoEstado} - ${mensaje}`)
    //validar si hay mas informacion

    if (error.stack){
        console.error(error.stack)
    }
    //respuesta en json
    res.json({
        Error: "Error", codigoEstado, mensaje,
        //dependiendo si estamos en desarrollo o produccion 
        ...(process.env.NODE_ENV === "development" && {stack: error.stack})
    })

}

module.exports = manejadorErrores