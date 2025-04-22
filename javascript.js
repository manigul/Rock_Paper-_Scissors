
const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let draws = 0;


function getComputerChoice(){
return choices[Math.floor((Math.random()*choices.length))];
}

function getHumanChoice(){
    const choice = prompt("what do you choose: rock, paper or scissors").toLowerCase();
     if (choice != "rock" && choice != "paper" && choice != "scissors"){
        alert("invalid choice, please try again")
        return getHumanChoice()}
    return choice;
}

function checkResult(player, computer){
    let win = true;
    if(player === "rock" && computer ==="scissors"){
        win = true
    }
    else if(player === "paper" && computer === "rock"){
        win = true
    }
    else if(player === "scissors" && computer === "paper"){
        win = true
    }
    else if(player === computer){
        win = null
    }
    else{
        win = false
    }
       
    return win
}
        




function playRound(humanChoice, computerChoice) {
    alert(`you chose ${humanChoice} and computer chose ${computerChoice}`)
    //player wing
    if(checkResult(humanChoice, computerChoice) === true){
        alert(`you win`);
        humanScore =  humanScore + 1;
    }
    else if(checkResult(humanChoice, computerChoice) === false){
        alert(`computer wins with ${computerChoice}`);
        computerScore = computerScore + 1;
    }

    else{
        alert(`you have both chosen ${humanChoice}, it's a draw`)
        draws +=1
    }
  }



function playGame(rounds = 5){
    let i=0;
    while(i<5){
        alert(`round ${i+1}`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        i++;
    }
    alert(`you won ${humanScore} rounds, lost ${computerScore} rounds and ${draws} ended in draw`)
    if (humanScore > computerScore){
        let results = alert('you won the game')
    }
    else if (computerScore > humanScore){
        let results = alert('you lost the game')
    }
    else{
        let results = alert("it's a draw")
    }
    
}
playGame()







 