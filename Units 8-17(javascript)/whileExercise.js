var num = -10;
console.log("1. Print all numbers between -10 and 19");
while(num <= 19){
	console.log(num);
	num++;
}

console.log("2. Print all even numbers between 10 and 40");
num = 10;
while(num <= 40){
	console.log(num);
	num+=2;
}

console.log("3. Print all odd numbers betwwen 300 and 333");
num = 300;
num++;

while(num <= 333){
	console.log(num);
	num+=2;
}

console.log("4. Print all number divisible by 5 AND 3 between 5 and 50")
num = 5;
while(num <= 50){
	if(num%3 == 0 && num%5 == 0){
		console.log(num);
	}
	num+=5;
}
