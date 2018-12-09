// var grey = prompt("Are we there yet?");

// while(grey != "yes" && grey != "yeah"){
// 	var grey = prompt("Are we there yet?");
// }
// alert("Yay, we made it!!!");


var grey = prompt("Are we there yet?");

while(grey.indexOf("yes") == -1){
	var grey = prompt("Are we there yet?");
}
alert("Yay, we made it!!!");