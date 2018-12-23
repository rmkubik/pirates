import Phaser from 'phaser';

import Map from '../map/map';

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }

  preload() {

  }

  create() {
    const map = new Map({
      scene: this,
      height: 10,
      width: 10,
      tileHeight: 128,
      tileWidth: 128,
    });
    const ship = this.add.sprite(100, 220, 'ships', 'ship (4).png');
  }
}

export default MainScene;
