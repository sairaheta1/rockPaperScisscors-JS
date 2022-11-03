function getComputerSelection() {
  return (Math.floor(Math.random() * 10) % 3) + 1; //generate random number between 0 and 1, multiply by 10 to obtain integer, (mod 3 + 1) to get a number between 1 and 3
}

function getUserSelection() {
  let selection = prompt("Rock, Paper, or Scissors? Choose wisely.");

  let result = selection.toLowerCase(); // this won't work if its null, can add that change later on
  
  //is there a way to have a default value if nothing or blank is typed in?
return result
}
console.log(getComputerSelection());
console.log(getUserSelection());