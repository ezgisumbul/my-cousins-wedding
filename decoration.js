const wallImage = new Image();
wallImage.src = './images/environment/TX Tileset Wall.png';

const treeImage = new Image();
treeImage.src = './images/environment/chestnut-001.png';

const plant1Image = new Image();
plant1Image.src = './images/environment/plants/anthurium-pink.png';

const plant2Image = new Image();
plant2Image.src = './images/environment/plants/daffodils.png';

const plant3Image = new Image();
plant3Image.src = './images/environment/plants/foxglove.png';

const plant4Image = new Image();
plant4Image.src = './images/environment/plants/ginger.png';

const plant5Image = new Image();
plant5Image.src = './images/environment/plants/heather.png';

const plant6Image = new Image();
plant6Image.src = './images/environment/plants/pansies.png';

const plant7Image = new Image();
plant7Image.src = './images/environment/plants/protea.png';

const plant8Image = new Image();
plant8Image.src = './images/environment/plants/scarletstarbromeliad.png';

const plantImages = [
  plant1Image,
  plant2Image,
  plant3Image,
  plant4Image,
  plant5Image,
  plant6Image,
  plant7Image,
  plant8Image
];

const treeShadowImage = new Image();
treeShadowImage.src = './images/environment/TX Shadow Plant.png';

const brideImage = new Image();
brideImage.src = './images/environment/bride.png';

const groomImage = new Image();
groomImage.src = './images/environment/groom.png';

const benchImage = new Image();
benchImage.src = './images/environment/preview.png';

class Decoration {
  constructor(gameInstance) {
    this.game = gameInstance;
    this.rows = 12;
    this.cols = 18;
    this.tilesize = 50;

    this.wall = wallImage;
    this.tree = treeImage;
    this.treeShadow = treeShadowImage;
    this.bride = brideImage;
    this.groom = groomImage;
    this.bench = benchImage;
    this.arc = arcImage;
    this.treeX = 0;
    this.treeY = 0;
    this.treeWidth = 175;
    this.treeHeight = 150;
    this.wallX = 0;
    this.wallY = 130;
    this.wallWidth = 63;
    this.wallHeight = 63;
    this.treeShadowX = 9;
    this.starirY = 116;
    this.treeShadowWidth = 32;
    this.treeShadowHeight = 39;
    this.arcX = 419;
    this.arcY = 128;
    this.arcWidth = 66;
    this.arcHeight = 66;
    this.brideX = 52;
    this.brideY = 67;
    this.brideWidth = 19;
    this.brideHeight = 27;
    this.groomX = 52;
    this.groomY = 67;
    this.groomWidth = 19;
    this.groomHeight = 28;
    this.benchX = 0;
    this.benchY = 0;
    this.benchWidth = 100;
    this.benchHeight = 50;

    // tree : 1
    // wall : 3
    // treeShadow : 2
    // bride : 4
    // groom : 5

    this.tiles = [
      1, 0, 1, 0, 1, 0, 1, 0, 4, 5, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0,
      1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1
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
              image = this.tree;
              imageX = this.treeX;
              imageY = this.treeY;
              imageWidth = this.treeWidth;
              imageHeight = this.treeHeight;
              break;
            case 2:
              image = this.treeShadow;
              imageX = this.treeShadowX;
              imageY = this.treeShadowY;
              imageWidth = this.treeShadowWidth;
              imageHeight = this.treeShadowHeight;
              break;
            case 3:
              image = this.wall;
              imageX = this.wallX;
              imageY = this.wallY;
              imageWidth = this.wallWidth;
              imageHeight = this.wallHeight;
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
