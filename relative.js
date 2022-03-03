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
    this.width = 55;
    this.height = 55;
    this.image = image;
    this.cropY = cropY;
  }

  checkIntersection() {
    //   if left of relative is smaller than right of player // meaning Xes, relative on right side
    //   if rigth of relative is bigger than left of player //meaning Xes, relative on left side
    //   if top of relative smaller than bottom of player // meaning Ys, relative at the bottom
    //   if bottom of relative bigger than top of player // meaning Ys, relative on top
    return (
      this.x < this.game.player.x + this.game.player.width &&
      this.x + this.width > this.game.player.x &&
      this.y < this.game.player.y + this.game.player.height &&
      this.y + this.height > this.game.player.y
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

    // on every press on tryAgain button, the speed increases. Is it because I haven't put my relatives into start game method?
  }

  bounceTheRelatives() {
    if (
      this.x - this.speed < 0 || // if I change it from 0 to another number
      this.x - this.speed > this.game.canvas.width - this.width // or subtract another number from this side
      // the character animations or positions have an issue and characters got stuck on left side of the boundary
    ) {
      this.speed = -this.speed;
    }
  }
}

// Sprites: Curt, cjc83486 http://opengameart.org/content/rpg-character-bases-assets
