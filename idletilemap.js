const stoneImage = new Image();
stoneImage.src = './images/environment/Main.png';



class IdleTilemap {
  constructor(gameInstance) {
    this.game = gameInstance;
    this.rows = 3;
    this.cols = 36;
    this.tilesize = 25;
    this.concrete = stoneImage;
    this.concreteX = 60;
    this.concreteY = 108;
    this.concreteWidth = 12;
    this.concreteHeight = 12;


    // concrete : 3

    this.tiles = [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1
    ];
  }

  getTile(col, row) {
    return this.tiles[row * this.cols + col]; //index
  }

  drawUp() {
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        let tile = this.getTile(i, j);

        if (tile !== 0) {
          // down drawing'e bunu koymadim ki cizsin her turlu. ust tarafta o bosluga canlar gelicek
          this.game.context.drawImage(
            stoneImage, // image
            this.concreteX,
            this.concreteY,
            this.concreteWidth,
            this.concreteHeight,
            i * this.tilesize, // target x
            j * this.tilesize, // target y
            this.tilesize, // target width
            this.tilesize // target height
          );
        }
      }
    }
  }

  drawDown() {
    for (let c = 0; c < this.cols; c++) {
      for (let r = 0; r < this.rows; r++) {
        let tile = this.getTile(c, r);

        this.game.context.drawImage(
          stoneImage, // image
          this.concreteX,
          this.concreteY,
          this.concreteWidth,
          this.concreteHeight,
          c * this.tilesize, // target x
          this.game.canvas.height - 75 + r * this.tilesize, // target y
          this.tilesize, // target width
          this.tilesize // target height
        );
      }
    }
  }
}
