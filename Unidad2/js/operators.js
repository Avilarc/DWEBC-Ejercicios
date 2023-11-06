"use strict";
let saludo,despidete;
if(1) {
    saludo = function(quien) {
        return `hola ${quien}`;
    }
} else {
    despidete = function (quien) {
        return `adios ${quien}`;
    }
}

console.log(saludo("pepe"));

let saludo () => "hola";