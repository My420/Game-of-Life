import Grid from './grid.js';
import GameView from '../view/game-view.js';

export default class Game {
  constructor(gridSize, random) {
    this.grid = new Grid(gridSize, random);
  }

  oneStep() {
    this.grid.mutate();
    const view = new GameView();
    view.render(this.grid.cells);
  }

  play() {
  setInterval(() => {
    this.grid.mutate();
    const view = new GameView();
    view.render(this.grid.cells);
    }, 400);
  }

};
