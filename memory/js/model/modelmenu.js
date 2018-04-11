class ModelMenu extends Observable {
  constructor() {
    super();
    this.gamestate=1;
    this.playerAmount;
    this.playerName1;
    this.playerName2;
    this.genderType;
  }

  changeGamestate(button){
    if (this.gamestate === 2) {
      this.playerAmount = 1;
    } else if (this.gamestate === 3) {
      this.playerAmount = 2;
    }
    this.gamestate = button;
    this.notify();
  }

  changeName(){
    
    
  }
  
}
