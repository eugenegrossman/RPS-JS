let choices = ['rock','paper','scissors']

  const array = [
    ['t','l','w'],
    ['w','t','l'],
    ['l','w','t']
  ];

  const resultMap = {
    't' : "Tie",
    'w' : "You Win!",
    'l' : "You Lose!"
  };

  let computerwins = 0
  let yourwins = 0

  function computerPlay(){
      let cChoice = choices[Math.floor(Math.random()*choices.length)]
      let cChoiceIndex = choices.indexOf(cChoice)
      return cChoiceIndex
  }

 //playing the game

 function playRound(computerSelection,playerSelection){
    let result = array[computerPlay()][yourPlay()]
    if (result === 'w'){
      console.log("You Win!")
      yourwins +=1;
    } else if (result === 'l'){
      console.log("You Lose!")
      computerwins +=1;
    }else{
      console.log("It's a tie.");
    }
  }

  var yourChoice;

  function yourPlay(){
    let selection = yourChoice
    let selectionCase = selection.toLowerCase()
    let playerSelection = choices.indexOf(selectionCase)
    console.log(playerSelection)
    return playerSelection
  }

//buttons
const buttons = document.querySelectorAll('button');

buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
    yourChoice = (button.id)
    playRound();
    })
})

//select the container div
const container = document.querySelector('#container');

//title header
const content = document.createElement('h1');
content.classList.add('content');
content.textContent = "RPS : Choose your weapon";
content.style.color = "black"; 
content.style.backgroundColor = "gray";


  function game(rounds){
    while(rounds > 0){
      playRound();
      rounds -=1;
      console.log(`There are ${rounds} rounds left.`);
    }
    if (computerwins > yourwins){
      console.log(`Unlucky, you've lost ${computerwins} to ${yourwins} to the computer`);
    }
    else if (yourwins > computerwins){
      console.log(`Nice, you've won ${computerwins} to ${yourwins} against the computer`);
    }
    else {
      console.log("Youve tied the computer.");
    }
  }


//rounds
const roundsplayed = document.querySelector('#rounds');
const roundsplayed_count = document.createElement('p');
roundsplayed_count.classList.add('roundsplayed');
roundsplayed_count.textContent = 0; 
roundsplayed_count.style.color = "blue";

//assign children
container.appendChild(content);
roundsplayed.appendChild(roundsplayed_count);

//   game(getNumberRounds())