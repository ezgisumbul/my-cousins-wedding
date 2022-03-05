const concreteImage = new Image();
concreteImage.src = './images/environment/Main.png';
const grassImage = new Image();
grassImage.src = './images/environment/grass.png';
const stairImage = new Image();
stairImage.src = './images/environment/Main.png';
const arcImage = new Image();
arcImage.src = './images/environment/TX Struct.png';

class Tilemap {
  constructor(gameInstance) {
    this.game = gameInstance;
    this.rows = 9;
    this.cols = 18;
    this.tilesize = 50;
    this.concrete = concreteImage;
    this.grass = grassImage;
    this.stair = stairImage;
    this.arc = arcImage;
    this.grassX = 0;
    this.grassY = 0;
    this.grassWidth = 32;
    this.grassHeight = 32;
    this.concreteX = 60;
    this.concreteY = 108;
    this.concreteWidth = 25;
    this.concreteHeight = 25;
    this.stairX = 9;
    this.starirY = 116;
    this.stairWidth = 32;
    this.stairHeight = 39;
    this.arcX = 419;
    this.arcY = 128;
    this.arcWidth = 66;
    this.arcHeight = 66;

    // grass : 1
    // concrete : 3
    // stair : 2

    this.tiles = [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
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
            case 2:
              image = this.stair;
              imageX = this.stairX;
              imageY = this.starirY;
              imageWidth = this.stairWidth;
              imageHeight = this.stairHeight;
              break;
            case 3:
              image = this.concrete;
              imageX = this.concreteX;
              imageY = this.concreteY;
              imageWidth = this.concreteWidth;
              imageHeight = this.concreteHeight;
              break;
            // default:
            //   image = this.grass;
            //   imageX = this.grassX;
            //   imageY = this.grassY;
            //   imageWidth = this.grassWidth;
            //   imageHeight = this.grassHeight;
          }
          // 0 => empty tile
          this.game.context.drawImage(
            image, // image
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

// this.game.context.scale(-1,1 will rotate the image 180' around y axis if it is added before the draw is called for the respective image)

// OBSOLETE

//this.tilesize = 50;
// this.concrete = //imageUpload;
// this.grass = //imageUpload;
// this.tree = //imageUpload;
// this.altar = //imageUpload;
// this.mapMiddle = [
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// ];

//   drawMap() {
//     for (let row = 0; row < this.mapMiddle.length; row++) {
//       for (let col = 0; col < this.mapMiddle[row].length; col++) {
//         // const tile = this.mapMiddle[row][col];
//         // let image = null;
//         // switch (tile) {
//         //   case 1:
//         //     image = concreteImage;
//         //     break;
//         // }

//         // if (image != null) {}
//         // if (tile === 1) {
//         //  concreteImage.onload = () => {

//         this.game.context.drawImage(
//           concreteImage,
//           0,
//           193,
//           193,
//           193,
//           this.mapMiddle[col] * 50,
//           75 + this.mapMiddle[row] * 50,
//           50,
//           50
//         );

//         // };
//         // }
//       }
//     }
//   }

//   draw() {
//     this.game.context.drawImage(concreteImage, 0, 193, 193, 193, 0, 75, 50, 50);
//   }
