import { print, formatList } from "../lib/helpers"
import rooms from "./rooms"

const inputMap = (self) => {
  return {
    // i: showInventory,
    d: reportDirection,
    e: exit,
    h: printInstructions,
    l: self.player.turnLeft,
    o: self.room.printItems,
    p: reportLocation,
    r: self.player.turnRight,
    s: self.room.describe,
    w: self.room.enter,
  }
}

// placeholder
function reportDirection(){
  return "You are facing north";
}

function reportLocation(){
  return "You are at the wharf"
}

function showInventory(){
  return formatList('In your backpack', rooms[0].inventory);
}

function printInstructions(){
  return (`
    A: Action (talk, attack) // NOT IMPLEMENTED
    D: Report your direction
    E: Exit game
    H: Help me
    I: Inventory // NOT IMPLEMENTED
    L: Turn left
    O: List objects nearby
    P: Current position
    R: Turn right
    S: Describe your surroundings
    U: Use item // NOT IMPLEMENTED
    W: Walk
  `)
}

function exit(){
  print('The coward\'s way out.')
  process.exit();
}

export default inputMap
