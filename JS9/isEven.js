var isEven = function(num){
	if(num % 2 === 0){
		return true;
	}else{
		return false;
	}
	return isEven(40);
}

function factorial(num){
	//define a result variable
	var result = 1;
	for(i=2;i<=num;i++){
			var result = result*i; // result *= i;
 	}
 	return result;
 }

function kebabToSnake(str){
	var res = str.replace(/-/g, "_");
	return res;
}

