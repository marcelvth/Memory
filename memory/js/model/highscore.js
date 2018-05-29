class HighScore extends Observable {
  constructor() {
    super();
    this.name;
    this.currentScore;
    this.highScoreList = [];
    this.place;
  }

  // Executes all code in order.
  checkHighScore(currentScore, name) {
    this.place = 9;
    this.checkHighScoreList();
    this.name = name;
    this.currentScore = currentScore;
    this.compareHighScore();
    this.notify();
  }

  // Checks and retrieves the highscore list, if there isn't one, create it.
  checkHighScoreList() {
    if (localStorage.getItem("memory_highscore0") === null) {
      this.createHighScoreList();
    }
    else {
      this.getHighScoreList();
    }
  }

  createHighScoreList() {
    for (let i = 0; i < 10; i++) {
      let o = i + 1;
      this.highScoreList[i] = { "name": "Speler " + o, "time": 5999}
      localStorage.setItem("memory_highscore" + i, JSON.stringify(this.highScoreList[i]));
    }
  }

  getHighScoreList() {
    for (let i = 0; i < 10; i++) {
      this.highScoreList[i] = localStorage.getItem("memory_highscore" + i);
      this.highScoreList[i] = JSON.parse(this.highScoreList[i]);
      console.log(this.highScoreList[i]);
    }
  }

  // Compares current score with highscores.
  // If current score is lower than the 10th highscore, compare the next highscore.
  // If current score equals a highscore, go back 1 position and execute addHighScore() .
  // If current score is higher than a highscore, go back 1 position and execute addHighScore()
  // unless current score is higher than 10th highscore.
  compareHighScore() {
    while (this.place > 0) {
      if (this.currentScore < this.highScoreList[this.place].time) {
        this.place--;
      }
      else if (this.currentScore == this.highScoreList[this.place].time) {
        this.place++;
        this.addHighScore();
        break;
      }
      else if (this.currentScore > this.highScoreList[this.place].time) {
        if (this.place = 9) {
          break;
        }
        else {
          this.place++;
          this.addHighScore();
          break;
        }
      }
      if (this.place === 0) {
        this.addHighScore();
      }
    }
  }

  // Last highscore is replaced by the highscore before, then goes back 1 position.
  // Repeats until current highscore is the same number as the new one and is replaced by the new one.
  addHighScore() {
    debugger;
    for (let i = 9; i => this.place; i--) {
      if (this.place !== i) {
        this.highScoreList[i] = this.highScoreList[i - 1];
        }
      else {
        this.highScoreList[i].name = this.name;
        this.highScoreList[i].time = this.currentScore;
        break;
      }
    }
    for (let i = 0; i < 10; i++) {
      let o = i + 1;
      localStorage.setItem("memory_highscore" + i, JSON.stringify(this.highScoreList[i]));
      console.log(this.highScoreList[i]);
    }
  }

}
