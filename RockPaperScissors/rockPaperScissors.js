const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissor' || userInput === 'bomb') {
      return userInput 
    } else {
      console.log('try again');
  }
  }
  
  // console.log(getUserChoice('Paper'));
  
  const getComputerChoice = () => {
    let randomChoice =  Math.floor(Math.random() * 3);
    if(randomChoice === 0) {
      return 'rock';}
    else if (randomChoice === 1) {
    return 'paper'}
    else {
    return 'scissor'}
  }
  // console.log(getComputerChoice());
  
  let determineWinner = (userChoice, computerChoice ) => {
    if (userChoice === computerChoice) {
      return 'the game is a tie'; }
    if (userChoice === 'rock') {
      if (computerChoice  === 'paper') {
        return 'computer won'}
      else {return 'user won' }
    }
  
      if (userChoice === 'paper') {
        if (computerChoice  === 'scissor') {
          return 'computer won'}
        else {return 'user won' }
    }
  
      if (userChoice === 'scissor') {
        if (computerChoice  === 'rock') {
        return 'computer won'}
        else {return 'user won' }
    }
  
    if(userChoice === 'bomb') {
      return 'boom boom you won';
    }
  }
  
  let playGame = () => {
    let userChoice     = getUserChoice('bomb');
    let computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice,computerChoice))
  }
  playGame();