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

const nums = [0, 10, 20, 30, 40, 50];
const filterNum = nums.filter(function (num) {
  return num > 20;
});
console.log(filterNum);

const pricesInDollars = [10, 20, 30, 40];
const priceInEuro = pricesInDollars.map((num) => num * 0.9);
console.log(priceInEuro);

const repetitiveFruits = ["apple", "pear", "apple", "pear", "plum", "apple"];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);
// •	Map: Для хранения пар ключ-значение.
// •	Set: Для хранения уникальных значений.
const fruits = ["apple", "pear", "plum"];
const berries = ["bluerberry", "strawberry"];
const fruitsAndBerries = [...fruits, ...berries];
console.log(fruitsAndBerries);

const flying = { wings: 2 };
const myCar = { wheels: 4 };
const flyingCar = { ...flying, ...myCar };
console.log(flyingCar);

let veggies = ["onion", "parsley"];
veggies = [...veggies, "carrot", "tomato"];
console.log(veggies);

const greeting = "hello";
const arrayOfGreeting = [...greeting];
console.log(arrayOfGreeting);

const car1 = {
  speed: 200,
  color: "yellow",
};
const car2 = { ...car1 };
car1.speed = 201;
console.log(car1.speed, car2.speed);

const fruits1 = ["apples", "pears"];
const fruits2 = [...fruits1];
fruits1.pop();
console.log(fruits1, "not", fruits2);

// document.body.innerText = "Hello, Katja";
const h2 = document.createElement("h2");
h2.innerText = "Hello, h2"; // Устанавливаем текст для h2
h2.setAttribute("id", "sub-heading");
h2.setAttribute("class", "secondary");
document.body.appendChild(h2); // Добавляем элемент в body

document.querySelector("p");
document.getElementsByClassName("text");

const target = document.querySelector("body");
console.log(target);

target.addEventListener("click", handleClick);
function handleClick() {
  // alert("clicked the body");
}

const target2 = document.querySelector("p");

target2.addEventListener("click", handleClick2);
function handleClick2() {
  // alert("Paragraph clicked!");
}
let p = document.createElement("p");
p.innerText = "Type into the input to make this text change";

let input = document.createElement("input");
input.setAttribute("type", "text");

document.body.appendChild(p);
document.body.appendChild(input);

input.addEventListener("change", function () {
  p.innerText = input.value;
});
