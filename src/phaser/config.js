
import Phaser from 'phaser';

export default {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'matter',
    matter: {
      gravity: {
        y: 0,
      },
      debug: true,
      debugBodyColor: 0xff0000
    }
  },
  pixelArt: true,
  backgroundColor: '#000000',
};
