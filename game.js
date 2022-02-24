class Game {
  constructor(canvasElement) {
    this.canvas = canvasElement; // don't know the reason. let's see if I access it at any point
    this.context = canvasElement.getContext('2d');
    this.player = new Player(this);
    this.lanes = [];

    this.relatives = [];
    this.enableKeyControls(); //why do we call it when we initialise the game. can't we call it when we are drawing the game?

    //this.generateLane();
    this.generateRelative();
    //console.log(this.lanes);
    //console.log(this.relatives);
    // if I decide to have certain number of enemies and certain psoition and speed at all times, the following is the way to do.
    // if I generate enemies, then I delete these:
    // this.relatives = [
    //   new Relative(this, 300, 300, 1),
    //   new Relative(this, 200, 200, 5)
    // ];
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

  //   generateRelative() {
  //     const speed = Math.random() + 1; // the speed will vary between 0 and 1+1=2
  //     // const relativeY =
  //     //   Math.random() * (this.canvas.height - this.relatives.height); // this doesn't work but
  //     const relativeY = Math.random() * (this.canvas.height - 50); // this does
  //     const relativeX = this.canvas.width - 50;
  //     const relative = new Relative(this, relativeX, relativeY, speed);
  //     this.relatives.push(relative);
  //   }

  generateRelative() {
    // the speed will vary between 0 and 1+1=2
    const relativeX = this.canvas.width - 50;
    // const relativeY =
    //   Math.random() * (this.canvas.height - this.relatives.height); // this doesn't work but
    //const relativeY = Math.random() * (this.canvas.height - 50); // this does
    const yCoordinates = this.calculateYCoordinate();

    yCoordinates.forEach((relativeY) => {
      const speed = Math.random() + 5;
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
    //this.relative.moveLogic();
    // if (Math.random() < 0.01) {
    //   this.generateRelative();
    // }

    for (const relative of this.relatives) {
      relative.moveLogic();
      relative.bounceTheRelatives();
    }

    this.player.moveLogic();
  }

  draw() {
    //this.context.clearRect(0, 0, 900, 600); // this works but

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); // this does not. why? (it works now because I moved it inside the class)
    this.player.draw(); // bu mantikli mi?
    //~player.keyboardControls();
    //player.playerPassTopBoundry();
    //~relative.bounceTheRelatives(); // may call this in a method to draw all enemies and call here that method instead
    //this.relative.draw();
    for (const relative of this.relatives) {
      relative.draw();
    }

  }
}
