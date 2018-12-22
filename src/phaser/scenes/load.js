import Phaser from 'phaser';

class LoadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'load' });
  }

  preload() {

  }

  create() {
    this.scene.start('main');
  }
}

export default LoadScene;
