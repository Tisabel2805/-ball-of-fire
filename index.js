var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity:{y: 300},
      debug:false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var pelota;
var cilindro;

function preload() {
this.load.image("pelota","assets/pelota.png");
  this.load.image("cilindro","assets/cilindro.png");
  {frameWidth: 32, frameHeight: 48 }
}

function create() {

   cilindro(this);

createPlayer(this);

createAnimations(this);

    cursors = this.input.keyboard.createCursorKeys();
