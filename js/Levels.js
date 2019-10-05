class Levels extends Phaser.Scene {
  constructor()  {
    super({ key: 'levels' });
  }

  preload() {
    this.load.image('levels-background', 'assets/levels/levels.png');
  }

  create() {
    const background = this.add.image(400, 300, 'levels-background');
    background.displayWidth = this.game.config.width;
    background.displayHeight = this.game.config.height;
  }
}
