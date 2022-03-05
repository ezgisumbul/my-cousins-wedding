const heart = new Image();
heart.src = './images/lives/heart.png';

const relativeHitSound = new Audio('./audio/Hit4.wav');

const winSound = new Audio('./audio/round_end.wav');

const loseSound = new Audio('./audio/total fail.wav');

const backgroundMusic = new Audio('./audio/jazzcrash.wav');

const coinCollectSound = new Audio('./audio/Coin3.wav');

class Game {
  constructor(canvasElement, screenElements) {
    this.canvas = canvasElement;
    this.context = canvasElement.getContext('2d');
    this.player = new Player(this);
    this.relatives = [];
    this.tilemap = new Tilemap(this);
    this.idletilemap = new IdleTilemap(this);
    this.decoration = new Decoration(this);
    this.coin = new Coin(this);
    this.screen = screenElements;
    this.gameRunning = false;
    this.isCollected = false;
    this.coinSound = false;

    this.enableKeyControls(); //why do we call it when we initialise the game. can't we call it when we are drawing the game?
  }


  coinSoundPlayOnce() {
    if (!this.coinSound) {
      this.coinSound = true;
      coinCollectSound.play();
    }
  }

  startGame() {
    this.gameRunning = true;
    this.coin.setRandomPosition();
    this.relatives = [];
    this.player.x = (this.canvas.width - this.player.width) / 2; // start line
    this.player.y = this.canvas.height - this.player.height; // start line
    this.generateRelatives();
    console.log(this.relatives);
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
  //can't move this as a method of relative. If I do, I can't reference it inside generateRelative
  calculateYCoordinate() {
    const yCoordinates = [];
    for (let i = 0; i < 9; i++) {
      yCoordinates.push(75 + i * 50); //75 is the initial start point. 9 is the number of rows. 50 is the height of rows
    }
    return yCoordinates;
    //console.log(yCoordinates);
  }

  generateRelativeSpeed() {
    let sign = Math.random() - 0.5;
    if (sign < 0) {
      const speed = -1 * Math.floor(Math.random() * (3 - 1.5 + 1) + 1.5); // the speed will vary between 0 and 1+1=2
      return speed;
    } else {
      const speed = Math.floor(Math.random() * (3 - 1.5 + 1) + 1.5); // the speed will vary between 0 and 1+1=2
      return speed;
    }
  }

  generateRelatives() {
    const yCoordinates = this.calculateYCoordinate();

    yCoordinates.forEach((relativeY) => {
      //const relativeX = Math.random() * (this.canvas.width - this.relatives.width); // this doesn't work (is it because I should say for each)
      const relativeX = Math.random() * (this.canvas.width - 55); // but this works
      //   const speed = 4 * (Math.random() - 0.5); // the speed will vary between 0 and 1+1=2
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
      this.context.drawImage(
        heart,
        this.canvas.width - 120 - i * 60,
        0,
        100,
        100
      );
    }
  }

  draw() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // this.drawFinishandStartLine();
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
    //this.drawLivesCount();
    this.drawLives();
  }
}

//OBSOLETE

//   generateLane() {
//     //const laneY = this.calculateYCoordinate();
//     const laneX = this.canvas.width - 50;
//     const yCoordinates = this.calculateYCoordinate();
//     //console.log(yCoordinates);
//     yCoordinates.forEach((laneY) => {
//       const lane = new Lane(this, laneX, laneY);
//       this.lanes.push(lane);
//     });
//   }

//   drawLivesCount() {
//     this.context.save();
//     this.context.font = '40px monospace';
//     this.context.fillStyle = 'green';
//     this.context.fillText(this.live, this.canvas.width - 40, 50);
//     this.context.restore();
//   }

//   drawFinishandStartLine() {
//     this.context.save();

//     this.context.beginPath();
//     this.context.moveTo(0, 74);
//     this.context.lineTo(this.canvas.width, 74);
//     this.context.moveTo(0, this.canvas.height - 74);
//     this.context.lineTo(this.canvas.width, this.canvas.height - 74);
//     this.context.closePath();
//     this.context.strokeStyle = '#B4A7D6';
//     this.context.stroke();

//     this.context.restore();
//   }
