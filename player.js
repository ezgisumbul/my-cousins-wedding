const playerImage = new Image();
playerImage.src = './images/player/Mavia.png';

class Player {
  constructor(gameInstance) {
    this.game = gameInstance;
    this.width = 46;
    this.height = 46;
    this.x = (this.game.canvas.width - this.width) / 2; // start line
    this.y = this.game.canvas.height - this.height; // start line
    this.frame = 1;
    this.framesDrawn = 0;
  }

  draw() {
    this.framesDrawn++;
    if (this.framesDrawn >= 10) {
      //this.frame++;
      this.framesDrawn = 0;
    }


    this.game.context.drawImage(
      playerImage,
      21 + 30 * (this.frame % 3),
      16,
      17,
      25,
      this.x,
      this.y,
      this.width,
      this.height
    );
 
  }

  // player successfully reaches to bride and groom:
  checkFinish() {
    return this.y + this.height < 75;
  }

  boundPlayer() {
    // player can't move further away from top, bottom, left and right
    switch (true) {
      case this.x < 0:
        this.x = 0;
        break;
      case this.x + this.width > this.game.canvas.width:
        this.x = this.game.canvas.width - this.width;
        break;
      case this.y < 0:
        this.y = 0;
        break;
      case this.y + this.height > this.game.canvas.height:
        this.y = this.game.canvas.height - this.height;
        break;
    }
  }
}