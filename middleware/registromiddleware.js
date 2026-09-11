const registromiddleware = (req, res, next)=> {
    const fecha = new Date().toISOString();
    console.log(`[Historial de peticones] ${fecha}, ${req.method}, ${req.url}, ${req.ip}`)
    next()
}

module.exports = registromiddleware