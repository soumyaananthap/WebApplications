// var colors = [
// "rgb(255, 0, 0)",
// "rgb(255, 255, 0)",
// "rgb(0, 255, 0)",
// "rgb(0, 255, 255)",
// "rgb(0, 0, 255)",
// "rgb(255, 0, 255)"
// ];
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
//var pickedColor = colors[3];
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	//alert("Easy button clicked")
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){ // if there is a color at that index, change the color of first 3
			squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display = "none";
		}
	} 
});

hardBtn.addEventListener("click", function(){
	//alert("Hard button clicked")
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	} 
});

resetButton.addEventListener("click", function(){
	//alert("CLICKED RESET BUTTON");
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick the new random color from the array
	pickedColor = pickColor();
	//change colorDisplay to match the picked color
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
})

colorDisplay.textContent = pickedColor;

for(var i =0;i<squares.length;i++){
	// add initial colors to the square
	squares[i].style.backgroundColor = colors[i]; //style.backgroundColor more compatible than style.background

	// add listerners to squares
	squares[i].addEventListener("click", function(){
		//alert("clicked the sqaure");
		// grab the color of the clicked square
		// alert(this.style.backgroundColor);
		var clickedColor = this.style.backgroundColor;
		// compare color to the pickedColor
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