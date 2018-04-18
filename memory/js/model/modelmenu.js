class ModelMenu extends Observable {
  constructor() {
    super();
    this.gamestate = 1;
    this.playerAmount;
    this.groupType;
    this.playerName1;
    this.playerName2;
    this.genderType;
  }

  changeGamestate(button) {
    console.log(this.gamestate);

    if (this.gamestate === 2) {
      this.playerAmount = 1;
    }
    else if (this.gamestate === 3) {
      this.playerAmount = 2;
    }
    else if (this.gamestate === 4) {
      this.groupType = 1;
    }
    else if (this.gamestate === 5) {
      this.groupType = 2;
    }
    else if (this.gamestate === 6) {
      this.genderType = 1;
      this.changeName();
    }
    else if (this.gamestate === 7) {
      this.genderType = 2;
      this.changeName();
    }

    this.gamestate = button;
    this.notify();
  }
  changeName() {
    this.playerName1 = document.querySelector("#naam1").value;
    this.playerName2 = document.querySelector("#naam2").value;
    this.notify();
  }

  getGenderType() {
    return this.genderType;
  }

}
