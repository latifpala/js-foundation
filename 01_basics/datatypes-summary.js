//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null // object
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// Stack (Primitive) and Heap memory (Non Primitive)

let myName = "Abdul Latif"
let mySirName = myName
mySirName = "Pala"
console.log(myName);
console.log(mySirName); // value remains "Pala" as its in stack

let userOne = {
    userName : "latif",
    password : "123456"
}

let userTwo = userOne

userTwo.userName = 'Abdul Latif';
console.log(userOne.userName) // both values changed as its heap


