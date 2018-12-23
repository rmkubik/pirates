import Phaser from 'phaser';

import shipsSheet from '../../../assets/spritesheets/shipsMiscellaneous_sheet@2.png';
import shipsXml from '../../../assets/spritesheets/shipsMiscellaneous_sheet@2.xml';
import tilesSheet from '../../../assets/spritesheets/tiles_sheet@2.png';
class LoadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'load' });
  }

  preload() {
    this.load.spritesheet('tiles', tilesSheet, {
      frameWidth: 128,
      frameHeight: 128,
      spacing: 0,
      margin: 0,
    });

    this.load.atlasXML('ships', shipsSheet, shipsXml);
  }

  create() {
    this.scene.start('main');
  }
}

export default LoadScene;
