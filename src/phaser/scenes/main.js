import Phaser from 'phaser';

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }

  preload() {

  }

  create() {
    const ship = this.add.sprite(300, 300, 'ships', 'ship (4).png');
  }
}

export default MainScene;
