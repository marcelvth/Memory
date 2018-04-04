class Controller {
  constructor() {
    this.modelmenu = new ModelMenu();
    this.modelspel = new ModelSpel();
    this.view = new View();
    document.getElementById("alleen").addEventListener("click", (e) => this.modelmenu.onModusHandler("alleen"));
    document.getElementById("tegen").addEventListener("click", (e) => this.modelmenu.onModusHandler("samen"));
    document.getElementById("ok").addEventListener("click", (e) => this.modelmenu.onModelHandler());
    document.getElementById("groep4").addEventListener("click", (e) => this.modelmenu.onGroepHandler("groep4"));
    document.getElementById("groep8").addEventListener("click", (e) => this.modelmenu.onGroepHandler("groep8"));
    document.getElementById("jongen").addEventListener("click", (e) => this.modelmenu.onGeslachtlHandler("jongen"));
    document.getElementById("meisje").addEventListener("click", (e) => this.modelmenu.onGeslachtHandler("meisje"));
  }
}
