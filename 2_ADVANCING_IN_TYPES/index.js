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
