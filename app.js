const express = require('express');
const app = express();
require('dotenv').config();
const port = 3000;


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
res.send('Aprendicez ficha 3407186');
});



app.get("/api/aprendices", (req,res) => {
    res.json(200)({
        'mensaje':'Listado de aprendices'
    })
})

app.get("/api/aprendices/:id", (req,res) => {
    res.json(200)({
        'mensaje':'Listar aprendiz'
    })
})
 
app.post("/api/aprendices", (req,res) => {
    res.status(201).json({
        'mensaje':'crear aprendices'
    })
})

app.put("/api/aprendices/:id", (req,res) => {
    res.status(200).json({
        'mensaje':'editar aprendices'
    })
})

app.delete("/api/aprendices/:id", (req,res) => {
    res.status(200).json({
        'mensaje':'eliminar aprendices'
    })
})

app.post("/rutajson", (req,res) => {
    const todosDatos = req.body
    const edad = todosDatos.edad
    if (edad >= 18) {res.json({mensaje:"es mayor"})
    }else {
        res.json({mensaje:"es menor"})
    }
        
})

app.post("/rutaFormulario", (req,res) => {
    const formulario = req.body
    const programa = req.body.programa

    res.json({formulario: formulario, My_programa: programa})
        
})

app.listen(port, () => {
console.log( `SERVIDOR: http://localhost:${port}`);
});