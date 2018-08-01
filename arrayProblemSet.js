//takes array
//prints array in reverse order
function printReverse(array){
	if(Array.isArray(array))
	{
		for(var i = array.length-1; i >= 0; i--){
			console.log("//"+array[i]);
		}
	}
	else
	{
		console.log("The argument given is not an array");
	}
}

//takes array
//checks if all elements are equivalent
function isUniform(array){
	if(Array.isArray(array))
	{
		var value = array[0];
		for(var i = 1; i < array.length; i++)
		{
			if(array[i] !== value)
			{
				return false;
			}
		}
		return true;
	}
	else
	{
		console.log("The argument given is not an array");
	}
}

//takes array
//returns sum of array
function sumArray(array){
	if(Array.isArray(array))
	{
		var sum = 0;

		array.forEach(function(element){
			sum += element;
		});

		return sum;
	}
	else
	{
		console.log("The argument given is not an array");
	}
}

//takes array
//returns max value of array
function max(array){
	if(Array.isArray(array))
	{
		var max = array[0];
		for(var i = 1; i < array.length; i++)
		{
			if(array[i] >= max)
			{
				max = array[i];
			}
		}
		return max;
	}
	else
	{
		console.log("The argument given is not an array");
	}
}