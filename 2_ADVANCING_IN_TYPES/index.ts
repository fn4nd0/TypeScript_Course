// 1 - arrays
let numbers: number[] = [1, 2, 3, 4]

numbers.push(5)
console.log(numbers[3])

const names: string[] = ['Leticia', 'Fernando']

let objs: object[] = [{'test': 'lalala'}]
console.log(objs)

// 2 -  another syntax of arrays
const nums: Array<number> = [1, 2, 3, 4, 5]

nums.push(300)
console.log(nums)

// 3 - type: any

const arr1: any = [1, "test", true, {name: "Fernando"}]
console.log(arr1)

// 4 - parameters of functions

function sum(a: number, b: number) {
    console.log(a + b)
}
sum(1, 2)


// 5 - type of the function's return

function minus(a: number, b: number): number {
    return a - b
}

function greeting(name: string): string {
    return `Hello ${name}`
}

console.log(minus(8, 1))
console.log(greeting('Fernando'))

// 6 - anonymous function

setTimeout(function() {
    const sallary: number = 10000;

    // In the next  case, the typescript will point an error since the parseFloat is expecting a string
    // console.log(parseFloat(sallary))
})

// 7 - types of objects
function passCoordinates(coord: {x: number, y: number}) {
    console.log(`X coordinate: ${coord.x}`)
    console.log(`Y coordinate: ${coord.y}`)
}

const objCoord = {x: 1.342343, y: 2.934292}

passCoordinates(objCoord)
// passCoordinates(3, 3) // error

const personObj: {name: string, surname: string} = {name: "Fernando", surname: "Mendes"}

// 8 - optional args
function showNumbers(a: number, b: number, c?: number) {
    console.log("a: " + a)
    console.log("b: " + b)
    if (c) console.log("c: " + c)
}
showNumbers(1, 2, 3)
showNumbers(1, 2)

// 9 - validating optional args
function advancedGreeting(firstName: string, surname?: string) {
    if (surname !== undefined)
        return `Hello ${firstName} ${surname}, how are you?`
    else
        return `Hello ${firstName}, how are you?`
}
console.log(advancedGreeting('Fernando', 'Mendes'))
console.log(advancedGreeting('Leticia'))

// 10 - union types
function showBalance(balance: string | number) {
    console.log(`The account balance is $${balance}`)
}
showBalance(100)
showBalance('200')
// showBalance(false) - can't compile

const arr2: Array<number | string | boolean> = [100, '200', true]

// 11 - advancing in union types
function showUserRole(role: boolean | string) {
    if (typeof role === 'boolean') {
        return "The user isn't approved!"
    }

    return `The user function is: ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole("Admin"))

// 12 - type alias
type ID = string | number

function showId(id: ID) {
    console.log(`The ID is: ${id}`)
}
showId(1)
showId("123")

// 13 - interface
interface Point {
    x: number
    y: number
    z: number
}

function showCoords(obj: Point) {
    console.log(`x: ${obj.x} y: ${obj.y} z: ${obj.z}`)
}

const coordObj:Point = {
    x: 10,
    y: 25,
    z: 30
}

showCoords(coordObj)

// 14 - interface x type alias
interface Person {
    name: string
}

interface Person {
    age: number
}

const somePerson: Person = {name: "Fernando", age: 32}

console.log(somePerson)

type personType = {
    name: string
}

// can't change the type, its almos like we r trying to change a const value
// type personType = {
//     age: number
// }

// 15 - literal type
let test: "testing"

// test = 1;
test = "testing";
// this doesn't looks useful
console.log(test)

// but we can see its usability with union types, like this:
function showDirection(direction: "left" | "right" | "center") {
    console.log(`The direction is ${direction}`)
}
showDirection("left")
// showDirection("top") // can't, cze we set that we can only use the types we specified ('left', 'right', 'center', only these values)

// 16 - non null assertion operators
const p = document.getElementById("some-p")
console.log(p!.innerText)

// 17 - bigint
let n: bigint

// n = 1
n = 1000n

console.log(n)
console.log(typeof n)
console.log(n + 100n)

// 18 - symbol
let symbolA: symbol = Symbol("a")
let symbolB = Symbol("a")

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)