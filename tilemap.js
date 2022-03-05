const grassImage = new Image();
grassImage.src = './images/environment/grass.png';

class Tilemap {
  constructor(gameInstance) {
    this.game = gameInstance;
    this.rows = 9;
    this.cols = 18;
    this.tilesize = 50;

    this.grass = grassImage;

    this.grassX = 0;
    this.grassY = 0;
    this.grassWidth = 32;
    this.grassHeight = 32;

    // grass : 1

    this.tiles = [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ];
  }

  getTile(col, row) {
    return this.tiles[row * this.cols + col]; //index
  }

  draw() {
    for (let c = 0; c < this.cols; c++) {
      for (let r = 0; r < this.rows; r++) {
        let tile = this.getTile(c, r);
        let image;
        let imageX;
        let imageY;
        let imageWidth;
        let imageHeight;
        if (tile !== 0) {
          switch (tile) {
            case 1:
              image = this.grass;
              imageX = this.grassX;
              imageY = this.grassY;
              imageWidth = this.grassWidth;
              imageHeight = this.grassHeight;
              break;
          }
          // 0 => empty tile
          this.game.context.drawImage(
            image,
            imageX,
            imageY,
            imageWidth,
            imageHeight,
            c * this.tilesize, // target x
            75 + r * this.tilesize, // target y
            this.tilesize, // target width
            this.tilesize // target height
          );
        }
      }
    }
  }
}
