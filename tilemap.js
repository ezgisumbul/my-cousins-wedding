
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
