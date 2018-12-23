import Game from './phaser/game';

const gameEl = document.querySelector('#game');
const game = new Game('game');


/**
* Enable Parcel hot loading
*/
if (module.hot) {
  module.hot.accept(() => {
    while (gameEl.firstChild) {
      gameEl.removeChild(gameEl.firstChild);
    }
    game.game.boot();
  });
}
