function getComputersChoice() {
  return Math.floor(Math.random() * 3) + 1;
}

function getHumanChoice() {
  let choice = prompt("Give you choice. Rock, Paper or Scissor?").toLowerCase();
  let choiceNumber = undefined;
  switch (choice) {
    case "rock":
      choiceNumber = 1;
      break;
    case "paper":
      choiceNumber = 2;
      break;
    case "scissor":
      choiceNumber = 3;
      break;

    default:
      getHumanChoice();
  }
  return choiceNumber;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === 1 && computerChoice === 3) {
    humanScore += 1;
  } else if (humanChoice === 2 && computerChoice === 1) {
    humanScore += 1;
  } else if (humanChoice === 3 && computerChoice === 2) {
    humanScore += 1;
  } else if (humanChoice === computerChoice) {
    humanScore += 1;
    computerScore += 1;
  } else {
    computerScore += 1;
  }
}

function playGame(rounds) {
  for (let i = 0; i < rounds; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputersChoice();
    playRound(humanChoice, computerChoice);
  }
  if (humanScore > computerScore) {
    console.log("Hurray!, You Win");
  } else if (humanScore < computerScore) {
    console.log("Sorry, you Lose");
  } else {
    console.log("It is a Draw");
  }
}

let humanScore = 0;
let computerScore = 0;

playGame(5);
