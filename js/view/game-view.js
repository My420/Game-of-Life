
 export default class GameView {
  constructor() {
    this.cell = document.createElement(`div`);
    this.cell.className = `field__cell`;
  }

  render(size) {
    const gameField = document.querySelector(`.field`);
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < size * size; i++ ) {
      fragment.appendChild(this.cell.cloneNode(true));
    }
    gameField.appendChild(fragment);
  }
};


