class Controller {
  constructor() {
    this.modelmenu = new ModelMenu();
    this.viewmenu = new ViewMenu(this.modelmenu);
    document.getElementById("alleen").addEventListener("click", (e) => this.modelmenu.onModusHandler("alleen"));
    document.getElementById("tegen").addEventListener("click", (e) => this.modelmenu.onModusHandler("tegen"));
    document.getElementById("naamknop").addEventListener("click", (e) => this.modelmenu.onNaamHandler());
  }

  //   onMenuOptionHandler(option) {
  //     switch (option) {
  //       case "alleen":
  //         this.modelmenu.onModusHandler(option);
  //         break;
  //       case "tegen":
  //         this.modelmenu.onModusHandler(option);
  //         break;
  //       case "naamknop":
  //         this.modelmenu.onNaamHandler();
  //       default:
  // }
}
