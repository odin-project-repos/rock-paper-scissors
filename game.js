function getComputersChoice() {
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  return (array[0] % 3) + 1;
}

function getHumanChoice(event) {
  let choice = event.target.textContent.toLowerCase();
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

function playGame(event) {
  const computerChoice = getComputersChoice();
  const humanChoice = getHumanChoice(event);
  playRound(humanChoice, computerChoice);
  const message = document.querySelector(".result");
  if (message.textContent !== "") message.textContent = "";
  changeScore();
  if (computerScore >= 5 || humanScore >= 5) {
    if (humanScore > computerScore) {
      message.textContent = "Hurray!, You Win";
    } else if (humanScore < computerScore) {
      message.textContent = "Sorry, you Lose";
    } else {
      message.textContent = "It is a Draw";
    }
    humanScore = 0;
    computerScore = 0;
  }
}

function changeScore() {
  document.querySelector(".human-score").textContent = humanScore;
  document.querySelector(".computer-score").textContent = computerScore;
}

let humanScore = 0;
let computerScore = 0;

const selection_list = document.querySelector("ul");
selection_list.addEventListener("click", (event) => {
  playGame(event);
});
