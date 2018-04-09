class ViewMenu extends Observer {
  constructor(model) {
    super(model);
    this.model.addObserver(this);
  }

  update() {
    super.update();
    this.onModusChange();
  }

  onModusChange(option) {
    document.getElementById("modus").style.display="none";
    document.getElementById("naam").style.display="inline";
    if (option = "alleen") {
      document.getElementById("speler2").style.display="none";
      document.getElementById("naam2").style.display="none";
    }
  }

  onNaamChange() {
    document.getElementById("naam").style.display="none";
    document.getElementById("groep").style.display="inline";
  }

}
