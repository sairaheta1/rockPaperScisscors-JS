const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerSelection = button.id;
    selection_img = button.querySelector('img');
    selection_img.style.cssText = 'padding: 10px; border-radius: 10px; border: solid rgb(91, 130, 121) 2px; box-shadow: 10px 10px 2px 1px rgb(91, 130, 121);'
    playRound(playerSelection, getComputerSelection());
  });
});

function getComputerSelection() {
  compChoice = (Math.floor(Math.random() * 10) % 3) + 1; //generate random number between 0 and 1, multiply by 10 to obtain integer, (mod 3 + 1) to get a number between 1 and 3
  //update images of computer choice
  const img = document.createElement('img');
  
  switch (compChoice) {
    case 1:
      img.setAttribute('src', 'images/rock.png');
      img.setAttribute('alt', 'Clipart of a rock');
      break;
    case 2:
      img.setAttribute('src', 'images/stickyNote.png');
      img.setAttribute('alt', 'Clipart of a sticky note');
      break;
    case 3:
      img.setAttribute('src', 'images/scissors.png');
      img.setAttribute('alt', 'Clipart of a pair of scissors');
      break;
  }
  img.style.cssText = 'padding: 10px; border-radius: 10px; border: solid rgb(91, 130, 121) 2px; box-shadow: 10px 10px 2px 1px rgb(91, 130, 121);'
  const div = document.querySelector('.computer-choice');
  div.appendChild(img);
  return compChoice;
}
//values will already be converted to their number representations once this function is called
function playRound(playerSelection, computerSelection) {
  const results_div = document.createElement('div');
  let text;

  if (playerSelection == computerSelection) {
    text ="You and the computer tied!"; //create convert to string function to display selection
  }
  else if (playerSelection == 1) {
    if (computerSelection == 3) {
      text = "You won! Rock beats scissors!";
    }
    else {
      text ="Sorry! Paper beats rock. Looks like the computer beat you :(";
    }
  
  }
  else if (playerSelection == 2) {
    if (computerSelection == 1) {
      text= "You won! Paper beats rock!";
    }
    else {
      text ="Sorry! Scissors beats Paper. Looks like the computer beat you :(";
    }
  
  }
  else {
    if (computerSelection == 1) {
      text ="Sorry! Rock beats Scissors. Looks like the computer beat you :(";
    }
    else {
      text ="You won! Scissors beats Paper!";
    }
  }
  results_div.textContent = text;

  const match = document.querySelector('.match');
  match.appendChild(results_div);
}