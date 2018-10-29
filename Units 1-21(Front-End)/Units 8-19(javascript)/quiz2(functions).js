function isEven(num){
	// if(num%2 === 0){
	// 	return true;
	// }
	// else{
	// 	return false;
	// }
	return num%2 === 0;
}

function factorial(num){
	var facValue = 1;
	for(var i = num; i > 0; i--){
		facValue = facValue * i;
	}
	return facValue;
}

function kebabToSnake(kebab){
	var snake = kebab.replace(/-/gi, "_");
	return snake;
}