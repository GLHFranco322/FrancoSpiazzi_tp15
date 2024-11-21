// app.js

const fs = require('fs');
const filePath = './mensaje.txt';
const mensaje = fs.readFileSync(filePath, 'utf-8');

const { peliculas } = require('./peliculas.js');
const prompt = require('prompt-sync')();

// console.log("Contenido de peliculas:", peliculas);

const listaPeliculas = peliculas;

const mostrarDatos = function() {
    for (let i = 0; i < peliculas.length; i++) {
        console.log("El ID de esta pelicula es:",peliculas[i].id);
        console.log("El rating de esta pelicula es:",peliculas[i].rating);
        console.log("Los premios que ganó esta pelicula son:",peliculas[i].awards);
        console.log("La duración en minutos de la pelicula es:",peliculas[i].length);
        console.log("El precio de la pelicula es:",peliculas[i].price);
        console.log("El género de esta pelicula es:",peliculas[i].genre);
        console.log();
    }
};

mostrarDatos();
console.log(mensaje);

