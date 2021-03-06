import Cell from './cell.js';

export default class Grid {
  constructor(gridSize, random) {
    this.size = gridSize;

    this.create(random);
  }

  create(random = false) {
    this.cells = new Array(this.size);

    for (let r = 0; r < this.size; r++ ) {
      this.cells[r] = new Array(this.size);
      for (let c = 0; c < this.size; c++ ) {
        if (random) {
          if (Math.random() < 0.4) {
            this.cells[r][c] = new Cell(r, c, true);
          } else {
            this.cells[r][c] = new Cell(r, c, false);
          }
        } else {
          this.cells[r][c] = new Cell(r, c, false);
        }
      }
    }
  }

  _isNeigborAlive(row, col) {
    if (row === -1) {
      row = this.size - 1;
    } else if (row === this.size) {
      row = 0;
    }

    if (col === -1) {
      col = this.size - 1;
    } else if (col === this.size) {
      col = 0;
    }
    return this.cells[row][col].isAlive;
  }

  _countNeighbor(cell) {
    const row = cell.row;
    const col = cell.col;
    let neighbor = 0;
    if (this._isNeigborAlive(row-1, col-1)) { neighbor++}; //1    1 2 3
    if (this._isNeigborAlive(row-1, col)) { neighbor++};   //2    4 c 5
    if (this._isNeigborAlive(row-1, col+1)) { neighbor++}; //3    6 7 8
    if (this._isNeigborAlive(row, col-1)) { neighbor++};   //4
    if (this._isNeigborAlive(row, col+1)) { neighbor++};   //5
    if (this._isNeigborAlive(row+1, col-1)) { neighbor++}; //6
    if (this._isNeigborAlive(row+1, col)) { neighbor++};   //7
    if (this._isNeigborAlive(row+1, col+1)) { neighbor++}; //8

    return neighbor;
  }

  mutate() {
    let newGrid = new Grid(this.size);

    for (let r = 0; r < this.size; r++ ) {
      for (let c = 0; c < this.size; c++ ) {
        let cell = this.cells[r][c];
        let newCell = newGrid.cells[r][c];
        let neighbor = this._countNeighbor(cell);

        if (cell.isAlive) {
          if (neighbor < 2) {
            newCell.die();
          } else if (neighbor > 3) {
            newCell.die();
          } else {
            newCell.live();
          }
        } else {
          if (neighbor === 3) {
            newCell.live();
          } else {
            newCell.die();
          }
        }
      }
    }
    this.cells = newGrid.cells;
  }

  changeCell(row, col) {
    const cell = this.cells[row][col];
    if (cell.isAlive) {
      cell.die();
    } else {
      cell.live();
    }
  }
}
