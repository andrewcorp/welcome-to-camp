import readline from "readline";
import {print, error} from "./lib/helpers";
import inputMap from "./data/input_map";
import Room from "./classes/room";
import Player from "./classes/player";

const lines = [
  '*-----------------------*',
  '|                       |',
  '|     W E L C O M E     |',
  '|          T O          |',
  '|        C A M P        |',
  '|                       |',
  '*-----------------------*',
  '\n',
  'You\'ve just arrived at camp. Don\'t die.',
  '\n',
];

class Game {

  questionInterface = readline.createInterface({
    input: process.stdin,
    output: process.stderr
  });

  room = null
  
  new(room){
    this.start();
    lines.forEach(l => {
      print(l);
    })
    this.player = new Player();
    this.room = new Room(room, this.player);
    this.render();
  }

  render() {
    const question = `\nChoose action (press 'h' for help): `;
    this.questionInterface.question(question, answer => {
      this.questionInterface.pause();
      this.handleInput(answer);
      this.questionInterface.resume();
      this.render();
    });
  }

  handleInput(input) {
    const normalisedInput = input.trim().toLowerCase();
    const mappedInput = inputMap(this)[normalisedInput];
    if (typeof mappedInput == 'function')  {
      print(mappedInput());
      this.questionInterface.resume();
    } else {
      error("Sorry, I don't recognise that command.");
    }
  }

  start(){
    this.isPlaying = true;
  }
  end(){
    this.isPlaying = false;
  }
}

// Export singleton
export default new Game();
