export default class Item {

  friendlyName = null

  constructor(item){
    this.friendlyName = item.friendlyName;
  }

  use(){
    // use item
    // work out where to handle 'isLethal', which kills player
  }

  friendlyName(){
    return this.friendlyName;
  }
}
