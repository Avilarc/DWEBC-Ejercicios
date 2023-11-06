function crearUsuario(nombre, direccion, dimensionesCuerpo) {
    return {
      info: {
        nombre,
        direccion,
        dimensionesCuerpo
      },
      obtenerInformacion: function() {
        return this.info;
      },
      obtenerAmigos: function() {
        if (this.amigos) {
          return this.amigos;
        } else {
          return "Esta información no está disponible.";
        }
      },

      obtenerPareja: function() {
        return "Funcion no funcionando";
      }
    };
}
  
let usuario1 = crearUsuario("Juan Pérez", "Calle Principal 123", { altura: 180, peso: 75 });

let usuario2 = { ...usuario1 };
usuario2.info.nombre = "María García";
usuario2.info.direccion = "Calle del Olmo 456";
usuario2.info.dimensionesCuerpo = { altura: 170, peso: 65 };

console.log("Información de Usuario 1:", usuario1.obtenerInformacion());
console.log("Amigos de Usuario 1:", usuario1.obtenerAmigos());
console.log("Compañero de Usuario 1:", usuario1.obtenerPareja());
