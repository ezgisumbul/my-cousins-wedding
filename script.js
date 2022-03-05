const canvasElement = document.getElementById('game-canvas');

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

const wGame = new Game(canvasElement, screenElements);
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
});

tryAgainButton.addEventListener('click', () => {
  loseScreen.style.display = 'none';
  runningScreen.style.display = '';
  wGame.startGame();
});
