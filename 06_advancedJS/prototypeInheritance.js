function Person(name){
    this.name = name
}

Person.prototype.greet = function(){
    return `Hello my name is ${this.name}`;
}

let greeting = new Person('latif').greet();
console.log(greeting);
