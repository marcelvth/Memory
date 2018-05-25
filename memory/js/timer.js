class Timer extends Observable {
  constructor() {
    super();
    this.time;
    this.seconds = 0;
    this.minutes = 0;
  }

  startTimer() {
    this.time = window.setInterval(this.updateTimer.bind(this), 1000);
  }

  stopTimer() {
    this.time = window.clearInterval(this.time);
  }

  updateTimer() {
    this.seconds++;
    if (this.seconds === 60) {
      this.minutes++;
      this.seconds = 0;
    }
  }
}
