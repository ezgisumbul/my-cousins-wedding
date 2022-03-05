const canvasTop = document.getElementById('top-canvas');
const canvasLeft = document.getElementById('left-canvas');
const canvasRight = document.getElementById('right-canvas');

// this.canvasLeft = canvasLeft;
// this.canvasRight = canvasRight;
// this.canvastop = canvasTop;
const contextleft = canvasLeft.getContext('2d');
const contextright = (right = canvasRight.getContext('2d'));
const contexttop = canvasTop.getContext('2d');

const darkGreenTreeImage = new Image();
darkGreenTreeImage.src = './images/environment/Main.png';

const lightGreenTreeImage = new Image();
lightGreenTreeImage.src = './images/environment/Main.png';

const groundImage = new Image();
groundImage.src = './images/environment/Main.png';

class TopDecoration {
  constructor(gameInstance) {
    // this.canvasLeft = canvasLeft;
    // this.canvasRight = canvasRight;
    // this.canvastop = canvasTop;
    // this.contextLeft = canvasLeft.getContext('2d');
    // this.contextRight = canvasRight.getContext('2d');
    // this.contexttop = canvasTop.getContext('2d');
    this.game = gameInstance;
    this.topRows = 2;
    this.topCols = 18;
    this.tilesize = 50;

    this.sideRows = 14;
    this.sideCols = 2;


    // darkGreenTree : 1
    // lightGreenTree : 3

    this.tileTreeTop = [
      3, 1, 3, 1, 1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 3, 1, 1, 3, 1, 1, 3, 1, 3, 3, 3,
      1, 1, 1, 3, 1, 1, 3, 3, 3, 1, 1
    ];

    this.tileGroundTop = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
      ];

    this.tileGroundSide = 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1]

    this.tileTreeSide = 
    [3, 1, 3, 3, 1, 3, 3, 1, 1, 3, 1, 3, 1, 1, 
    1, 3, 1, 3, 3, 1, 3, 1, 3, 1, 1, 3, 1, 1]
  }

  getTileTreeTop(col, row) {
    return this.tileTreeTop[row * this.topCols + col]; //index
  }
  getTileGroundTop(col, row) {
    return this.tileGroundTop[row * this.topCols + col]; //index
  }


  getTileTreeSide(col, row) {
    return this.tileTreeSide[row * this.sideCols + col]; //index
  }
  getTileGroundSide(col, row) {
    return this.tileGroundSide[row * this.sideCols + col]; //index
  }

  drawGroundTop() {
    for (let c = 0; c < this.topCols; c++) {
      for (let r = 0; r < this.topRows; r++) {
        let tile = this.getTileGroundTop(c, r);
        if (tile !== 0) {
          switch (tile) {
            case 1:
              contexttop.drawImage(
                groundImage, // image
                60,
                108,
                25,
                25,
                c * this.tilesize, // target x
                r * this.tilesize, // target y
                this.tilesize, // target width
                this.tilesize // target height
              );
              break;
          }
        }
      }
    }
  }

  drawTreeTop() {
    for (let c = 0; c < this.topCols; c++) {
      for (let r = 0; r < this.topRows; r++) {
        let tile = this.getTileTreeTop(c, r);
        if (tile !== 0) {
          switch (tile) {
            case 1:
              contexttop.drawImage(
                darkGreenTreeImage, // image
                149,
                68,
                44,
                62,
                c * this.tilesize, // target x
                r * this.tilesize, // target y
                this.tilesize, // target width
                this.tilesize // target height
              );
              break;
            case 3:
              contexttop.drawImage(
                lightGreenTreeImage, // image
                101,
                68,
                44,
                62,
                c * this.tilesize, // target x
                r * this.tilesize, // target y
                this.tilesize, // target width
                this.tilesize // target height
              );
              break;
          }
        }
      }
    }
  }

  drawGroundRight() {
    for (let c = 0; c < this.sideCols; c++) {
      for (let r = 0; r < this.sideRows; r++) {
        let tile = this.getTileGroundSide(c, r);
        if (tile !== 0) {
          switch (tile) {
            case 1:
              contextright.drawImage(
                groundImage, // image
                60,
                108,
                25,
                25,
                c * this.tilesize, // target x
                r * this.tilesize, // target y
                this.tilesize, // target width
                this.tilesize // target height
              );
              break;
          }
        }
      }
    }
  }

  drawTreeRight() {
    for (let c = 0; c < this.sideCols; c++) {
      for (let r = 0; r < this.sideRows; r++) {
        let tile = this.getTileTreeSide(c, r);
        if (tile !== 0) {
          switch (tile) {
            case 1:
              contextright.drawImage(
                darkGreenTreeImage, // image
                149,
                68,
                44,
                62,
                c * this.tilesize, // target x
                r * this.tilesize, // target y
                this.tilesize, // target width
                this.tilesize // target height
              );
              break;
            case 3:
              contextright.drawImage(
                lightGreenTreeImage, // image
                101,
                68,
                44,
                62,
                c * this.tilesize, // target x
                r * this.tilesize, // target y
                this.tilesize, // target width
                this.tilesize // target height
              );
              break;
          }
        }
      }
    }
  }


  drawGroundLeft() {
    for (let c = 0; c < this.sideCols; c++) {
      for (let r = 0; r < this.sideRows; r++) {
        let tile = this.getTileGroundSide(c, r);
        if (tile !== 0) {
          switch (tile) {
            case 1:
              contextleft.drawImage(
                groundImage, // image
                60,
                108,
                25,
                25,
                c * this.tilesize, // target x
                r * this.tilesize, // target y
                this.tilesize, // target width
                this.tilesize // target height
              );
              break;
          }
        }
      }
    }
  }

  drawTreeLeft() {
    for (let c = 0; c < this.sideCols; c++) {
      for (let r = 0; r < this.sideRows; r++) {
        let tile = this.getTileTreeSide(c, r);
        if (tile !== 0) {
          switch (tile) {
            case 1:
              contextleft.drawImage(
                darkGreenTreeImage, // image
                149,
                68,
                44,
                62,
                c * this.tilesize, // target x
                r * this.tilesize, // target y
                this.tilesize, // target width
                this.tilesize // target height
              );
              break;
            case 3:
              contextleft.drawImage(
                lightGreenTreeImage, // image
                101,
                68,
                44,
                62,
                c * this.tilesize, // target x
                r * this.tilesize, // target y
                this.tilesize, // target width
                this.tilesize // target height
              );
              break;
          }
        }
      }
    }
  }

}
