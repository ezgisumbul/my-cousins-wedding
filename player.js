// // these will be moved into classes later:
// let sizeRelative = 50;
// let sizePlayer = 50;

// // the values inside these should be assigned to this.x and this.y in player and relative classes
// let relativeX = canvasElement.width - sizeRelative;
// let relativeY = canvasElement.height / 2;
// let playerX = (canvasElement.width - sizePlayer) / 2;
// let playerY = canvasElement.height - sizePlayer; //bottom of the page
// let dx = -2; // birim zamandaki yer degistirme = displacement in unit time i.e. speed
// let dy = 0;
// let dxPlayer = 0;
// let dyPlayer = -10;

class Player {
  constructor(gameInstance) {
    this.x = 100;
    this.y = 200;
    this.game = gameInstance;
    this.width = 50;
    this.height = 50;
  }

  draw() {
    this.game.context.save();
    this.game.context.fillStyle = 'lightgreen';
    this.game.context.fillRect(this.x, this.y, this.width, this.height);
    //     //playerY += dyPlayer; // bu gercekten de minik minik ilerletiyo playeri
    this.game.context.restore();
  }

  moveLogic() {
    // after implementing the keyboardControls method, remove this. this is just for trial:
    //this.y -= 10;
  }
}

//~player.keyboardControls();
//player.playerPassTopBoundry();

//   keyboardControls() {
//     // bir sebeple dy exponantial degisiyo gibi oluyo. birer birer degismiyo player position
//     window.addEventListener('keydown', (event) => {
//       switch (event.key) {
//         case 'ArrowUp':
//           playerY += dyPlayer;

//           if (playerY < 0) {
//             playerY = 0;
//           }
//           break;
//         case 'ArrowDown':
//           playerY -= dyPlayer;
//           if (playerY + sizePlayer > canvasElement.height) {
//             playerY = canvasElement.height - sizePlayer;
//           }
//           break;
//       }
//     });
//   }

// player successfully reaches to bride and groom:
//   playerPassTopBoundry() {
//     if (
//       playerY + dyPlayer + sizePlayer / 2 <
//       0 // vucudunun yarisi gecince kabul ediyorum basarili olarak
//     ) {
//       console.log('success'); // bu arada burada normalde oyunu bitirmem lazim cunku setInterval yuzunden surekli success logluyor.
//       //dyPlayer = -dyPlayer;
//     } else if (playerY + dyPlayer + sizePlayer > canvasElement.height) {
//       dy = -dy; // bu ise yaramadi. player positioni hep belli bi aralikta tanimlayabilirim.
//       //ya da oraya ulasinca hep burda ciz tekrarli olarak unless iste yeniden yukari gitmeye calisirsa diyebilirim.
//     }
//   }
