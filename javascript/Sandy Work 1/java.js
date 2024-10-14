let a = Number (prompt ("First Number-"))
let b = Number (prompt ("Second Number-"))

console.log("Select the type of operation")

console.log("1. Addition", "2. Subtraction", "3. Division", "4. Multiplication")

let op= prompt("Please type the operation Number")

if(op==1) {console.log(a+b)}
else if (op==2) {console.log(a-b)}
else if (op==3) {console.log(a/b)}
else if (op==4) {console.log(a*b)}
else {console.log("Wrong Input")
}