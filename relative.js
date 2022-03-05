const relative1Image = new Image();
relative1Image.src = './images/relatives/Aunt_blue.png';

const relative2Image = new Image();
relative2Image.src = './images/relatives/Grandpa.png';

const relative3Image = new Image();
relative3Image.src = './images/relatives/Grandma_green.png';

const relative4Image = new Image();
relative4Image.src = './images/relatives/Aunt_purple.png';

const relative5Image = new Image();
relative5Image.src = './images/relatives/Uncle_bald.png';

const relative6Image = new Image();
relative6Image.src = './images/relatives/Aunt_lightblue.png';

const relative7Image = new Image();
relative7Image.src = './images/relatives/Grandma_red.png';

const relative8Image = new Image();
relative8Image.src = './images/relatives/Uncle_grey.png';

const relative9Image = new Image();
relative9Image.src = './images/relatives/Aunt_yellow.png';

const imagesOfRelatives = [
  relative1Image,
  relative2Image,
  relative3Image,
  relative4Image,
  relative5Image,
  relative6Image,
  relative7Image,
  relative8Image,
  relative9Image
];

class Relative {
  constructor(gameInstance, x, y, speed, image, cropY) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.game = gameInstance;
    this.width = 48;
    this.height = 48;
    this.image = image;
    this.cropY = cropY;
  }

  checkIntersection() {
    return (
      this.x < this.game.player.x + this.game.player.width - 7 && //relative coming from right
      this.x + this.width > this.game.player.x + 7 && // relative coming from left
      this.y < this.game.player.y + this.game.player.height - 4 && // relative coming from bottom
      this.y + this.height > this.game.player.y + 4 // relative comming from top
    );
  }

  draw() {
    this.game.context.save();

    if (this.speed < 0) {
      this.cropY = 40;
    } else {
      this.cropY = 121;
    }

    this.game.context.drawImage(
      this.image,
      5,
      this.cropY,
      28,
      39,
      this.x,
      this.y,
      this.width,
      this.height
    );

    this.game.context.restore();
  }

  moveLogic() {
    this.x -= this.speed;
  }

  bounceTheRelatives() {
    if (
      this.x - this.speed < 0 ||
      this.x - this.speed > this.game.canvas.width - this.width
    ) {
      this.speed = -this.speed;
    }
  }
}

// Sprites: Curt, cjc83486 http://opengameart.org/content/rpg-character-bases-assets
