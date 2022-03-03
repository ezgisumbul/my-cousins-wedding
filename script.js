//for some reason this should be globally available and
//not be inside Game class. Let's leave it like this and see
const canvasElement = document.querySelector('canvas');

//and for some reason this can be inside Game class
//and not necessarily be globally available. Isn't other classes
//like player etc also part of canvas and they should also use
//methods brought by 2d? Let's try leaving it like this for now
// after putting it inside game object, I don't need it anymore
//const context = canvasElement.getContext('2d'); // getContext (2d) gives me an object with methods and properties of 2d canvas. I assign it to a varible  so that I can use the methods of that object later (such as .fillRect()

const startScreen = document.getElementById('start-screen');
const runningScreen = document.getElementById('running-screen');
const winScreen = document.getElementById('win-screen');
const loseScreen = document.getElementById('lose-screen');

const startButton = startScreen.querySelector('button');
const playAgainButton = winScreen.querySelector('button');
const tryAgainButton = loseScreen.querySelector('button');

const screenElements = {
  start: startScreen,
  running: runningScreen,
  win: winScreen,
  lose: loseScreen
};

const wGame = new Game(canvasElement, screenElements); // why do we do this? because then we can access the canvas from everywhere else in the game object
// however we could still access it as a global variable so it shouldn't be the reason. I don't really get it.

startButton.addEventListener('click', () => {
  startScreen.style.display = 'none';
  runningScreen.style.display = '';
  wGame.startGame();
});

playAgainButton.addEventListener('click', () => {
  winScreen.style.display = 'none';
  runningScreen.style.display = '';
  console.log('clicked');
  wGame.startGame();
  //window.reload(); // delete startGame and reload whole window
});

tryAgainButton.addEventListener('click', () => {
  loseScreen.style.display = 'none';
  runningScreen.style.display = '';
  wGame.startGame();
  //window.reload(); delete startGame and reload whole window
});
