console.log("%cHello, World", "color: blue; font-size: 40px");

const car = {
  engine: true,
  steering: true,
  speed: "slow",
};

const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log(("The sportsCar object:", sportsCar));

// console.log("...... for-in unreliable");
for (prop in sportsCar) {
  console.log(prop);
}
// console.log("Iteraring over object and its prototype");

// console.log("...... for-of reliable");
for (prop of Object.keys(sportsCar)) {
  console.log(prop + ":" + sportsCar[prop]);
}
// console.log("Iteraring over objects OWN propreties only");

// Task 1
var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];

function logDairy() {
  for (let item of dairy) console.log(item);
}
logDairy();
// Task 2
const animal = {
  canJump: true,
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
  for (prop of Object.keys(bird)) {
    console.log(prop + ":" + bird[prop]);
  }
}
birdCan();

// Task 3
function animalCan() {
  for (let i in bird) {
    console.log(i + ":" + bird[i]);
  }
}
animalCan();
// •	Object.keys() и Object.entries() возвращают только собственные свойства объекта.
// •	Чтобы учесть и унаследованные свойства, используйте for...in.
