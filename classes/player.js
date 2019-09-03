import {print} from "../lib/helpers"

export default class Player {
  orientation = "north"

  constructor(){
    this.getOrientation = this.getOrientation.bind(this);
    this.setOrientation = this.setOrientation.bind(this);
    this.turn = this.turn.bind(this);
    this.turnLeft = this.turnLeft.bind(this);
    this.turnRight = this.turnRight.bind(this);
  }

  getOrientation(){
    // Return orientation index and use to enter an adjoining room
    return ORIENTATIONS.indexOf(this.orientation);
  }

  setOrientation(orientation){
    this.orientation = orientation;
  }

  turn(direction){
    let index = this.getOrientation();
    if(direction === "left"){
      index = index <= 0 ? ORIENTATIONS.length - 1 : this.getOrientation() - 1
    } else {
      index = index >= ORIENTATIONS.length - 1 ? 0 : this.getOrientation() + 1
    }
    this.setOrientation(ORIENTATIONS[index]);
  }

  turnLeft(){
    this.turn("left")
    return `You turn to face ${this.orientation}`
  }

  turnRight(){
    this.turn("right")
    return `You turn to face ${this.orientation}`
  }

  die(){
    print("There is a light in the distance. You move towards it. You are dead.")
    process.exit();
  }
}

// TIDY THIS UP
const ORIENTATIONS =  ["north", "east", "south", "west"];

