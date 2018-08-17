import game from '../data/data.js';

class GameController {
  constructor() {
    this.gameField = document.querySelector(`.field`);
    this.nextStepButton = document.querySelector(`.controls__button--nextStep`);
    this.playButton = document.querySelector(`.controls__button--play`);
  }

  _findCellNumber(evt) {
   return [+evt.target.dataset.row, +evt.target.dataset.col];
  }

  init() {
    this.nextStepButton.addEventListener('click', ()=>{game.oneStep()});
    this.playButton.addEventListener('click', ()=>{game.play()});
    this.gameField.addEventListener('click', (evt)=>{game.changeCellStatus(...this._findCellNumber(evt))});
    game.changeView();
  }
};

const controller = new GameController();

export default controller;
