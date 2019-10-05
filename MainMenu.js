class MainMenu extends Phaser.Scene {
  constructor()  {
    super({ key:'mainmenu' });
}
preload() {
  this.load.image('INfinite.png', 'assets/mainmenu/INfinite.png');
  this.load.image('levels.png', 'assets/mainmenu/levels.png');
}
create() {
  const backgraund = this.add.image(300, 200, 'control');
  backgraund.displayWidth = this.game.config.widht;
  backgraund.displayHeight = this.game.config.height;

  const play = this.add.image(400, 530, 'play');
  INfinite.setInteractive();
 INfinite.once('pointerup', () => this.scene.start('levels'),this)
}
}
