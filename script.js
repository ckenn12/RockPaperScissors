function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"]
    let computerChoiceIndex = Math.floor(Math.random()*3)
    console.log(computerChoiceIndex)
    return choices[computerChoiceIndex]
}

console.log(getComputerChoice())