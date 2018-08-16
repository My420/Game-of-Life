import game from '../data/data.js';

export default class GameController {
  constructor() {
    this.nextStepButton = document.querySelector(`.controls__button--nextStep`);
    this.playButton = document.querySelector(`.controls__button--play`);
  }

  init() {
    this.nextStepButton.addEventListener('click', ()=>{game.oneStep()});
    this.playButton.addEventListener('click', ()=>{game.play()});
  }
};


