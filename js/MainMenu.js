class MainMenu extends Phaser.Scene {
  constructor()  {
    super({ key: 'mainmenu' });

    window.GAME = this;
  }

  preload() {
    this.load.css('80s', 'assets/mainmenu/css/index.css');
    this.load.image('space2', 'assets/mainmenu/space2.jpg');
  }

  create() {
      const playButton = document.createElement('input');
    playButton.className = 'play';
    playButton.type = 'button';
    playButton.value = 'PLAY';
    playButton.onclick = () => window.GAME.scene.start('levels');
    this.add.dom(400, 500, playButton).setInteractive();

    const background = this.add.image(400, 300, 'space2');
  }
}
