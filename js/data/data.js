import Game from './game.js';

class Settings {
  constructor() {
    this._field = document.querySelector(`.page_main`);
    this.size = 20;
    this.speed = 400;
    this.random = true;
  }

  calcSize() {
    let width = getComputedStyle(this._field).width;
    width = +width.slice(0, 3);
    if (width < 640) {
      this.size = 20;
    } else if (width < 920) {
      this.size = 32;
    } else {
      this.size = 40;
    }
  }
}

const setting = new Settings();
setting.calcSize();
const game = new Game(setting.size, setting.speed, setting.random);

export default game;
