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
        document.getElementById("p2").style.display = "none";
        document.getElementById("naam2").style.display = "none";
      }
    } else if (this.model.gamestate === 6) {
        document.getElementById("naam").style.display = "none";
        document.getElementById("thema").style.display = "grid";
    } else if (this.model.gamestate === 8) {
      document.getElementById("menu").style.display = "none";
      document.getElementById("wrapper").style.display = "grid";
    }
    else if (this.model.gamestate === 7) {
      document.getElementById("menu").style.display = "none";
      document.getElementById("wrapper").style.display = "grid";
      if (this.model.playerAmount === 1) {
        
      document.getElementById("speler2").style.display = "none"; 
      } 
      document.querySelector("#namenveld1 > h1").innerHTML = this.model.playerName1;
      document.querySelector("#namenveld2 > h1").innerHTML = this.model.playerName2;
      document.querySelector("#spelerTurn1").innerHTML = this.model.playerName1;
      document.querySelector("#spelerTurn2").innerHTML = this.model.playerName2;


    }
  }
}
