/* Rock Paper Scissors Game
Trying the odin project guide
*/

// A function that randomly chooses within options

function getComputerChoice(){
    let choices = ["ROCK", "PAPER", "SCISSORS"];
    let compchoice = choices[(Math.floor(Math.random() * choices.length))];
    return compchoice;
}

// Getting Input from user (Removed from function also!)
/*
function getPlayerChoice(){
    let playerchoice = prompt("Rock, Paper or Scissors?" ).toLowerCase();
    if (playerchoice == "rock"||playerchoice == "paper" ||playerchoice == "scissors"){
        return playerchoice;
    } else {
    return "I didn't understand that, try again";
    }
}
*/

// Comparing computer and user and deciding on winner
function playRound(){
    let game;
//    let playerchoice;
    var compchoice = getComputerChoice();
    if (playerchoice == compchoice){
        return "It's a tie!";
    } else if (playerchoice=="rock" && compchoice=="paper"){
        return "Paper beats Rock, you lose!";
    } else if (playerchoice=="rock"& compchoice=="scissors"){
        return "Rock beats Scissors, you win!";

    } else if (playerchoice=="paper"& compchoice=="scissors"){
        return "Scissors beats Paper, you lose!";
    } else if (playerchoice=="paper"& compchoice=="rock"){
        return "Paper beats Rock, you win!";
        
    } else if (playerchoice=="scissors"& compchoice=="paper"){
        return "Scissors beats Paper, you win!";  
    } else if (playerchoice=="Scissors"& compchoice=="rock"){
        return "Rock beats Scissors, you lose!";
    }
}
// run it five times
/*
function game(){
    let compscore;
    let playerscore;
    for (let i = 0; i < 5; i++) {
        let result = playRound()
        if (result.search('lose!') > -1){
            compscore++;
        } else if (result.search('win!') > -1) {
            playerscore++;
        }
     }
   if (playerscore > compscore){
    return 'you Win!';
}   else {
    return 'you Lost!';
}
}
*/
let playerchoice;
// Adding Event Listener

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('#btn');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    playerchoice = button.innerText;
    playRound();
  });
});
