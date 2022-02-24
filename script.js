//for some reason this should be globally available and
//not be inside Game class. Let's leave it like this and see
const canvasElement = document.querySelector('canvas');

//and for some reason this can be inside Game class
//and not necessarily be globally available. Isn't other classes
//like player etc also part of canvas and they should also use
//methods brought by 2d? Let's try leaving it like this for now
// after putting it inside game object, I don't need it anymore
//const context = canvasElement.getContext('2d'); // getContext (2d) gives me an object with methods and properties of 2d canvas. I assign it to a varible  so that I can use the methods of that object later (such as .fillRect()

// these will be moved into classes later:
let sizeRelative = 50;
let sizePlayer = 50;

// the values inside these should be assigned to this.x and this.y in player and relative classes
//let relativeX = canvasElement.width - sizeRelative;
//let relativeY = canvasElement.height / 2;
let playerX = (canvasElement.width - sizePlayer) / 2;
let playerY = canvasElement.height - sizePlayer; //bottom of the page
let dx = -2; // birim zamandaki yer degistirme = displacement in unit time i.e. speed
let dy = 0;
let dxPlayer = 0;
let dyPlayer = -10;

// console.log('hey');

// hizlica cizdirmek icin yazdim. ayri bir class olacak :
//~const relative = new Game();
//~const player = new Game();

const wGame = new Game(canvasElement); // why do we do this? because then we can access the canvas from everywhere else in the game object
// however we could still access it as a global variable so it shouldn't be the reason. I don't really get it.

//~setInterval(relative.draw, 1000 / 60);
//window.requestAnimationFrame(player.draw); // did not work because I don't have a loop?

// remove these later:

wGame.animationLoop();
