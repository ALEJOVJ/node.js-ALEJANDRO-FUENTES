const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PUERTO || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Módulos
const sistemaArchivo = require('fs');
const path = require('path');

// Archivo JSON
const rutaArchivo = path.join(__dirname, 'datos.json');

// Multer
const multer = require('multer');

// Carpeta para imágenes
app.use('/misImagenes', express.static(path.join(__dirname, 'misImagenes')));

// Configuración de almacenamiento
const almacenamiento = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, 'misImagenes/');
    },

    filename: (req, file, cb) => {

        // IMPORTANTE:
        // extname pertenece a "path", NO a "file"
        const extension = path.extname(file.originalname);

        cb(null, `${Date.now()}${extension}`);
    }

});

const cargar = multer({
    storage: almacenamiento
});

// Página principal
app.get('/', (req, res) => {
    res.send('Aprendices ficha 3407186');
});

// Listar aprendices
app.get('/api/aprendices', (req, res) => {

    sistemaArchivo.readFile(rutaArchivo, 'utf-8', (error, datos) => {

        if (error) {
            return res.status(500).json({
                Error: 'No se puede leer datos.json'
            });
        }

        const listaAprendices = JSON.parse(datos);

        res.status(200).json({
            mensaje: listaAprendices
        });
    });
});

// Listar un aprendiz
app.get('/api/aprendices/:id', (req, res) => {

    res.status(200).json({
        mensaje: 'Listar un aprendiz',
        id: req.params.id
    });

});

// Crear aprendiz
app.post('/api/aprendices', cargar.single('imagen'), (req, res) => {

    const datosAprendiz = req.body;

    // Guardar ruta de imagen
    datosAprendiz.imagen = req.file
        ? `/misImagenes/${req.file.filename}`
        : 'sin imagen';

    sistemaArchivo.readFile(rutaArchivo, 'utf-8', (error, datos) => {

        if (error) {
            return res.status(500).json({
                Error: 'No se puede leer datos.json'
            });
        }

        const listaAprendices = JSON.parse(datos);

        // Agregar aprendiz
        listaAprendices.push(datosAprendiz);

        sistemaArchivo.writeFile(
            rutaArchivo,
            JSON.stringify(listaAprendices, null, 2),
            (error) => {

                if (error) {
                    return res.status(500).json({
                        Error: 'No se puede escribir datos.json'
                    });
                }

                res.status(200).json({
                    mensaje: 'Aprendiz creado',
                    'Datos Aprendiz': datosAprendiz
                });

            }
        );

    });

});

// Editar aprendiz
app.put('/api/aprendices/:id', (req, res) => {

    res.status(200).json({
        mensaje: 'Editar aprendiz',
        id: req.params.id
    });

});

// Eliminar aprendiz
app.delete('/api/aprendices/:id', (req, res) => {

    res.status(200).json({
        mensaje: 'Eliminar aprendiz',
        id: req.params.id
    });

});

// Recibir JSON
app.post('/rutaJson', (req, res) => {

    const todosDatos = req.body;
    const edad = req.body.Edad;

    if (edad >= 18) {

        return res.json({
            mensaje: 'Es mayor de edad',
            datosJson: todosDatos
        });

    } else {

        return res.json({
            mensaje: 'Es menor de edad',
            datosJson: todosDatos
        });

    }

});

// Recibir formularios
app.post('/rutaFormularios', (req, res) => {

    const todosDatos = req.body;
    const programa = req.body.programa;

    res.json({
        Todosdatos: todosDatos,
        Mi_Programa: programa
    });

});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor: http://localhost:${port}`);
});
