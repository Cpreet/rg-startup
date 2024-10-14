// write a program to play rock paper scissors with a simple menu screen.

const ROCK = "rock"
const PAPER = "paper"
const SCISSORS = "scissors"

const choiceObj = {
	"1": ROCK,
	"2": PAPER,
	"3": SCISSORS
}


let intent = true

// a menu has to be displayed
// with 2 options,
// do you want to play ?
// exit game ?
console.group("Game Menu")
console.log("Welcome to ROCK PAPER SCISSORS");
console.log("1. Play the game");
console.log("2. Exit game");
console.groupEnd("Game Menu")
let choice = prompt("please choose your number");

if (choice == "1") {
	intent = true
}
else {
	intent = false
}

// playing the game
// User chooses a play
// Computer chooses a play
while (intent == true) {
	let myChoice = "";
	console.group("Play menu")
	if (intent == true) {
		console.log("Choose your play");
		console.log(`1. ${ROCK}`);
		console.log(`2. ${PAPER}`);
		console.log(`3. ${SCISSORS}`);
		console.log(`4. exit game`)
		myChoice = prompt("Please select a number")
		if (myChoice == "4") {
			intent = false
			break;
		}
		myChoice = choiceObj[myChoice]
	}
	console.groupEnd("Play menu")

	let computerChoice = Math.ceil(Math.random() * 3);
	computerChoice = choiceObj[computerChoice]

	console.log("My choice is: " + myChoice)
	console.log("Computer's choice is: " + computerChoice)
	// Comparison of choices
	if (myChoice == computerChoice) {
		console.log("draw match")
	} else if (myChoice == ROCK && computerChoice == SCISSORS) {
		console.log("You win!")
	} else if (myChoice == ROCK && computerChoice == PAPER) {
		console.log("Computer wins!")
	} else if (myChoice == PAPER && computerChoice == ROCK) {
		console.log("You win")
	} else if (myChoice == PAPER && computerChoice == SCISSORS) {
		console.log("Computer wins!")
	} else if (myChoice == SCISSORS && computerChoice == ROCK) {
		console.log("Computer wins!")
	} else if (myChoice == SCISSORS && computerChoice == PAPER) {
		console.log("You win")
	} else {
		console.error("wrong choice")
	}
}
