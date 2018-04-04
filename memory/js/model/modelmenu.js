class ModelMenu {
  constructor() {
    this.modus;
    this.naam1 = " ";
    this.naam2 = " ";
    this.groep;
    this.geslacht;
  }

  onModusHandler(modus) {
    this.modus = modus;
  }

  getModus() {
    return this.modus;
  }

  onGroepHandler(groep) {
    this.groep = groep;
  }

  getGroep() {
    return this.modus;
  }

  onGeslachtHandler(geslacht) {
    this.geslacht = geslacht;
  }

  getGeslacht() {
    return this.geslacht;
  }
}
