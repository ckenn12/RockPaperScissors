buttons = document.querySelector("#buttons")
rock = document.querySelector(".rock")
paper = document.querySelector(".paper")
scissors = document.querySelector(".scissors")

yourScore = parseInt(document.querySelector(".yourScore").textContent)
computerScore = parseInt(document.querySelector(".computerScore").textContent)

function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"]
    let computerChoiceIndex = Math.floor(Math.random()*3)
    console.log(`The computer chose ${choices[computerChoiceIndex]}`)
    return choices[computerChoiceIndex]
}

function playGameRound(computerSelection, playerSelection){
    if(computerSelection === "rock" && playerSelection === "scissors"){
        computerScore++
    }
    else if(computerSelection === "rock" && playerSelection === "paper"){
        yourScore++
    }
    else if(computerSelection === "paper" && playerSelection === "rock"){
        computerScore++
    }
    else if(computerSelection === "paper" && playerSelection === "scissors"){
        yourScore++
    }
    else if(computerSelection === "scissors" && playerSelection === "paper"){
        computerScore++
    }
    else if(computerSelection === "scissors" && playerSelection === "rock"){
        yourScore++
    }
    else{
        //tie
    }
    document.querySelector(".yourScore").textContent = yourScore
    document.querySelector(".computerScore").textContent = computerScore
    document.querySelector(".compChoice").textContent = `Your choice: ${playerSelection}. Computer choice: ${computerSelection}`
    if(yourScore >= 5) {
        alert("You are the winner!")
    }
    if(computerScore >= 5) {
        alert("The computer beat you.")
    }
}


buttons.addEventListener('click', (e) => {
    playerSelection = e.target.textContent.toLowerCase()
    console.log(playerSelection)
    playGame()
})

function playGame(){
    return playGameRound(getComputerChoice(), playerSelection)
}


