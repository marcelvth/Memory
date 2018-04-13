class ViewMenu extends Observer {
  constructor(model) {
    super(model);
    this.model.addObserver(this);
  }

  update() {
    super.update();
    this.gameModus();
  }

  gameModus() {
    if (this.model.gamestate === 2 || this.model.gamestate === 3) {
      document.getElementById("modus").style.display = "none";
      document.getElementById("groep").style.display = "grid";
    }
    else if (this.model.gamestate === 4 || this.model.gamestate === 5) {
      document.getElementById("groep").style.display = "none";
      document.getElementById("thema").style.display = "grid";
    }
    else if (this.model.gamestate === 6 || this.model.gamestate === 7) {
      document.getElementById("thema").style.display = "none";
      document.getElementById("naam").style.display = "grid";
       if (this.model.playerAmount === 1) {
        document.getElementById("p2").style.display = "none";
        document.getElementById("naam2").style.display = "none";
      }
    }
    else if (this.model.gamestate === 8) {
      document.getElementById("menu").style.display = "none";
      document.getElementById("wrapper").style.display = "grid";
      if (this.model.playerAmount === 1) {
        document.getElementById("speler2").style.display = "none";
        document.getElementById("wrapper").getElementsByTagName("main")[0].style.gridTemplateAreas = ' "speler1 speler1" "spel spel" ';
      }
      if (this.model.genderType === 2) {
        document.getElementById("wrapper").getElementsByTagName("header")[0].style.background = "url(../img/bg3.png)";
        document.getElementById("wrapper").getElementsByTagName("main")[0].style.background = "url(../img/bg2.png)";
        document.getElementById("wrapper").getElementsByTagName("footer")[0].style.background = "url(../img/bg3.png)";
      }
      if (this.model.groupType === 1 && this.model.playerAmount === 1) {
          document.getElementById("kaartenveld1").style.gridTemplateRows = ' repeat(1, 140px) ';
          document.getElementById("kaartenveld1").style.gridTemplateColumns = ' repeat(8, 104px) ';
      }
      if (this.model.groupType === 2) {
        document.getElementById("spel").style.gridTemplateColumns = ' repeat(9, 120px) ';
        document.getElementById("kaartenveld1").style.gridTemplateColumns = ' repeat(9, 52px) ';
        document.getElementById("kaartenveld2").style.gridTemplateColumns = ' repeat(9, 52px) ';
      }
    }
    document.querySelector("#namenveld1 > h1").innerHTML = this.model.playerName1;
    document.querySelector("#namenveld2 > h1").innerHTML = this.model.playerName2;
  }
}
