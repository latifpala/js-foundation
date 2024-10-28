const name = "Abdul Latif"
const repoCount = 10

// console.log(name + repoCount + " Value"); // old method

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

// new way of defining strings. It offers variety of functions to use with strings as its a class object now
const gameName = new String('abdul-latif-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-1, 8)
console.log(anotherString);

const newStringOne = "   Abdul Latif    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://google.com/abdul%20latif"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) // checks if string contains "Sundar" and returns boolean

console.log(gameName.split('-')); // Converts string to array using symbol or space as well