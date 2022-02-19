// these will be moved into classes later:
let sizeRelative = 50;
let relativeX = canvasElement.width - sizeRelative;
let relativeY = canvasElement.height / 2;
let dx = -2; // birim zamandaki yer degistirme = displacement in unit time i.e. speed
let dy = 0;

let sizePlayer = 50;
let playerX = (canvasElement.width - sizePlayer) / 2;
let playerY = canvasElement.height - sizePlayer; //random value

class Game {
  constructor() {
    this.canvas = canvasElement; // don't know the reason. let's see if I access it at any point
  }

  bounceTheRelatives() {
    // will move this method into relative class
    if (
      relativeX + dx < 0 ||
      relativeX + dx > canvasElement.width - sizeRelative
    ) {
      dx = -dx;
    }
  }

  drawPlayer() {
    context.fillStyle = 'lightgreen';
    context.fillRect(playerX, playerY, sizePlayer, sizePlayer);
  }

  draw() {
    //this is the relative drawn below:
    context.clearRect(0, 0, 900, 600); // this works but
    // context.clearRect(0, 0, this.canvas.width, this.canvas.height); // this does not. why?
    context.fillStyle = 'orange';
    context.fillRect(relativeX, relativeY, sizeRelative, sizeRelative); // referancing to a global variable "sizeRelative". works (/)
    relativeX += dx;
    relativeY += dy;
    player.drawPlayer();
    relative.bounceTheRelatives(); // may call this in a method to draw all enemies and call here that method instead
  }
}

// console.log('hey');

// hizlica cizdirmek icin yazdim. ayri bir class olacak :
const relative = new Game();
const player = new Game();

// setInterval(relative.draw, 10);
setInterval(player.draw, 10);
