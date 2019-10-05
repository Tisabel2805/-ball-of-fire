class MainMenu extends Phaser.Scene {
  constructor()  {
    super({ key: 'levels' });
  }

  preload() {
    this.load.image('background', 'assets/levels/levels.jpg');
  }

  create() {
    const background = this.add.image(400, 300, 'levels');
    background.displayWidth = this.game.config.width;
    background.displayHeight = this.game.config.height;
  }
}
