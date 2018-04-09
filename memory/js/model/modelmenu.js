class ModelMenu extends Observable {
  constructor() {
    super();
    this.modus;
    this.naam1 = " ";
    this.naam2 = " ";
  }

  onMenuHandler(choice) {
    switch (choice) {
      case "alleen":
        onModusHandler(choice);
        break;
        case "tegen":

          break;
      default:

    }
  }

  onModusHandler(modus) {
    this.modus = modus;
    this.getModus();
    this.notify();
  }

  getModus() {
    return this.modus;
  }

  onNaamHandler() {
    this.naam1 = document.getElementById("naam1").value;
    this.naam2 = document.getElementById("naam2").value;
    this.notify();
  }

  getNaam() {

  }

}
