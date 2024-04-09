function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"]
    let computerChoiceIndex = Math.floor(Math.random()*3)
    console.log(computerChoiceIndex)
    return choices[computerChoiceIndex]
}

function playGameRound(computerSelection, playerSelection){
    if(computerSelection === "rock" && playerSelection.toLowerCase() === "scissors"){
        return "You lose. Rock beats scissors."
    }
    else if(computerSelection === "rock" && playerSelection.toLowerCase() === "paper"){
        return "You win. Paper beats rock."
    }
    else if(computerSelection === "paper" && playerSelection.toLowerCase() === "rock"){
        return "You lose. Paper beats rock."
    }
    else if(computerSelection === "paper" && playerSelection.toLowerCase() === "scissors"){
        return "You win. Scissors beats paper."
    }
    else if(computerSelection === "scissors" && playerSelection.toLowerCase() === "paper"){
        return "You lose. Scissors beats paper."
    }
    else if(computerSelection === "scissors" && playerSelection.toLowerCase() === "rock"){
        return "You win. Rock beats scissors"
    }
    else{
        return "It's a tie."
    }
}

