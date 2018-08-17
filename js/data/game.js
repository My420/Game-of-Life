import Grid from './grid.js';
import view from '../view/game-view.js';

export default class Game {
  constructor(gridSize, random) {
    this.grid = new Grid(gridSize, random);
  }

  oneStep() {
    this.grid.mutate();
    this.changeView();
  }

  play() {
  setInterval(() => {
    this.grid.mutate();
    this.changeView();
    }, 400);
  }

  changeCellStatus(row, col) {
    this.grid.changeCell(row, col);
    this.changeView();
  }

  changeView() {
    view.render(this.grid.cells);
  }
};
