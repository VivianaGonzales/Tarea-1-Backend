const express = require('express')
const app = express()
const port = 8080

//Crear una ruta que reciba nombre y apellido por medio de params (ruta parametrizada) 
//y devuelva por un res.send un query string armando un saludo (ej: res.send(`Hola ${nombre}`) ).
app.get('/saludo/:nombre/:apellido', (req, res) => {
    let nombre = req.params.nombre;
    let apellido = req.params.apellido
    res.send(`Hola ${nombre} ${apellido}`)
})

//Crear una ruta “dividir” la cual reciba dos parámetros (ruta parametrizada) divisor y dividendo, 
//la misma tiene que devolver un res.json({error: "no se puede dividir por cero" si el usuario ingresa un 0
//si no es el caso devolver res.json({resultado})
app.get('/dividir/:divisor/:dividendo', (req, res) => {
    let divisor = Number(req.params.divisor);
    let dividendo = Number(req.params.dividendo);
    if (divisor === 0 || dividendo === 0)
        return res.json({ error: "No se puede dividir por 0" });

    let resultado = divisor / dividendo;
    res.json({ resultado: resultado })
})

//Crear una ruta que sume dos valores (ruta parametrizada), 
//pero poner una condición de que no se puedan enviar números menores que cero, 
//y el resultado se debe devolver por medio de un res.json({resultado}).
app.get('/suma/:numero1/:numero2', (req, res) => {
    let numero1 = Number(req.params.numero1);
    let numero2 = Number(req.params.numero2);

    if (numero1 < 0 || numero2 < 0)
        return res.json({ error: "Por favor ingresa un número mayor a 0" })

    let suma = numero1 + numero2;
    res.json({ resultado: suma })
})

//Crear una ruta que reciba un numero (ruta con query) 
//si el número es impar debe devolver un res.send("no autorizado")
// y si el número es par debe devolver res.send("autorizado").      
app.get('/par-impar', (req, res) => {
    let numero = Number(req.query.numero);

    if (numero % 2 !== 0)
    return res.send("No autorizado");

    res.send("Autorizado");
})

// Crear una ruta “lista de compras” (ruta con query) 
//que devuelva un objeto con 5 productos, se debe usar res.json({objeto}).
app.get('/lista', (req, res) =>{
    res.json({
        producto1: 'Pan',
        producto2: 'queso',
        producto3: 'gaseosa',
        producto4: 'fideos',
        producto5: 'frutas'
    })
})





    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })

