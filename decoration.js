const brideImage = new Image();
brideImage.src = './images/environment/bride.png';

const groomImage = new Image();
groomImage.src = './images/environment/groom.png';

class Decoration {
  constructor(gameInstance) {
    this.game = gameInstance;
    this.rows = 12;
    this.cols = 18;
    this.tilesize = 50;

    this.darkGreenTree = darkGreenTreeImage;
    this.darkGreenTreeX = 149;
    this.darkGreenTreeY = 64;
    this.darkGreenTreeWidth = 44;
    this.darkGreenTreeHeight = 68;

    this.lightGreenTree = lightGreenTreeImage;
    this.lightGreenTreeX = 101;
    this.lightGreenTreeY = 64;
    this.lightGreenTreeWidth = 44;
    this.lightGreenTreeHeight = 68;

    this.bride = brideImage;
    this.brideX = 52;
    this.brideY = 67;
    this.brideWidth = 19;
    this.brideHeight = 27;

    this.groom = groomImage;
    this.groomX = 52;
    this.groomY = 67;
    this.groomWidth = 19;
    this.groomHeight = 28;

    // darkGreenTree : 1
    // lightGreenTree : 2
    // bride : 4
    // groom : 5

    this.tiles = [
      2, 2, 1, 1, 2, 1, 2, 2, 4, 5, 1, 1, 2, 1, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1,
      1, 1, 1, 1, 2, 1, 0, 0, 2, 1, 2, 2, 1, 2, 1, 2
    ];
  }

  getTile(col, row) {
    return this.tiles[row * this.cols + col]; //index
  }

  selectPlant() {
    this.relatives.forEach((rel, ind) => {
      //console.log(`Assigning ${ind} which is ${imagesOfRelatives[ind].src}`);
      rel.image = imagesOfRelatives[ind % imagesOfRelatives.length];
    });
  }

  draw() {
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        let tile = this.getTile(i, j);
        let image;
        let imageX;
        let imageY;
        let imageWidth;
        let imageHeight;
        if (tile !== 0) {
          switch (tile) {
            case 1:
              image = this.darkGreenTree;
              imageX = this.darkGreenTreeX;
              imageY = this.darkGreenTreeY;
              imageWidth = this.darkGreenTreeWidth;
              imageHeight = this.darkGreenTreeHeight;
              break;
            case 2:
              image = this.lightGreenTree;
              imageX = this.lightGreenTreeX;
              imageY = this.lightGreenTreeY;
              imageWidth = this.lightGreenTreeWidth;
              imageHeight = this.lightGreenTreeHeight;
              break;
            case 4:
              image = this.bride;
              imageX = this.brideX;
              imageY = this.brideY;
              imageWidth = this.brideWidth;
              imageHeight = this.brideHeight;
              break;
            case 5:
              image = this.groom;
              imageX = this.groomX;
              imageY = this.groomY;
              imageWidth = this.groomWidth;
              imageHeight = this.groomHeight;
              break;
            case 6:
              image = this.bench;
              imageX = this.benchX;
              imageY = this.benchY;
              imageWidth = this.benchWidth;
              imageHeight = this.benchHeight;
              break;
          }
          // 0 => empty tile
          this.game.context.drawImage(
            image, // image
            imageX,
            imageY,
            imageWidth,
            imageHeight,
            i * this.tilesize, // target x
            j * this.tilesize, // target y
            57, // target width
            57 // target height
          );
        }
      }
    }
  }
}

// sprites for bride and groom :
// Copyright/Attribution Notice:
// Created by Svetlana Kushnariova (Cabbit) <lana-chan@yandex.ru>, diamonddmgirl, & Jordan Irwin (AntumDeluge)
