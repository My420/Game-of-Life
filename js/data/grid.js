import Cell from './cell.js';

export default class Grid {
  constructor(gridSize) {
    this.size = gridSize;

    this.create();
  }

  create() {
    this.cells = new Array(this.size);

    for(let r = 0; r < this.size; r++ ){
      this.cells[r] = new Array(this.size);
      for(let c = 0; c < this.size; c++ ){
        this.cells[r][c] = new Cell(r, c);
      };
    };
  }
};
