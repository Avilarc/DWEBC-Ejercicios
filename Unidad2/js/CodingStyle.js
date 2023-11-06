//1
function pow(x , n) {
    let result = 1;
    for(let i = 0; i < n ; i++) {
        result *= x;
    }
    return result;
}

let x = prompt("x?" , ''); 
let n = prompt("n?" , '');
if (n <= 0) {
    alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
} else {
    alert(pow(x , n));
}


//2
let nombre1 = "liya"; 
alert (`hello ${1}`); //hello 1
alert `hello ${"nombre1"}`; //hello ,
alert `hello ${name}`; //hello , (en firefox)

//3
let admin;
let nombre;

nombre = "John";
admin = nombre;
alert(admin);

//4

const birthday = '18.04.1982';
const age = someCode(birthday);

alert(birthday);
alert(age);

