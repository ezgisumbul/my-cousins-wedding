const coinImage = new Image();
coinImage.src = './images/coin_rot_anim.png';

class Coin {
  constructor(gameInstance, x, y) {
    this.game = gameInstance;
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.frame = 0;
    this.framesDrawn = 0;
  }

  setRandomPosition() {
    this.x = Math.floor(Math.random() * (this.game.canvas.width -100 - 100  + 1) + 100);
    this.y = Math.floor(Math.random() * (this.game.canvas.height -100 - 100  + 1) + 100);
  }

  draw() {
    this.framesDrawn++;
    if (this.framesDrawn >= 10) {
      this.frame++;
      this.framesDrawn = 0;
    }

    this.game.context.drawImage(
      coinImage,
      0 + 32 * (this.frame % 6), //51 // 82
      0, //17
      32,
      32,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  checkIntersection() {
    return (
      this.x < this.game.player.x + this.game.player.width - 10 && //relative coming from right
      this.x + this.width > this.game.player.x + 10 && // relative coming from left
      this.y < this.game.player.y + this.game.player.height - 10 && // relative coming from bottom
      this.y + this.height > this.game.player.y + +10 // relative comming from top
    );
  }
}
