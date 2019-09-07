const config = {
  height: 600,
  scene: {
    preload: preload,
    create: create
  },
  type: Phaser.AUTO,
  width: 800
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image('sky', 'assets/sky.jpg');
}

function create() {
  const sky = this.add.image(400, 300, 'sky');
  sky.displayHeight = game.config.height;
  sky.displayWidth = game.config.width;
}
