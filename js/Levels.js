class Levels extends Phaser.Scene {
  constructor()  {
    super({ key: 'levels' });
  }

  preload() {
    ;
    this.load.image('space2', 'assets/levels/space2.jpg');

  }

  create() {
    const background = this.add.image(400, 300, 'levels-background');
    background.displayWidth = this.game.config.width;
    background.displayHeight = this.game.config.height;


    const space2 = this.add.image(475,430,'space2');

    }
  }
