console.log("1. Print all numbers between -10 and 19");
for(var i = -10; i <= 19; i++){
	console.log(num);
}

console.log("2. Print all even numbers between 10 and 40");
for(var i = 10; i <= 40; i+=2){
	console.log(num);
}

console.log("3. Print all odd numbers betwwen 300 and 333");
for(var i = 301; i <= 333; i+=2){
	console.log(num);
}

console.log("4. Print all number divisible by 5 AND 3 between 5 and 50")
for(var i = 5; i <= 50; i+=5){
	if(num%3 === 0 && num%5 === 0){
		console.log(num);
	}
}
