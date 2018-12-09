var secretNumber = 5;

var SringGuess = prompt("Enter a valid guessing number");
var guess = Number(SringGuess);

if(guess === secretNumber){
	alert("You, got it right!")
} else if(guess > secretNumber){
	alert("Too high, try again");
} else {
	alert("Too low, try again")
}
// if(guess > 9){
// 	alert("Too high, try again")
// } if(guess < 3){
// 	alert("Too low, try again")
// } if(guess < 9 && guess > 3) {
// 	console.log("You guessed it");
// }