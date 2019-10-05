class MainMenu extends Phaser.Scene {
  constructor()  {
    super({ key: 'mainmenu' });

    window.GAME = this;
  }

  preload() {
    this.load.image('mainmenu-background', 'assets/mainmenu/background.png');
    this.load.css('80s', 'assets/mainmenu/css/index.css');
  }

  create() {
    const background = this.add.image(400, 300, 'mainmenu-background');
    background.displayWidth = this.game.config.width;
    background.displayHeight = this.game.config.height;

    const playButton = document.createElement('input');
    playButton.className = 'play';
    playButton.type = 'button';
    playButton.value = 'PLAY';
    playButton.onclick = () => window.GAME.scene.start('levels');
    this.add.dom(400, 500, playButton).setInteractive();
  }
}
