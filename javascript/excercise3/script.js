// Make a calculator with at least the 4 basic operations available +, -, *, /
// Make it so that the user can do the operations on the last result continuously
function consoleFunc(str) {
	console.log(str)
}

// consoleFunc("🪔Happy Diwali🪔");

function add(a, b) {
	console.log("the result is:", a + b);
	return a + b;
}

function subtract(a, b) {
	console.log("the result is:", a - b);
	return a - b;
}

function multiply(a, b) {
	console.log("the result is:", a * b);
	return a * b;
}

function divide(a, b) {
	console.log("the result is:", a / b);
	return a / b;
}

function operandInput() {
	const a = prompt("please enter your first number");
	const b = prompt("please enter your second number");
	return [+a, +b];
}

function calculatorMenu() {
	console.log("Please choose your operation: ")
	console.log("+ => addition")
	console.log("- => subtraction")
	console.log("* => multiplication")
	console.log("/ => division")
	console.log("e => exit")
	let choiceOp = prompt("please choose operation")
	return choiceOp
}

let intent = true;
let accumalator = 0;
while (intent == true) {
	let [op1, op2] = operandInput();
	let operator = calculatorMenu();

	switch (operator) {
		case "+":
			add(op1, op2)
			// acc = add(acc, nextOp)
			break;
		case "-":
			subtract(op1, op2)
			break;
		case "*":
			multiply(op1, op2)
			break;
		case "/":
			divide(op1, op2)
			break;
		case "e":
			intent = false;
			break;
		default:
			console.log("invalid operation")
			break;
	}
}
