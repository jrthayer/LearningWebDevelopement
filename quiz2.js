var age = Number(prompt("What is your age?"));
var days = age*365.25;
var message = "That is "+days+"days!"
alert(message);

if(age < 0)
{
	console.log("That is a negative number!!")
}

if(age === 21) 
{
	console.log("Happy 21st Birthday!!")
}

if(age%2 === 1)
{
	console.log("Your age is odd!")
}

if(Math.sqrt(age)%1 === 0)
{
	console.log("Perfect Square!")
}