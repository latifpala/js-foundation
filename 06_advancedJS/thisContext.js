const person = {
    name : "Latif",
    greet() {
        console.log(`Hi, I am ${this.name}`)
    }
}
person.greet();

const greetPerson = person.greet;
greetPerson();

const bindGreet = person.greet.bind({name : "Latif"});
bindGreet();