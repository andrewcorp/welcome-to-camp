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
    p: self.room.getLocation,
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

const instructions = [
  { command: "A", description: "Action (talk, attack) // NOT IMPLEMENTED" },
  { command: "D", description: "Report your direction" },
  { command: "E", description: "Exit game" },
  { command: "H", description: "Help me" },
  { command: "I", description: "Inventory // NOT IMPLEMENTED" },
  { command: "L", description: "Turn left" },
  { command: "O", description: "List objects nearby" },
  { command: "P", description: "Current position" },
  { command: "R", description: "Turn right" },
  { command: "S", description: "Describe your surroundings" },
  { command: "U", description: "Use item // NOT IMPLEMENTED" },
  { command: "W", description: "Walk" },
]

const printInstructions = () => {
  return instructions.map(i => i.command + ": " + i.description).join("\n");
};

function exit(){
  print('The coward\'s way out.')
  process.exit();
}

export default inputMap
