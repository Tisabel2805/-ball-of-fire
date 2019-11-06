const config = {
  backgroundColor: '#435DE4',
  dom: {
    createContainer: true
  },
  height: 600,
  parent: 'container',
  physics: {
    default: 'arcade'
  },
  scene: [MainMenu, Game];
  type: Phaser.AUTO,
  width: 800
};

new Phaser.Game(config);
