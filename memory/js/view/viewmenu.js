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
    if (this.model.gamestate === 2) {
      document.getElementById("modus").style.display = "none";
      document.getElementById("groep").style.display = "grid";
    } else if (this.model.gamestate === 3) {
      document.getElementById("modus").style.display = "none";
      document.getElementById("groep").style.display = "grid";
    } else if (this.model.gamestate === 4 || this.model.gamestate === 5) {
      document.getElementById("groep").style.display = "none";
      document.getElementById("naam").style.display = "grid";
      if (this.model.playerAmount === 1) {
        document.querySelector("#p2").style.display = "none";
        document.querySelector("#naam2").style.display = "none";
        document.getElementById("inGame2").style.display = "none";
      } else if (this.model.playerAmount === 2) {
        // .speler2 laten zien
      }
    } else if (this.model.gamestate === 6) {
      document.getElementById("naam").style.display = "none";
      document.getElementById("thema").style.display = "grid";
    } else if (this.model.gamestate === 8) {
      document.getElementById("naam").style.display = "none";
      document.getElementById("thema").style.display = "grid";
    }
      else if (this.model.gamestate === 7) {
      document.getElementById("menu").style.display = "none";
      document.getElementById("wrapper").style.display = "grid";
      }
      else if (this.model.gamestate === 9) {
      document.getElementById("menu").style.display = "none";
      document.getElementById("wrapper").style.display = "grid";

      document.querySelector("#namenveld1 > h1").innerHTML = this.playerName1;
      document.querySelector("#namenveld2 > h1").innerHTML = this.playerName2;
      }
  }

}




  
 

