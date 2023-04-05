// 1 - numbers
let x: number = 10

console.log(x)

x = 16

console.log(typeof x)

const y:number = 93.2342
console.log(typeof y)
console.log(y)
console.log(y.toPrecision(3))

// 2 - string
const firstName:string = 'Fernando'

console.log(firstName.toUpperCase())

let fullName: string
const lastName: string = 'Mendes'

fullName = firstName + ' ' + lastName
console.log(fullName)
console.log(typeof fullName)

// 3 - boolean

let a: boolean = false

console.log(typeof a)

// a = 1 //forbidden in ts
a = true
console.log(a)

// 4 - annotation and inference

let ann: string = "test" //annotation
let inf = "test" //inference
// ann = 1 //error
// inf = 1; //error

