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

let humanScore = 0;
let computerScore = 0;
