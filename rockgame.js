
let computer = ["rock","paper","scissors"]

let win = "You have beat the computer!"
let tie = "You have tied!"
let lose = "You have lost to the computer!"


function getComputedChoice() {
    let answer =  computer[Math.floor(Math.random()*computer.length)];
    return answer
}
getComputedChoice()

let userScore = parseInt(0)
let computerScore = parseInt(0)


function playRound(playerSelection,computerSelection) {
  
    if (playerSelection == computerSelection) {
        return tie
    }
    if (playerSelection == "rock" && computerSelection == "scissors") {
        userScore ++
        return win
    }
    if (playerSelection == "scissors" && computerSelection == "paper") {
        userScore ++
        return win
    }
    if (playerSelection == "paper" && computerSelection == "rock") {
        userScore ++
        return win
    }
    else {
        computerScore ++
        return lose
       
    }

}


function game(){
    console.log("Welcome player!")
    for (let i =0; i<5;i++) {
        let playerSelection = prompt("Please enter rock, papers, or scissors").toLowerCase();
        let computerSelection = getComputedChoice()
        console.log(playRound(playerSelection,computerSelection))
        console.log("your score is: " + userScore)
        console.log("computer score is: " + computerScore)
    }
}
console.log(game())

if (userScore > computerScore){
    console.log("You have beat the computer in the best of 5!")
} if (userScore == computerScore){
    console.log("You have tied the computer in the best of 5!")
} else if (userScore <computerScore){
    console.log("You have lost to the computer in the best of 5!")
}
