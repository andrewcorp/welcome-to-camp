export default class Item(){
  isLethal = false
  constructor(item){
    super(item);
    this.isLethal = item.isLethal
  }
  use(){
    // use item
    // work out where to handle 'isLethal', which kills player
  }
}
