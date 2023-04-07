// 1 - type guard
function sum(a: number | string, b: number | string) {

    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    } else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b)
    } else {
        console.log("Can't do the sum")
    }

}

sum("3", "59")
sum(7, 15)
sum("13", 18)

// 2 - check if the values exist
function operations(arr: number[], operation?: string | undefined) {
    if (operation) {

        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total)
            console.log(sum)
        } else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total)
            console.log(multiply)
        }

    } else {
        console.log("Please, inform an operation")
    }
}

operations([2, 3, 4]);
operations([2, 3, 4], "sum");
operations([2, 3, 4], "multiply");

// 3 - instance of
class User {
    name

    constructor(name: string) {
        this.name = name
    }
}

class SuperUser extends User {
    constructor(name: string) {
        super(name)
    }
}

const nando = new User("Fernando")
const leticia = new SuperUser("Leticia")

console.log(nando)
console.log(leticia)

function userGreeting(user: object) {
    if (user instanceof SuperUser) {
        console.log(`Hello ${user.name}, wanna check the system's data?`)
    } else if (user instanceof User) {
        console.log(`Hello ${user.name}`)
    }
}

userGreeting(nando)
userGreeting(leticia)

// 4 - operator in
class Dog {
    name
    breed

    constructor(name: string, breed?: string) {
        this.name = name
        if (breed) this.breed = breed
    }
}

const maya = new Dog("Maya", "York")
const thor = new Dog("Thor")

function showDogDetails(dog: Dog) {
    if ('breed' in dog) {
        console.log(`${dog.name} is a ${dog.breed} dog breed`)
    } else {
        console.log("The dog is a Mutt/Mixed Breed")
    }
}

showDogDetails(maya)
showDogDetails(thor)