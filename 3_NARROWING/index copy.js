"use strict";
// 1 - type guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Can't do the sum");
    }
}
sum("3", "59");
sum(7, 15);
sum("13", 18);
// 2 - check if the values exist
function operations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else {
        console.log("Please, inform an operation");
    }
}
operations([2, 3, 4]);
operations([2, 3, 4], "sum");
operations([2, 3, 4], "multiply");
// 3 - instance of
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const nando = new User("Fernando");
const leticia = new SuperUser("Leticia");
console.log(nando);
console.log(leticia);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Hello ${user.name}, wanna check the system's data?`);
    }
    else if (user instanceof User) {
        console.log(`Hello ${user.name}`);
    }
}
userGreeting(nando);
userGreeting(leticia);
// 4 - operator in
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed)
            this.breed = breed;
    }
}
const maya = new Dog("Maya", "York");
const thor = new Dog("Thor");
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log(`${dog.name} is a ${dog.breed} dog breed`);
    }
    else {
        console.log("The dog is a Mutt/Mixed Breed");
    }
}
showDogDetails(maya);
showDogDetails(thor);
