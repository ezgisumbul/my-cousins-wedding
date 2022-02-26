// // these will be moved into classes later:
// let sizeRelative = 50;
// let sizePlayer = 50;

// // the values inside these should be assigned to this.x and this.y in player and relative classes
// let relativeX = canvasElement.width - sizeRelative;
// let relativeY = canvasElement.height / 2;
// let playerX = (canvasElement.width - sizePlayer) / 2;
// let playerY = canvasElement.height - sizePlayer; //bottom of the page
// let dx = -2; // birim zamandaki yer degistirme = displacement in unit time i.e. speed
// let dy = 0;
// let dxPlayer = 0;
// let dyPlayer = -10;

class Relative {
  constructor(gameInstance, x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.game = gameInstance;
    this.width = 40;
    this.height = 40;
  }

  checkIntersection(player) {
    //   if left of relative is smaller than right of player // meaning Xes, relative on right side
    //   if rigth of relative is bigger than left of player //meaning Xes, relative on left side
    //   if top of relative smaller than bottom of player // meaning Ys, relative at the bottom
    //   if bottom of relative bigger than top of player // meaning Ys, relative on top
    return (
      this.x < this.game.player.x + this.game.player.width &&
      this.x + this.width > this.game.player.x &&
      this.y < this.game.player.y + this.game.player.height &&
      this.y + this.height > this.game.player.y
    );
  }

  draw() {
    this.game.context.save();
    //this is the relative drawn below:
    this.game.context.fillStyle = 'orange';
    this.game.context.fillRect(this.x, this.y, this.width, this.height);
    this.game.context.restore();
  }

  moveLogic() {
    this.x -= this.speed;
    // on every press on tryAgain button, the speed increases. Is it because I haven't put my relatives into start game method?
  }

  bounceTheRelatives() {
    // will move this method into relative class
    if (
      this.x - this.speed < 0 ||
      this.x - this.speed > this.game.canvas.width - this.width
    ) {
      this.speed = -this.speed;
    }
  }
}

//~relativeX += dx;
//~relativeY += dy;

//~relative.bounceTheRelatives(); // may call this in a method to draw all enemies and call here that method instead

//   bounceTheRelatives() {
//     // will move this method into relative class
//     if (
//       relativeX + dx < 0 ||
//       relativeX + dx > canvasElement.width - sizeRelative
//     ) {
//       dx = -dx;
//     }
//   }
