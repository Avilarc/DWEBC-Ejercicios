let user = {};

user.apellido = "Smith";
user.nombre = "John";

user.nombre = "Pete";

function isEmpty(obj) {
  for (const i in obj) {
    if (obj.hasOwnProperty(i)) {
      return false;
    }
  }

  return true;
}

console.log(isEmpty(user));