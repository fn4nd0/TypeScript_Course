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