// var colors = [
// "rgb(255, 0, 0)",
// "rgb(255, 255, 0)",
// "rgb(0, 255, 0)",
// "rgb(0, 255, 255)",
// "rgb(0, 0, 255)",
// "rgb(255, 0, 255)"
// ];
var numSquares = 6;
var colors = [];
//var pickedColor = colors[3];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}


funtion setUpModeButtons(){
	for(var i=0;i<modeButtons.length;i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			// if(this.textContent === "Easy"){
			// 	numSquares = 3;
			// } else {
			// 	numSquares = 6;
			// }
			//figure out how many squares to show
			//pick new colors
			//pick a new pickedcolor
			//update pageb to reflect the changes
			reset();
		});
	}
}

function setUpSquares(){
	for(var i =0;i<squares.length;i++){
		// add initial colors to the square
		squares[i].style.backgroundColor = colors[i]; //style.backgroundColor more compatible than style.background

		// add listerners to squares
		squares[i].addEventListener("click", function(){
		//alert("clicked the sqaure");
		// grab the color of the clicked square
		// alert(this.style.backgroundColor);
		var clickedColor = this.style.backgroundColor;
		// compare color to the pickedC
		console.log(clickedColor, pickedColor);
		if(clickedColor === pickedColor){
			//alert("Correct!!");
			messageDisplay.textContent = "Correct!!";
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else{
			//alert("Wrong!!");
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
			}
		});
	}
}


function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}	
	}
	h1.style.backgroundColor = "steelblue";
}


resetButton.addEventListener("click", function(){
	reset();
})




function changeColors(color){
	//loop through all squares
	for(var i=0;i<squares.length;i++){
	// change each color to match given color
		squares[i].style.backgroundColor = color;
	}

}
function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to an arr(repeat num times)
	for(var i=0;i<num;i++){
	//get random color and push into an array
	arr.push(randomColor());
	}
	// return that array 
	return arr;
}

function randomColor(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random()*256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random()*256);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";

}