class GameView {
  constructor() {
    this._cell = document.createElement(`div`);
    this.gameField = document.querySelector(`.field`);
    this.speedField = document.querySelector(`.controls__output`);
  }

  createCell(row, col, isAlive) {
    let newCell = this._cell.cloneNode(true);
    newCell.setAttribute(`data-row`, `${row}`);
    newCell.setAttribute(`data-col`, `${col}`);
    if (isAlive) {
      newCell.className = `field__cell field__cell--alive`;
    } else {
      newCell.className = `field__cell`;
    }
    return newCell;
  }

  changeSpeed(speed) {
    this.speedField.innerHTML = `${speed}ms`;
  }

  render(grid) {
    this.gameField.innerHTML = ``;
    const fragment = document.createDocumentFragment();

    for (let r = 0; r < grid.length; r++ ) {
      for (let c = 0; c < grid.length; c++ ) {
        fragment.appendChild(this.createCell(r, c, grid[r][c]._alive));
      }
    }
    this.gameField.appendChild(fragment);
  }
}

const view = new GameView();

export default view;
