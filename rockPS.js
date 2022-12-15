const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerSelection = button.id;
    playRound(playerSelection, getComputerSelection());
  });
});




function getComputerSelection() {
  return (Math.floor(Math.random() * 10) % 3) + 1; //generate random number between 0 and 1, multiply by 10 to obtain integer, (mod 3 + 1) to get a number between 1 and 3
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