var secretNumber = 4;

var input = prompt("Guess a number");
var guess = Number(input);

if (guess === secretNumber) 
{
	alert("correct");
}
else if (guess < secretNumber) 
{
	alert("higher");
}
else if(guess > secretNumber)
{
	alert("lower");
}
else
{
	alert("invalid input!");
}