class Controller {
  constructor() {
    this.modelmenu = new ModelMenu();
    this.modelspel = new ModelSpel();
    this.viewmenu = new ViewMenu(this.modelmenu);
    this.viewspel = new ViewSpel(this.modelspel);
    this.card = new Card();
    this.timer = new Timer();
    document.getElementById("alleen").addEventListener("click", (e) => this.modelmenu.changeGamestate(2));
    document.getElementById("tegen").addEventListener("click", (e) => this.modelmenu.changeGamestate(3));
    document.getElementById("groep4").addEventListener("click", (e) => this.modelmenu.changeGamestate(4));
    document.getElementById("groep8").addEventListener("click", (e) => this.modelmenu.changeGamestate(5));
    document.getElementById("meisje").addEventListener("click", (e) => this.modelmenu.changeGamestate(6));
    document.getElementById("jongen").addEventListener("click", (e) => this.modelmenu.changeGamestate(7));
    document.getElementById("naamknop").addEventListener("click", (e) => this.modelmenu.changeGamestate(8));
    document.getElementById("naamknop").addEventListener("click", (e) => this.modelspel.makeCards());
  }
}
