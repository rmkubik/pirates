import Phaser from 'phaser';

import config from './config';
import LoadScene from './scenes/load';
import MainScene from './scenes/main';

class Game {
  constructor(parent) {
    this.game = new Phaser.Game({
      scene: [LoadScene, MainScene],
      parent,
      ...config,
    });
  }
}

export default Game;
