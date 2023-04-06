"use strict";
// 1 - arrays
let numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers[3]);
const names = ['Leticia', 'Fernando'];
let objs = [{ 'test': 'lalala' }];
console.log(objs);
// 2 -  another syntax of arrays
const nums = [1, 2, 3, 4, 5];
nums.push(300);
console.log(nums);
// 3 - type: any
const arr1 = [1, "test", true, { name: "Fernando" }];
console.log(arr1);
// 4 - parameters of functions
function sum(a, b) {
    console.log(a + b);
}
sum(1, 2);
// 5 - type of the function's return
function minus(a, b) {
    return a - b;
}
function greeting(name) {
    return `Hello ${name}`;
}
console.log(minus(8, 1));
console.log(greeting('Fernando'));
// 6 - anonymous function
setTimeout(function () {
    const sallary = 10000;
    // In the next  case, the typescript will point an error since the parseFloat is expecting a string
    // console.log(parseFloat(sallary))
});
// 7 - types of objects
function passCoordinates(coord) {
    console.log(`X coordinate: ${coord.x}`);
    console.log(`Y coordinate: ${coord.y}`);
}
const objCoord = { x: 1.342343, y: 2.934292 };
passCoordinates(objCoord);
// passCoordinates(3, 3) // error
const personObj = { name: "Fernando", surname: "Mendes" };
// 8 - optional args
function showNumbers(a, b, c) {
    console.log("a: " + a);
    console.log("b: " + b);
    if (c)
        console.log("c: " + c);
}
showNumbers(1, 2, 3);
showNumbers(1, 2);
// 9 - validating optional args
function advancedGreeting(firstName, surname) {
    if (surname !== undefined)
        return `Hello ${firstName} ${surname}, how are you?`;
    else
        return `Hello ${firstName}, how are you?`;
}
console.log(advancedGreeting('Fernando', 'Mendes'));
console.log(advancedGreeting('Leticia'));
