var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton  = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
//var p = document.querySelector("p");
//var h1 = document.querySelector("h1");
var p1Score = 0;
var p2Score = 0;
var gameOver = false; // its not true as the game is not over in the beginning of the game.
var winningScore = 5;

//console.log(p1Display);

p1.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
	//console.log(p1Score);
	console.log(p1Score, winningScore);
	if(p1Score === winningScore){
		p1Display.classList.add("winner");
		//console.log("GAME OVER!!"); instead of this add gameover
		gameOver = true;
	}
	// instead of changing on the h1 we can change it on p1display
		p1Display.textContent = p1Score;
	}
});
	//console.log(p2Button);
p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
});

resetButton.addEventListener("click", function(){
	reset();
});

function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;

}

numInput = addEventListener("change", function(){
	//alert("changed the input");
	//p.textContent = "value changed!";
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});
