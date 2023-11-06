function crearUsuario(nombre, direccion, dimensionesCuerpo) {
    return {
      info: {
        nombre,
        direccion,
        dimensionesCuerpo
      }
    };
}

let usuario1 = crearUsuario("Juan Pérez", "Calle Principal 123", { altura: 180, peso: 75 });

let usuario2 = { ...usuario1 }; 

usuario2.info.nombre = "María García";
usuario2.info.direccion = "Calle del Olmo 456";
usuario2.info.dimensionesCuerpo = { altura: 170, peso: 65 };
console.log("Usuario 1:", usuario1);
console.log("Usuario 2:", usuario2);