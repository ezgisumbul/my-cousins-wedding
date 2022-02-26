class Game {
  constructor(canvasElement, screenElements) {
    this.canvas = canvasElement; // don't know the reason. let's see if I access it at any point
    this.context = canvasElement.getContext('2d');
    this.player = new Player(this);
    this.relatives = [];
    this.screen = screenElements;
    //this.lanes = [];

    this.enableKeyControls(); //why do we call it when we initialise the game. can't we call it when we are drawing the game?
    this.generateRelative();
  }

  startGame() {
    this.live = 3;
    this.animationLoop();
  }

  loseGame() {
    // stop the animation loop
    this.screen.running.style.display = 'none';
    this.screen.lose.style.display = 'block';
    // hide the running screen
  }

  winGame() {
    this.screen.running.style.display = 'none';
    this.screen.win.style.display = 'block';
  }
  enableKeyControls() {
    window.addEventListener('keydown', (event) => {
      const key = event.key;
      switch (key) {
        case 'ArrowUp':
          this.player.y -= 10;
          break;
        case 'ArrowDown':
          this.player.y += 10;
          break;
        case 'ArrowRight':
          this.player.x += 10;
          break;
        case 'ArrowLeft':
          this.player.x -= 10;
          break;
      }
    });
  }
  //can't move this as a method of lane. If I do, I can't reference it inside generateLane
  calculateYCoordinate() {
    const yCoordinates = [];
    for (let i = 0; i < 9; i++) {
      yCoordinates.push(75 + i * 50); //75 is the initial start point. 9 is the number of rows. 50 is the height of rows
    }
    return yCoordinates;
    //console.log(yCoordinates);
  }

  generateRelative() {
    const relativeX = this.canvas.width - 50; // replace 50 with relative width

    const yCoordinates = this.calculateYCoordinate();

    yCoordinates.forEach((relativeY) => {
      const speed = Math.random() + 1; // the speed will vary between 0 and 1+1=2
      const relative = new Relative(this, relativeX, relativeY, speed);
      this.relatives.push(relative);
    });
  }

  animationLoop() {
    window.requestAnimationFrame(() => {
      this.runLogic();
      this.draw();
      this.animationLoop();
    });
  }

  runLogic() {
    if (this.live < 1) {
      this.loseGame();
    }

    if (this.player.y < 75 - this.player.height) {
      this.winGame();
    }
    for (const relative of this.relatives) {
      // for every relative run move, bounce and intersection methods
      relative.moveLogic();
      relative.bounceTheRelatives();

      // if there is intersection with any relative,
      // send the player back to start line:
      const areIntersecting = relative.checkIntersection(this.player);
      if (areIntersecting) {
        console.log('they areIntersecting');
        this.player.y = this.canvas.height - this.player.height;
        this.live -= 1;
      }
    }

    const isFinished = this.player.checkFinish(); // for player run check Finish method to check for success
    if (isFinished) {
      console.log('success');
    }

    this.player.boundPlayer(); // for player run bound method to keep player in the canvas

    // this doesn't work when checkIntersection is a method of player because relatives is an array,
    // I couldn't find a way to make it work. But it works when checkIntersection is a method of relatives
    // this.player.moveLogic();
    // for (const relative of this.relatives) {
    //   const areIntersecting = this.player.checkIntersection(relative);
    //   if (areIntersecting) {
    //     console.log('they areIntersecting');
    //   }
    // }
  }

  drawFinishandStartLine() {
    this.context.save();

    this.context.beginPath();
    this.context.moveTo(0, 74);
    this.context.lineTo(this.canvas.width, 74);
    this.context.moveTo(0, this.canvas.height - 74);
    this.context.lineTo(this.canvas.width, this.canvas.height - 74);
    this.context.closePath();
    this.context.strokeStyle = '#B4A7D6';
    this.context.stroke();

    this.context.restore();
  }

  drawLivesCount() {
    this.context.save();
    this.context.font = '40px red monospace';
    this.context.fillStyle = 'green';
    this.context.fillText(this.live, this.canvas.width - 40, 50);

    // switch (true) {
    //   case (this.live = 3):
    //     this.context.fillRect(this.canvas.width - 40, 20, 20, 20);
    //     this.context.fillRect(this.canvas.width - 80, 20, 20, 20);
    //     this.context.fillRect(this.canvas.width - 120, 20, 20, 20);
    //     break;
    //   case (this.live = 2):
    //     this.context.fillRect(this.canvas.width - 40, 20, 20, 20);
    //     this.context.fillRect(this.canvas.width - 80, 20, 20, 20);
    //     break;
    //   case (this.live = 1):
    //     this.context.fillRect(this.canvas.width - 40, 20, 20, 20);
    //     break;
    // }

    this.context.restore();
  }

  draw() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawFinishandStartLine();
    this.player.draw();
    for (const relative of this.relatives) {
      relative.draw();
    }
    this.drawLivesCount();
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
