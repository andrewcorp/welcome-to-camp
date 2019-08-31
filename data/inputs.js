import rooms from "./rooms"

const inputs = {
  d: reportDirection,
  h: printInstructions,
  i: showInventory,
  l: reportLocation,
  e: exit,
  r: roomDescription,
}

// placeholder
function reportDirection(){
  return "You are facing north";
}

function reportLocation(){
  return "You are at the wharf"
}

function roomDescription(){
  return rooms[0].description;
}

function showInventory(){
  return `In your backpack:\n${rooms[0].inventory.map(item => `* ${item}`).join("\n")}`
}

function printInstructions(){
  return (`
    D: Report your direction
    E: Exit game
    H: Help me
    I: Inventory
    L: Show current location
    R: Describe your surroundings
  `)
}

function exit(){
  process.exit();
}

export default inputs
