class Controller {
  constructor() {
    this.modelmenu = new ModelMenu();
    this.modelspel = new ModelSpel();
    this.viewmenu = new ViewMenu(this.modelmenu);
    this.viewspel = new ViewSpel(this.modelspel);

    // this.timer = new Timer();
    document.getElementById("alleen").addEventListener("click", (e) => this.changeGamestate(2));
    document.getElementById("tegen").addEventListener("click", (e) => this.changeGamestate(3));
    document.getElementById("groep4").addEventListener("click", (e) => this.changeGamestate(4));
    document.getElementById("groep8").addEventListener("click", (e) => this.changeGamestate(5));
    document.getElementById("meisje").addEventListener("click", (e) => this.changeGamestate(6));
    document.getElementById("jongen").addEventListener("click", (e) => this.changeGamestate(7));
    document.getElementById("naamknop").addEventListener("click", (e) => this.changeGamestate(8));

    this.gamestate = 1;
    this.group;
    this.playerAmount;
    this.groupType;
    this.genderType;
  }
    changeGamestate(_gamestate) {
      console.log(this.gamestate);

      if (this.gamestate === 2) {
        this.playerAmount = 1;
      }
      else if (this.gamestate === 3) {
        this.playerAmount = 2;
      }
      else if (this.gamestate === 4) {

        this.generateCards();
        this.groupType = 1;
      }
      else if (this.gamestate === 5) {

        this.generateCards();
        this.groupType = 2;
      }
      else if (this.gamestate === 6) {
        this.genderType = 2;
        this.modelmenu.changeName();
      }
      else if (this.gamestate === 7) {
        this.genderType = 1;
        this.modelmenu.changeName();
      }

      this.gamestate = _gamestate;
      this.gameModus();
    }

  gameModus() {
    if(this.gamestate === 4) {
      this.group = 4;
    } else if(this.gamestate === 5) {
      this.group = 8;
    }
    if (this.gamestate === 2 || this.gamestate === 3) {
      document.getElementById("modus").style.display = "none";
      document.getElementById("groep").style.display = "grid";
    }
    else if (this.gamestate === 4 || this.gamestate === 5) {
      document.getElementById("groep").style.display = "none";
      document.getElementById("thema").style.display = "grid";
    }
    else if (this.gamestate === 6 || this.gamestate === 7) {
      document.getElementById("thema").style.display = "none";
      document.getElementById("naam").style.display = "grid";
      if (this.playerAmount === 1) {
        document.getElementById("p2").style.display = "none";
        document.getElementById("naam2").style.display = "none";
      }
    }
    else if (this.gamestate === 8) {
      document.getElementById("menu").style.display = "none";
      document.getElementById("wrapper").style.display = "grid";
      this.travelGender();
      this.modelspel.makeCards();
    }
      if (this.playerAmount === 1) {
        document.getElementById("speler2").style.display = "none";
        document.getElementById("wrapper").getElementsByTagName("main")[0].style.gridTemplateAreas = ' "speler1 speler1" "spel spel" ';
      }
      if (this.genderType === 1) {
        document.getElementById("wrapper").getElementsByTagName("header")[0].style.background = "url(img/bg3.png)";
        document.getElementById("wrapper").getElementsByTagName("main")[0].style.background = "url(img/bg3.png)";
        document.getElementById("wrapper").getElementsByTagName("footer")[0].style.background = "url(img/bg3.png)";
      }
      if (this.groupType === 1 && this.playerAmount === 1) {
        document.getElementById("kaartenveld1").style.gridTemplateRows = ' repeat(1, 140px) ';
        document.getElementById("kaartenveld1").style.gridTemplateColumns = ' repeat(8, 104px) ';
      }
      if (this.groupType === 2) {
        document.getElementById("spel").style.gridTemplateColumns = ' repeat(9, 120px) ';
        document.getElementById("kaartenveld1").style.gridTemplateColumns = ' repeat(9, 52px) ';
        document.getElementById("kaartenveld2").style.gridTemplateColumns = ' repeat(9, 52px) ';
      }
    }                                        

    travelGender() {
      this.modelspel.setGender(this.genderType);
      this.modelspel.setGroup(this.groupType);      
    }
    
    generateCards(){
    if (this.group === 4) {
      for (let x = 1; x < 17; x++) {
          var div = document.createElement("div");
          div.setAttribute("id", x)
          div.className = "card";
        div.style.backgroundImage = "url(img/memorycardbackgirls.png)";
          document.querySelector("#spel").appendChild(div);
      }

      } else if (this.group === 8) {
        for(let x = 1; x < 37; x++) {
          var div = document.createElement("div");
          div.setAttribute("id", x)
          div.className = "card"
          div.style.backgroundImage = "url(img/memorycardbackboys.png)";
          document.querySelector("#spel").appendChild(div);
        }
      }
    }
  }
