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
  var rounds = 0

//random computer's play
  function computerPlay(){
      let cChoice = choices[Math.floor(Math.random()*choices.length)]
      let cChoiceIndex = choices.indexOf(cChoice)
      return cChoiceIndex
  }

//your choice function, returns index of player's selection
  var yourChoice;

  function yourPlay(){
    let selection = yourChoice
    let selectionCase = selection.toLowerCase()
    let playerSelection = choices.indexOf(selectionCase)
    return playerSelection
  }

 //playing the game
 function playRound(computerSelection,playerSelection){
    let result = array[computerPlay()][yourPlay()]
    if (result === 'w'){
      console.log("You Win!")
      yourwins +=1;
      document.getElementById('results').innerHTML = 'Results: You Win!';
      document.getElementById('yourscore').innerHTML = yourwins;
    } else if (result === 'l'){
      console.log("You Lose!")
      computerwins +=1;
      document.getElementById('results').innerHTML = 'Results: You Lose!';
      document.getElementById('computerscore').innerHTML = computerwins;
    }else{
      document.getElementById('results').innerHTML = 'Results: Tie Game.';
      console.log("It's a tie.");
    }
  }

//rounds played index
function addRound() {
  rounds += 1;
  document.getElementById('clicks').innerHTML = rounds;
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


//assign children
container.appendChild(content);

