console.log("PRINT THE NUMBERS BETWEEN -10 AND 19");

for(i=-10;i<20;i++){
	console.log(i);
}

console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40");

var count=0;
for(i=10;i<=40;i++){
	if(i % 2 === 0){
		console.log(i);
	}
	count++;
}

console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333");

var count=0;
for(i=300;i<334;i++){
	if(i % 2 !== 0){
		console.log(i);
	}
	count++;
}

console.log("PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");


var count=0;
for(i=5;i<51;i++){
	if(i % 5 === 0 && i % 3 ===0){
		console.log(i);
	}
	count++;
}
