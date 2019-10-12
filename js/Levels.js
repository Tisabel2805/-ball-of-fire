class Levels extends Phaser.Scene {
  constructor()  {
    super({ key: 'levels' });
  }

  preload() {
    this.load.image('levels-background', 'assets/levels/levels.png');
    this.load.image('comienzo', 'assets/levels/comienzo.png');
    this.load.image('number-one', 'assets/levels/number-one.png');
    this.load.image('number-two', 'assets/levels/number-two.png');
    this.load.image('number-three', 'assets/levels/number-three.png');
  }

  create() {
    const background = this.add.image(400, 300, 'levels-background');
    background.displayWidth = this.game.config.width;
    background.displayHeight = this.game.config.height

    var graphics = this.add.graphics();
    var color = "0xffffff";
    var alpha = 1;

    //primer circulo
    graphics.fillStyle(color, alpha);
    graphics.fillCircle(350, 250, 100);

    }
  }
