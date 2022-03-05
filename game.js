const heart = new Image();
heart.src = './images/lives/heart.png';

const relativeHitSound = new Audio('./audio/hit.wav');

const winSound = new Audio('./audio/win.wav');

const loseSound = new Audio('./audio/lose.wav');

const backgroundMusic = new Audio('./audio/jazzcrash.wav');

const coinCollectSound = new Audio('./audio/coin.wav');

class Game {
  constructor(canvasElement, screenElements) {
    this.canvas = canvasElement;
    this.context = canvasElement.getContext('2d');

    this.player = new Player(this);
    this.relatives = [];
    this.tilemap = new Tilemap(this);
    this.idletilemap = new IdleTilemap(this);
    this.decoration = new Decoration(this);
    this.topdecoration = new TopDecoration(this);
    this.coin = new Coin(this);

    this.screen = screenElements;
    this.gameRunning = false;

    this.isCollected = false;
    this.coinSound = false;

    this.enableKeyControls();
  }

  coinSoundPlayOnce() {
    if (!this.coinSound) {
      this.coinSound = true;
      coinCollectSound.play();
    }
  }

  startGame() {
    this.gameRunning = true;
    this.coinSound = false;
    this.isCollected = false;
    this.coin.setRandomPosition();
    this.relatives = [];
    this.player.x = (this.canvas.width - this.player.width) / 2; // start line
    this.player.y = this.canvas.height - this.player.height; // start line
    this.generateRelatives();
    this.live = 3;
    this.animationLoop();
  }

  loseGame() {
    this.gameRunning = false;
    backgroundMusic.pause();
    this.screen.running.style.display = 'none';
    this.screen.lose.style.display = '';
    loseSound.play();
  }

  winGame() {
    this.gameRunning = false;
    backgroundMusic.pause();
    this.screen.running.style.display = 'none';
    this.screen.win.style.display = '';
    winSound.play();
  }

  enableKeyControls() {
    window.addEventListener('keydown', (event) => {
      const key = event.key;
      switch (key) {
        case 'ArrowUp':
          this.player.y -= 10;
          this.player.frame++; //so that it animates only on key press
          break;
        case 'ArrowDown':
          this.player.y += 10;
          this.player.frame++;
          break;
        case 'ArrowRight':
          this.player.x += 10;
          this.player.frame++;
          break;
        case 'ArrowLeft':
          this.player.x -= 10;
          this.player.frame++;
          break;
      }
    });
  }

  calculateYCoordinate() {
    const yCoordinates = [];
    for (let i = 0; i < 9; i++) {
      yCoordinates.push(75 + i * 50); //75 is the initial start point. 9 is the number of rows. 50 is the height of rows
    }
    return yCoordinates;
  }

  generateRelativeSpeed() {
    let sign = Math.random() - 0.5;
    if (sign < 0) {
      const speed = -1 * Math.floor(Math.random() * (3 - 1.5 + 1) + 1.5);
      return speed;
    } else {
      const speed = Math.floor(Math.random() * (3 - 1.5 + 1) + 1.5);
      return speed;
    }
  }

  generateRelatives() {
    const yCoordinates = this.calculateYCoordinate();

    yCoordinates.forEach((relativeY) => {
      const relativeX = Math.random() * (this.canvas.width - 60); // 60 is random
      const speed = this.generateRelativeSpeed();
      const relative = new Relative(this, relativeX, relativeY, speed);
      this.relatives.push(relative);
    });
    this.relatives.forEach((rel, ind) => {
      //console.log(`Assigning ${ind} which is ${imagesOfRelatives[ind].src}`);
      rel.image = imagesOfRelatives[ind % imagesOfRelatives.length];
    });
  }

  animationLoop() {
    window.requestAnimationFrame(() => {
      this.runLogic();
      this.draw();
      if (this.gameRunning === true) {
        this.animationLoop();
      }
    });
    backgroundMusic.play();
  }

  runLogic() {
    if (this.live < 1) {
      this.loseGame();
    }

    if (this.isCollected) {
      if (this.player.checkFinish()) {
        this.winGame();
      }
    }
    for (const relative of this.relatives) {
      // for every relative run move, bounce and intersection methods
      relative.moveLogic();
      relative.bounceTheRelatives();

      // if there is intersection with any relative,
      // send the player back to start line:
      const areIntersecting = relative.checkIntersection(this.player);
      if (areIntersecting) {
        this.player.y = this.canvas.height - this.player.height; //start line
        this.player.x = (this.canvas.width - this.player.width) / 2; // start line
        relativeHitSound.play();
        this.live -= 1;
      }
    }

    const coinIntersection = this.coin.checkIntersection(this.player);
    if (coinIntersection) {
      this.isCollected = true;
      this.coinSoundPlayOnce();
    }

    this.player.boundPlayer(); // for player run bound method to keep player in the canvas
  }

  drawLives() {
    for (let i = 0; i < this.live; i++) {
      contexttop.drawImage(
        heart,
        this.canvas.width - 80 - i * 60,
        20,
        100,
        100
      );
    }
  }

  draw() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.topdecoration.drawGroundTop();
    this.topdecoration.drawTreeTop();
    this.topdecoration.drawGroundRight();
    this.topdecoration.drawTreeRight();
    this.topdecoration.drawGroundLeft();
    this.topdecoration.drawTreeLeft();
    this.tilemap.draw();
    this.idletilemap.drawUp();
    this.idletilemap.drawDown();
    this.decoration.draw();
    if (!this.isCollected) {
      this.coin.draw();
    }
    this.player.draw();
    for (const relative of this.relatives) {
      relative.draw();
    }
    this.drawLives();
  }
}