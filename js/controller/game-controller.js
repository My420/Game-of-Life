import game from '../data/data.js';

class GameController {
  constructor() {
    this._gameField = document.querySelector(`.field`);
    this._gameControls = document.querySelector(`.controls`);
    this._wikiLink = document.querySelector(`.page_header__link`);
    this._link = `https://ru.wikipedia.org/wiki/%D0%98%D0%B3%D1%80%D0%B0_%C2%AB%D0%96%D0%B8%D0%B7%D0%BD%D1%8C%C2%BB`;
    this._nextStepButton = document.querySelector(`.controls__button[data-action=oneStep]`);
    this._playButton = document.querySelector(`.controls__button[data-action=start]`);
    this._speedUpButton = document.querySelector(`.controls__button[data-action=speedUp]`);
    this._speedDownButton = document.querySelector(`.controls__button[data-action=speedDown]`);
  }

  _findCellNumber(evt) {
    return [+evt.target.dataset.row, +evt.target.dataset.col];
  }

  _setFirstOptionList() {
    this._playButton.disabled = true;
    this._nextStepButton.disabled = true;
    this._speedUpButton.disabled = false;
    this._speedDownButton.disabled = false;
  }

  _setSecondOptionList() {
    this._playButton.disabled = false;
    this._nextStepButton.disabled = false;
    this._speedUpButton.disabled = true;
    this._speedDownButton.disabled = true;
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
    }
  }

  init() {
    this._gameControls.addEventListener(`click`, (evt) => { if (evt.target.dataset.action) { this._onButtonClick(evt.target.dataset.action) }});
    this._gameField.addEventListener('click', (evt) => { game.changeCellStatus(...this._findCellNumber(evt)) });
    this._wikiLink.addEventListener('click', (evt) => { evt.preventDefault(); window.open(this._link) });
    game.changeView();
  }
}

const controller = new GameController();

export default controller;
