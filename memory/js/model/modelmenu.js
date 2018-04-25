class ModelMenu extends Observable {
  constructor() {
    super();
   
    this.playerName1;
    this.playerName2;
  }

  changeName() {
    this.playerName1 = document.querySelector("#naam1").value;
    this.playerName2 = document.querySelector("#naam2").value;
    document.querySelector("#namenveld1 > h1").innerHTML = this.playerName1;
    document.querySelector("#namenveld2 > h1").innerHTML = this.playerName2;
    this.notify();
  }

  getGenderType() {
    return this.genderType;
  }

}
