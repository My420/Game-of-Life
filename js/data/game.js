import Grid from './grid.js';
import view from '../view/game-view.js';

export default class Game {
  constructor(gridSize, speed, random) {
    this.grid = new Grid(gridSize, random);
    this.gridSize = gridSize;
    this._timerId = undefined;
    this._speed = speed;
    this._currentSpeed = this._speed;
  }

  oneStep() {
    this.grid.mutate();
    this.changeView();
  }

  play() {
  this._timerId = setInterval(() => {
    this.grid.mutate();
    this.changeView();
    }, this._currentSpeed);
  }

  changeCellStatus(row, col) {
    this.grid.changeCell(row, col);
    this.changeView();
  }

  stop() {
    if (this._timerId) {
      clearInterval(this._timerId);
    }
  }

  resetSpeed() {
    this._currentSpeed = this._speed;
  }

  clear() {
    this.resetSpeed();
    this.stop();
    this.grid = new Grid(this.gridSize, false);
    this.changeView();
    view.changeSpeed(this._currentSpeed);
  }

  random() {
    this.stop();
    this.grid = new Grid(this.gridSize, true);
    this.changeView();
  }

  _speedUp() {
    if(this._currentSpeed != 100) {
      this._currentSpeed -= 100;
    };
  }

  _speedDown() {
    if(this._currentSpeed != 1000) {
      this._currentSpeed += 100;
    };
  }

  changeSpeed(direction) {
      this.stop()
      if(direction === `up`) {
        this._speedUp();
      } else if(direction === `down`) {
        this._speedDown();
      };
      view.changeSpeed(this._currentSpeed);
      this.play();
  }

  changeView() {
    view.render(this.grid.cells);
  }
};
