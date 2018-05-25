class Timer extends Observable {
  constructor() {
    super();
    this.time;
    this.seconds = 0;
    this.minutes = 0;
    this.totalTime = 0;
    this.paused = false;
  }

  // Time starts at the start of the game, resets time if game wasn't paused.
  startTimer() {
    if (!this.paused) {
      this.resetTime();
    }
    this.time = window.setInterval(this.updateTimer.bind(this), 1000);
    this.paused = false;
  }

  resetTime() {
    this.seconds = 0;
    this.minutes = 0;
    this.totalTime = 0;
  }

  updateTimer() {
    this.seconds++;
    if (this.seconds === 60) {
      this.minutes++;
      this.seconds = 0;
      console.log("Minutes: " + this.minutes);
    }
    console.log("Seconds: " + this.seconds);
  }

  // Timer pauses, can be resumed.
  pauseTimer() {
    this.time = window.clearInterval(this.time);
    this.paused = true;
  }

  // Game is finished, timer stops, total time in seconds is calculated by adding minutes to seconds.
  stopTimer() {
    this.time = window.clearInterval(this.time);
    this.countTotalTime();
  }

  countTotalTime() {
    this.totalTime = this.totalTime + (this.minutes * 60) + this.seconds;
  }

  getTotalTime() {
    return this.totalTime;
  }

}
