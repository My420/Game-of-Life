import game from './data/data.js';
import GameView from './view/game-view.js';
import GameController from './controller/game-controller.js';


const view = new GameView();
const controller = new GameController();
view.render(game.grid.cells);
controller.init();

/*setInterval(() => {
   game.nextStep();

}, 5000);*/
