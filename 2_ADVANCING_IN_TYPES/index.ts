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