//IMPORTAR MI APLICACION QUE SE LLAMA APP

const app = require("./app")

//VERIFICAR PUERTO DE LAS VARIABLES DE ENTORNO

const PUERTO = process.env.PUERTO || 3333

//IMPRIMO POR CONSOLA EL LINK SERVIDOR

app.listen(PUERTO,()=>{
    console.log(`MI SERVIDOR: http://localhost:${PUERTO}`)
})
