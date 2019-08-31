import rooms from "./rooms"

const inputs = {
  d: reportDirection,
  h: printInstructions,
  // i: showInventory,
  l: reportLocation,
  o: listObjects,
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
  return formatList('In your backpack', rooms[0].inventory);
}

function listObjects(){
  return formatList('Nearby objects', rooms[0].objects);
}

function formatList(intro, items){
  return `${intro}\n${items.map(item => `* ${item}`).join("\n")}`
}

function printInstructions(){
  return (`
    D: Report your direction
    E: Exit game
    H: Help me
    L: Show current location
    O: List objects nearby
    R: Describe your surroundings
    U: Use item
  `)
}

function exit(){
  process.exit();
}

export default inputs
