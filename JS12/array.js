function printReverse(array){
	for(i=0;i<array.length;i++){
		var result = array.reverse();
	}
	return result;
}

// for(i=arr.length-1;i>=0;i--){
// 	console.log(arr[i])
// }

function isUniform(array){
	var first = array[0];
	for(i=1;i<array.length;i++){
		if(array[i] !== first){
			return false;
		}	
	}
	return true;
}


function sumArray(arr){
	var sum = 0;
	arr.forEach(function(element){
		sum += element;
	});
	return sum;
}

function max(array){
	var max = array[0];
	for(i=1;i<array.length;i++){
		if(array[i] > max){
			max = array[i];
		}
	}
	return max;
}
