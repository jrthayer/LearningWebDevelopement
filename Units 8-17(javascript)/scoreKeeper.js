var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var rButton = document.getElementById("reset");
var nInput  = document.querySelector("input");
var h1 = document.querySelector("h1");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var winDisplay = document.getElementById("winCondition");

var p1Score = 0;
var p2Score = 0;
var winCondition = 3;
var gameOver = false;

nInput.setAttribute("value", winCondition);
winDisplay.textContent = winCondition;

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}

nInput.addEventListener("change", function(){
    reset();

    winCondition = Number(nInput.value);
    winDisplay.textContent = winCondition;
});

p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winCondition)
        {
            gameOver = true;
            p1Display.classList.add("winner");
        }
        p1Display.textContent = p1Score;  
    }
});

p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score ===   winCondition)
        {
            gameOver = true;
            p2Display.classList.add("winner");
        }
        p2Display.textContent = p2Score;  
    }
});

rButton.addEventListener("click", function(){
    reset();
});


