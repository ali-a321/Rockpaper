
let computer = ["rock","paper","scissors"]

let answer =  computer[Math.floor(Math.random()*computer.length)];


function getComputedChoice() {
    return answer
}
getComputedChoice()
console.log(getComputedChoice())


function playRound(playerSelection,computerSelection) {
  
    if (playerSelection == computerSelection) {
        return "You have tied!"
    }
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You have beat the computer!"
    }
    if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You have beat the computer!"
    }
    if (playerSelection == "paper" && computerSelection == "rock") {
        return "You have beat the computer!"
    }
    else {
        return "You have lost to the computer!"
    }

}

let computerSelection = getComputedChoice()
let playerSelection = prompt("Please enter rock, papers, or scissors").toLowerCase()



console.log(playRound(playerSelection,computerSelection))

