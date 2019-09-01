import {print, formatList} from "../lib/helpers";
import rooms from "../data/rooms";
import Item from "./item";
import items from "../data/items";

export default class Room {

  description = null
  introduction = null
  items = []
  adjoiningRooms = []

  constructor(room, player){
    this.player = player
    this.update(room);

    // Not sure why I need to bind methods in this way
    this.describe = this.describe.bind(this);
    this.printItems = this.printItems.bind(this);
    this.update = this.update.bind(this);
    this.enter = this.enter.bind(this);
    print(room.introduction) // MOVE THIS THING IT IS BAD
  }

  update(room){
    // Store 'visited' array on player to know whether to show intro
    if(room.type === 2 || (room.type === 3 && false)) {
      // Kill player if they enter room type 2, or room 3 without correct item
      print(room.introduction); // MOVE THIS THING IT IS BAD
      this.player.die();
    }
    this.description = room.description;
    this.introduction = room.introduction;
    this.adjoiningRooms = room.adjoining_rooms;
    this.setItems(room);
  }

  enter(){
    const nextRoom = this.adjoiningRooms[this.player.getOrientation()];
    this.update(rooms[nextRoom]);
    return this.introduction // THIS IS JUST FOR PRINTING. NEED A PRINTER CLASS
  }

  describe(){
    return this.description;
  }

  setItems(room){
    this.items = room.items.map(itemName => new Item(items[itemName]));
  }

  printItems(){
    return formatList("Nearby items", this.items.map(item => item.friendlyName));
  }
}
