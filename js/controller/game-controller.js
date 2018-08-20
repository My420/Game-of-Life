import game from '../data/data.js';

class GameController {
  constructor() {
    this.gameField = document.querySelector(`.field`);
    this.gameControls = document.querySelector(`.controls`);
    this.wikiLink = document.querySelector(`.page_header__link`);
    this._link = `https://ru.wikipedia.org/wiki/%D0%98%D0%B3%D1%80%D0%B0_%C2%AB%D0%96%D0%B8%D0%B7%D0%BD%D1%8C%C2%BB`;
    this.nextStepButton = document.querySelector(`.controls__button[data-action=oneStep]`);
    this.playButton = document.querySelector(`.controls__button[data-action=start]`);
    this.speedUpButton = document.querySelector(`.controls__button[data-action=speedUp]`);
    this.speedDownButton = document.querySelector(`.controls__button[data-action=speedDown]`);
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

  _onButtonClick(button) {
   switch (button) {
      case `start`:
        game.play();
        this._setFirstOptionList();
        break;
      case `oneStep`:
        game.oneStep();
        break;
      case `pause`:
        game.stop();
        this._setSecondOptionList();
        break;
      case `reset`:
        game.clear();
        this._setSecondOptionList();
        break;
      case `random`:
        game.random();
        this._setSecondOptionList();
        break;
      case `speedUp`:
        game.changeSpeed(`up`);
        break;
      case `speedDown`:
        game.changeSpeed(`down`);
        break;
    };
  }

  init() {
    this.gameControls.addEventListener(`click`, (evt) => {if(evt.target.dataset.action){this._onButtonClick(evt.target.dataset.action)}});
    this.gameField.addEventListener('click', (evt)=> {game.changeCellStatus(...this._findCellNumber(evt))});
    this.wikiLink.addEventListener('click', (evt) => {evt.preventDefault(); window.open(this._link)});
    game.changeView();
  }
};

const controller = new GameController();

export default controller;
