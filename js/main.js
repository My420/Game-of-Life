import Game from './data/game.js';
import GameView from './view/game-view.js';

const size = 20;

const game = new Game(size);
const view = new GameView;

view.render(size);

console.log(game.grid.cells);

export default game;
