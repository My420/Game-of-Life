import game from '../data/data.js';

class GameController {
  constructor() {
    this.gameField = document.querySelector(`.field`);
    this.nextStepButton = document.querySelector(`.controls__button--nextStep`);
    this.playButton = document.querySelector(`.controls__button--play`);
    this.clearButton = document.querySelector(`.controls__button--clear`);
    this.stopButton = document.querySelector(`.controls__button--stop`);
    this.randomButton = document.querySelector(`.controls__button--random`);
    this.speedUpButton = document.querySelector(`.controls__button--speedUp`);
    this.speedDownButton = document.querySelector(`.controls__button--speedDown`);
  }

  _findCellNumber(evt) {
   return [+evt.target.dataset.row, +evt.target.dataset.col];
  }

  _setFirstOptionList() {
    this.playButton.disabled = true;
    this.nextStepButton.disabled = true;
    this.speedUpButton.disabled = false;
    this.speedDownButton.disabled = false;
  }

  _setSecondOptionList() {
    this.playButton.disabled = false;
    this.nextStepButton.disabled = false;
    this.speedUpButton.disabled = true;
    this.speedDownButton.disabled = true;
  }

  init() {
    this.nextStepButton.addEventListener('click', ()=>{game.oneStep()});
    this.playButton.addEventListener('click', ()=>{game.play(); this._setFirstOptionList()});
    this.clearButton.addEventListener('click', ()=>{game.clear(); this._setSecondOptionList()});
    this.stopButton.addEventListener('click', ()=>{game.stop(); this._setSecondOptionList()});
    this.randomButton.addEventListener('click', ()=>{game.random(); this._setSecondOptionList()});
    this.gameField.addEventListener('click', (evt)=>{game.changeCellStatus(...this._findCellNumber(evt))});
    this.speedUpButton.addEventListener('click', ()=>{game.changeSpeed(`up`)});
    this.speedDownButton.addEventListener('click', ()=>{game.changeSpeed(`down`)});
    game.changeView();
  }
};

const controller = new GameController();

export default controller;
