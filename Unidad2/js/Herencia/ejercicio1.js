let animal = {
    family: '',
    numberOfPaws: 0,
    movement: '',
};

let cat = {};
let spider = {};
let rabbit = {};

Object.setPrototypeOf(animal, cat);
Object.setPrototypeOf(animal, spider);
Object.setPrototypeOf(animal, rabbit);

cat.family = "Felino";
cat.numberOfPaws = 4;
cat.movement = "andando";

spider.family = "Aracnido";
spider.numberOfPaws = 8;
spider.movement = "trepan";

rabbit.family = "Lepóridos";
rabbit.numberOfPaws = 4;
rabbit.movement = "Saltando";

for (let key in cat) {
    console.log(key + ": " + cat[key]);
}
console.log("------------------------------");
for (let key in spider) {
    console.log(key + ": " + spider[key]);
}
console.log("------------------------------");

for (let key in rabbit) {
    console.log(key + ": " + rabbit[key]);
}
console.log("------------------------------");
