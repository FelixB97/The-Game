document.addEventListener("DOMContentLoaded", start) //startup function calling first in chain

function start() { //Adds eventlisteners to buttons so player can start by choosing rock, paper or scissors
    console.log("start function")
    document.querySelector("#rockbutton").addEventListener("click", clickRock);
    document.querySelector("#paperbutton").addEventListener("click", clickPaper);
    document.querySelector("#scissorbutton").addEventListener("click", clickScissors);
}

//we define different variables to keep track of player choice and computer choice
let playerChoice; 
let computerChoice;
let computerRandom;

function clickRock() {
    setTimeout(rock, 1800);
    document.querySelector("#player1").classList.add("playershake");
    document.querySelector("#player2").classList.add("playershake");
    document.querySelector("#rockbutton").removeEventListener("click", clickRock);
    document.querySelector("#paperbutton").removeEventListener("click", clickPaper);
    document.querySelector("#scissorbutton").removeEventListener("click", clickScissors);
    document.querySelector("#paperbutton").classList.add("disabled");
    document.querySelector("#scissorbutton").classList.add("disabled");
}

function clickPaper() {
    setTimeout(paper, 1800);
    document.querySelector("#player1").classList.add("playershake");
    document.querySelector("#player2").classList.add("playershake");
    document.querySelector("#rockbutton").removeEventListener("click", clickRock);
    document.querySelector("#paperbutton").removeEventListener("click", clickPaper);
    document.querySelector("#scissorbutton").removeEventListener("click", clickScissors);
    document.querySelector("#rockbutton").classList.add("disabled");
    document.querySelector("#scissorbutton").classList.add("disabled");
}

function clickScissors() {
    setTimeout(scissors, 1800);
    document.querySelector("#player1").classList.add("playershake");
    document.querySelector("#player2").classList.add("playershake");
    document.querySelector("#rockbutton").removeEventListener("click", clickRock);
    document.querySelector("#paperbutton").removeEventListener("click", clickPaper);
    document.querySelector("#scissorbutton").removeEventListener("click", clickScissors);
    document.querySelector("#rockbutton").classList.add("disabled");
    document.querySelector("#paperbutton").classList.add("disabled");
}

function clearshake() {
    document.querySelector("#player1").classList.remove("playershake");
    document.querySelector("#player2").classList.remove("playershake");
}

function rock() { //function starts the game with rock selected and removes eventlisteners
    console.log("player selected rock");
    clearshake();
    document.querySelector("#player1").classList.add("playerrock");
    computerChoiceGenerator();
    playerChoice = rock;
    matchDecider();
}

function paper() { //function starts the game with paper selected and removes eventlisteners
    console.log("player selected paper");
    clearshake();
    document.querySelector("#player1").classList.add("playerpaper");
    computerChoiceGenerator();
    playerChoice = paper;
    matchDecider();
}

function scissors() { //function starts the game with scissors selected and removes eventlisteners
    console.log("player selected scissors");
    clearshake();
    document.querySelector("#player1").classList.add("playerscissors");
    computerChoiceGenerator();
    playerChoice = scissors;
    matchDecider();
}

function computerChoiceGenerator() { //this function generates a random number between 1-3 and assigns that number a value eg: 1 = rock

computerRandom =  Math.floor(Math.random() * 3) + 1;

if (computerRandom == 1) {
    computerChoice = rock;
    console.log("Computer choose rock");
    document.querySelector("#player2").classList.add("playerrock");
}

if (computerRandom == 2) {
    computerChoice = paper;
    console.log("Computer choose paper");
    document.querySelector("#player2").classList.add("playerpaper");
}

if (computerRandom == 3) {
    computerChoice = scissors;
    console.log("Computer choose scissors");
    document.querySelector("#player2").classList.add("playerscissors");
}
}

function matchDecider() {//based on playerChoice and computerChoice this function decides the outcome of a match by having 9 different if statements, one for each different possible outcome
    if (playerChoice == rock && computerChoice == rock) {
        draw();
    }

    if (playerChoice == rock && computerChoice == paper) {
        loss();
    }

    if (playerChoice == rock && computerChoice == scissors) {
        win();
    }

    if (playerChoice == paper && computerChoice == rock) {
        win();
    }

    if (playerChoice == paper && computerChoice == paper) {
        draw();
    }

    if (playerChoice == paper && computerChoice == scissors) {
        loss();
    }

    if (playerChoice == scissors && computerChoice == rock) {
        loss();
    }

    if (playerChoice == scissors && computerChoice == paper) {
        win();
    }

    if (playerChoice == scissors && computerChoice == scissors) {
        draw();
    }
}

function win() {//function gets called if player wins and calls the replay function
    console.log("you win!");
    replay();
    document.querySelector("#win").classList.remove("hidden");
}

function draw() {//function gets called if player and computer draws and calls the replay function
    console.log("it's a draw!");
    replay();
    document.querySelector("#draw").classList.remove("hidden");
}

function loss() {//function is called if player losses and calls the replay function
    console.log("you lose!");
    document.querySelector("#lose").classList.remove("hidden");
    replay();
}

function replay() {// this function adds back eventlisteners to replay the game.
    console.log("resetting in 3 seconds");
    
    setTimeout(reset, 3000);
}

function reset() {
    console.log("replay ready");
    document.querySelector("#player1").className = 'player';
    document.querySelector("#player2").className = 'player';
    document.querySelector("#lose").className = 'hidden';
    document.querySelector("#win").className = 'hidden';
    document.querySelector("#draw").className = 'hidden';
    document.querySelector("#rockbutton").addEventListener("click", clickRock);
    document.querySelector("#paperbutton").addEventListener("click", clickPaper);
    document.querySelector("#scissorbutton").addEventListener("click", clickScissors);
    document.querySelector("#rockbutton").className = '';
    document.querySelector("#scissorbutton").className = '';
    document.querySelector("#paperbutton").className = '';
}