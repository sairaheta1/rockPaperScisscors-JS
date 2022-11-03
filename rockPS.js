function getComputerSelection() {
  return (Math.floor(Math.random() * 10) % 3) + 1; //generate random number between 0 and 1, multiply by 10 to obtain integer, (mod 3 + 1) to get a number between 1 and 3
}

function getUserSelection() {
  let selection = prompt("Rock, Paper, or Scissors? Choose wisely.");

  let result = selection.toLowerCase(); // this won't work if its null, can add that change later on
  
  //is there a way to have a default value if nothing or blank is typed in?
return result
}

//values will already be converted to their number representations once this function is called
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "You and the computer tied!";
  }
  else if (playerSelection == 1) {
    if (computerSelection == 3) {
      return "You won!";
    }
  
    return "Sorry! Looks like the computer beat you :("
  
  }
  else if (playerSelection == 2) {
    if (computerSelection == 1) {
      return "You won!";
    }
   
    return "Sorry! Looks like the computer beat you :(";
  
  }
  else {
    if (computerSelection == 1) {
      return "Sorry! Looks like the computer beat you :(";
    }
    return "You won!";
  }
}

function game() {
  let computerSelection = getComputerSelection();

  let playerSelection = convertToNum(getUserSelection); //still need to create conversion function

  for (i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection);
  }
}