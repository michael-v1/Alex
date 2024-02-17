const playerh1 = document.querySelector("#playerh1");
const computerh1 = document.querySelector("#computerh1");
const resulth1 = document.querySelector("#resulth1");
const btn = document.querySelectorAll(".btn");

let player;
let computer;
let result;

btn.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerh1.textContent = `player:  ${player}`;
    computerh1.textContent = `computer:  ${computer}`;
    resulth1.textContent = checkWinner();
}));

function computerTurn(){
    const randNum = Math.floor(Math.random() * 3) + 1;
    
    switch(randNum){
        case 1:
            computer = "ROCK"
            break;
        case 2:
            computer = "PAPER"
            break;
        case 3:
            computer = "SCISSOR"
            break;
    }
}

function checkWinner(){
    if  (player == computer) {
        return "draw ";
    }
    else if(computer == "ROCK"){
        return (player == "PAPER") ? "you win!" :  "You lose!";
    }
    else if(computer == "PAPER"){
        return (player == "SCISSOR") ? "you win!" :  "You lose!";
    }
    else if(computer == "SCISSOR"){
        return (player == "ROCK") ? "you win!" :  "You lose!";
    }
}