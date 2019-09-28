class MainMenu extends Phaser.Scene {
  constructor()  {
    super({ key: 'mainmenu' });
  }

  preload() {
    this.load.image('background', 'assets/mainmenu/background.png');
  }

  create() {
    const background = this.add.image(400, 300, 'background');
    background.displayWidth = this.game.config.width;
    background.displayHeight = this.game.config.height;
  }
}
