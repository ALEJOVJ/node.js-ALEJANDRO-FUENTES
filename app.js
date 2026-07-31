import express from 'express';
import "dotenv/config" 

const app = express();
const port = process.env.puerto||3000;
app.get("/", (_, res) => {
res.send('Aprendicez ficha 3407186 SENA');
});

app.get("/ruta1", (req, res)=>{
    //template string
    res.send('<h1>usando res.send<h1>')
})

app.get("/ruta2", (req, res)=>{
    //template string
    res.json({"dev": "node--watch app.js", "script":"node app.js"})
})

app.get("/ruta3/:nombre/:apellido/:edad", (req, res)=>{
    //template string
    const nameusuarios = req.params.nombre
    const apellido = req.params.apellido
    const edad = req.params.edad
    res.json({"usuario": nameusuarios, "apellido": apellido, "edad": edad})
})

app.get("/ruta4", (req, res)=>{
    //rutas con parametros de consulta query
    const numero = req.query.phone || 3017481103
    const orden = req.query.orden || "sin orden"
    const pagina = req.query.pagina || 1
    res.send(`<h1>Listado aprendices</h1> 
        <h2>el listado en orden: ${orden}</h2>
        <h3>numero: ${numero}</h3>
        <p>pagina: ${pagina}<p>
        `)

})

app.get("/saludo/:nombre", (req, res) => {
    const nombre = req.params.nombre;

    if (nombre.length < 3) {
        return res.status(400).send("El nombre es muy corto");
    }

    res.send(`Hola ${nombre}, bienvenido`);
});

app.get("/productos/:nombre", (req, res) => {
    const nombre = req.params;
    const producto= {
        id: 1,
        nombre: nombre,
        stock: 10,
        precio: 50000,
        categoria: "comida"
    };
    res.json(producto);
});

app.get("/productos/:categoria/:id", (req, res) => {
    const {categoria,id} = req.params;
    
    res.json({
        "servidor":"servidor papu",
        "categoria":categoria,
        producto: id 
    });
});



    
app.listen(port, () => {
console.log( `Servidor: http://localhost:${port}`);
});