class MainMenu extends Phaser.Scene {
  constructor()  {
    super({ key: 'mainmenu' });

    window.GAME = this;
  }

  preload() {
<<<<<<< HEAD
=======
    this.load.image('mainmenu-background', 'assets/mainmenu/background.jpg');
>>>>>>> 66132c180933baee12a42dd5fc95bc571cd6cfd6
    this.load.css('80s', 'assets/mainmenu/css/index.css');
    this.load.image('space2', 'assets/mainmenu/space2.jpg');
  }

  create() {
<<<<<<< HEAD
      const playButton = document.createElement('input');
=======
    const background = this.add.image(400, 300, 'mainmenu-background');
    background.displayWidth = window.GAME.game.config.width;
    background.displayHeight = window.GAME.game.config.height;

    const playButton = document.createElement('input');
>>>>>>> 66132c180933baee12a42dd5fc95bc571cd6cfd6
    playButton.className = 'play';
    playButton.type = 'button';
    playButton.value = 'PLAY';
    playButton.onclick = () => window.GAME.scene.start('levels');
    this.add.dom(400, 500, playButton).setInteractive();

    const background = this.add.image(400, 300, 'space2');
  }
}
