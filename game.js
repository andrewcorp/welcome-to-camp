import readline from "readline";
import {print, error} from "./helpers";
import inputs from "./data/inputs";

class Game {

  questionInterface = readline.createInterface({
    input: process.stdin,
    output: process.stderr
  });
  
  new(){
    this.start();
    print(`
    *-----------------------*
    |                       |
    |     W E L C O M E     |
    |          T O          |
    |        C A M P        |
    |                       |
    *-----------------------*

    Type 'H' for help.
    
    Don't die.
    `);
    this.render();
  }

  render() {
    const question = `Choose action: `;
    this.questionInterface.question(question, answer => {
      this.questionInterface.pause();
      this.handleInput(answer);
      this.questionInterface.resume();
      this.render();
    });
  }

  handleInput(input) {
    const normalisedInput = input.trim().toLowerCase();
    const mappedInput = inputs[normalisedInput];
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
