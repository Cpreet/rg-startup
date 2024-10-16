// write a program to play rock paper scissors with a simple menu screen.

const ROCK = "rock"
const PAPER = "paper"
const SCISSORS = "scissors"

const choiceObj = {
	"1": ROCK,
	"2": PAPER,
	"3": SCISSORS
}


// a menu has to be displayed
// with 2 options,
// do you want to play ?
// exit game ?

function menuFunc(choice) {
	console.group("Game Menu")
	console.log("Welcome to ROCK PAPER SCISSORS");
	console.log("1. Play the game");
	console.log("2. Exit game");
	console.groupEnd("Game Menu")
	choice = prompt("please choose your number");
	return choice;
}

function playFunc(choice) {
	// playing the game
	// User chooses a play
	// Computer chooses a play
	console.group("Play menu")
	if (intent == true) {
		console.log("Choose your play");
		console.log(`1. ${ROCK}`);
		console.log(`2. ${PAPER}`);
		console.log(`3. ${SCISSORS}`);
		console.log(`4. exit game`)
		choice = prompt("Please select a number")
		if (choice == "4") {
			intent = false
		}
		console.groupEnd("Play menu")
		return choice = choiceObj[choice]
	}
}

function computerChoiceFunc() {
	let computerChoice = Math.ceil(Math.random() * 3);
	computerChoice = choiceObj[computerChoice]
	return computerChoice;
}

function decisionFunc(choice, computerChoice) {
	console.log("My choice is: " + choice)
	console.log("Computer's choice is: " + computerChoice)
	// Comparison of choices
	if (choice == computerChoice) {
		console.log("draw match")
	} else if (choice == ROCK && computerChoice == SCISSORS) {
		console.log("You win!")
	} else if (choice == ROCK && computerChoice == PAPER) {
		console.log("Computer wins!")
	} else if (choice == PAPER && computerChoice == ROCK) {
		console.log("You win")
	} else if (choice == PAPER && computerChoice == SCISSORS) {
		console.log("Computer wins!")
	} else if (choice == SCISSORS && computerChoice == ROCK) {
		console.log("Computer wins!")
	} else if (choice == SCISSORS && computerChoice == PAPER) {
		console.log("You win")
	} else {
		console.error("wrong choice")
	}
}


let intent = true
let myChoice = "";
myChoice = menuFunc(myChoice)
if (myChoice == "1") {
	intent = true
}
else {
	intent = false
}

while (intent == true) {
	myChoice = playFunc(myChoice)
	if (intent == true) {
		let computerChoice = computerChoiceFunc()
		decisionFunc(myChoice, computerChoice)
	}
}