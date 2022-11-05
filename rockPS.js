
function getComputerSelection() {
  return (Math.floor(Math.random() * 10) % 3) + 1; //generate random number between 0 and 1, multiply by 10 to obtain integer, (mod 3 + 1) to get a number between 1 and 3
}

function getUserSelection() {
  let selection = prompt("Rock, Paper, or Scissors? Choose wisely."); //consider input validation
//can repeat loop if user does not select a proper choice
  let result = selection.toLowerCase(); // this won't work if its null, can add that change later on
  
  //is there a way to have a default value if nothing or blank is typed in?
return result
}
function convertToNum(string) {
  if (string === "rock") {
    return 1;
  }
  else if (string === "paper") {
    return 2;
  }
  return 3;
}
  
//values will already be converted to their number representations once this function is called
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log("You and the computer tied!"); //create convert to string function to display selection
  }
  else if (playerSelection == 1) {
    if (computerSelection == 3) {
      console.log("You won! Rock beats scissors!");
    }
  
    console.log("Sorry! Paper beats rock. Looks like the computer beat you :(");
  
  }
  else if (playerSelection == 2) {
    if (computerSelection == 1) {
      console.log("You won! Paper beats rock!");
    }
   
    console.log("Sorry! Scissors beats Paper. Looks like the computer beat you :(");
  
  }
  else {
    if (computerSelection == 1) {
      console.log("Sorry! Rock beats Scissors. Looks like the computer beat you :(");
    }
    console.log("You won! Scissors beats Paper!");
  }
}

function game() {

  for (i = 0; i < 5; i++) {
    let computerSelection = getComputerSelection();
    let playerSelection = convertToNum(getUserSelection()); 

    playRound(playerSelection, computerSelection);
  }
}
console.log(game());