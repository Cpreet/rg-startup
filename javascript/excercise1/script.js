// create a program to calculate and display the result of any mathematical operations
// given the menu of the operation itself.


// take inputs for the operations
let a = Number(prompt("give me the first variable"))
let b = Number(prompt("give me the second variable"))

// display menu
console.log("choose the operation you want to perform");
console.log("1. addition")
console.log("2. subtraction")
console.log("3. multiplication")
console.log("4. division")

// take input for operation
let op = prompt("please type the operation number")

// perform the operation
if (op == 1) {
    console.log(a+b);
} else if (op == 2) {
    console.log(a-b);
} else if (op == 3) {
    console.log(a*b);
} else if (op == 4) {
    console.log(a/b)
} else {
    console.error("invalid operation")
}
