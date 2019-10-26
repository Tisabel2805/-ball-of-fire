class Levels extends Phaser.Scene {
  constructor()  {
    super({ key: 'levels' });
  }

  preload() {
  this.load.image('space2', 'assets/levels/space2.jpg');

  }

  create() {
    const space2 = this.add.image(475,430,'space2');

    }
  }
