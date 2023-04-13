/* Rock Paper Scissors Game
Trying the odin project guide
*/

// A function that randomly chooses within options

function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let compchoice = choices[(Math.floor(Math.random() * choices.length))];
    return compchoice;
}

// Getting Input from user
function getPlayerChoice(){
    let playerchoice = prompt("Rock, Paper or Scissors?" ).toLowerCase();
    if (playerchoice == "rock"||playerchoice == "paper" ||playerchoice == "scissors"){
        return playerchoice;
    } else {
    return "I didn't understand that, try again";
    }
}
// Comparing computer and user and deciding on winner
function playRound(){
    let game;
    var playerchoice = getPlayerChoice();
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

