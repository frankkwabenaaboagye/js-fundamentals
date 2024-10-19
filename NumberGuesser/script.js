let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random()*10);

/*
cg - computer guess
hg - human guess
st - secret target

return 
  - true: if human wins
  - false: if computer wins
*/
const compareGuesses = (cg, hg, st) => {
  if(cg === hg && hg === st){return true;} // If both players are tied, the human user should win.
  if(hg === st){return true;}
  if(cg === st){return false;}
  let cgAbsolute = Math.abs(cg - st);
  let hgAbsolute = Math.abs(hg - st);
  if(cgAbsolute < hgAbsolute){return false;}
  return true;
}

const updateScore = (guesser) => {
  if(guesser === 'human'){humanScore++;}
  if(guesser === 'computer'){computerScore++;}
}

const advanceRound = () => currentRoundNumber++;

