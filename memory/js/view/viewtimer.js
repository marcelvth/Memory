class ViewTimer extends Observer {
  constructor(model) {
    super(model);
    this.model.addObserver(this);
  }

  // Timer updates every second, if seconds is 9 or lower, add a 0 infront of it.
  update() {
    if (this.model.seconds <= 9) {
      document.getElementById("time").innerHTML = "Tijd: " + this.model.minutes + ":0" + this.model.seconds;
    }
    else {
      document.getElementById("time").innerHTML = "Tijd: " + this.model.minutes + ":" + this.model.seconds;
    }
  }

}
