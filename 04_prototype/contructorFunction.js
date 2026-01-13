function Person(name, age){
    this.name = name;
    this.age = age;
}

function Car(make, model){
    this.make = make;
    this.model = model;
}
var myCar = new Car('Tata', 'Safari');
//console.log(myCar);

function Tea(type){
    this.type = type;
    this.describe = function(){
        return `this is a ${this.type} tea`;
    }
}
let lemonTea = new Tea('lemon');

function Animal(species) {
  this.species = species;
}

Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};

let dog = new Animal("Dog");
console.log(dog.sound());

let cat = new Animal("cat");

function Drink(name) {
  if (!new.target) {
    throw new Error("Drink must be called with new keyword");
  }
  this.name = name;
}
