class HighScore extends Observable {
  constructor() {
    super();
    this.name;
    this.currentScore;
  }

  // Executes all code in order.
  checkHighScore(currentScore, name) {
    this.checkHighScoreList();
    this.name = name;
    this.currentScore = currentScore;
    this.compareHighScore();
    this.notify();
  }

  // Checks and retrieves the highscore list, if there isn't one, create it.
  checkHighScoreList() {
    if (typeof("memory_highscore0") == "undefined") {
      this.createHighScoreList();
    }
    else {
      this.getHighScoreList();
    }
  }

  createHighScoreList() {
    var highScoreList = [];
    for (let i = 0; i < 9; i++) {
      let o = i + 1;
      highScoreList[i] = { "name": "Speler " + o, "time": 5999}
      localStorage.setItem("memory_highscore" + i, JSON.stringify(score[i]));
    }
  }

  getHighScoreList() {
    var highScoreList = [];
    for (let i = 0; i < 9; i++) {
      score[i] = localStorage.getItem("memory_highscore" + i);
      score[i] = JSON.parse("memory_highscore" + i);
    }
  }

  // Compares current score with highscores.
  // If current score is lower than the 10th highscore, compare the next highscore.
  // If current score equals a highscore, go back 1 position and execute addHighScore() .
  // If current score is higher than a highscore, go back 1 position and execute addHighScore()
  // unless current score is higher than 10th highscore.
  compareHighScore() {
    for (let place = 9; place <= 0;) {
      if (this.currentScore < score[i].time) {
        place--;
      }
      else if (this.currentScore == score[i].time) {
        place++;
        this.addHighScore();
        break;
      }
      else if (this.currentScore > score[i].time) {
        if (place = 9) {
          break;
        }
        else {
          place++;
          this.addHighScore();
          break;
        }
      }
      if (place = 0) {
        this.addHighScore();
        break;
      }
    }
  }

  // Last highscore is replaced by the highscore before, then goes back 1 position.
  // Repeats until current highscore is the same number as the new one and is replaced by the new one.
  addHighScore() {
    for (let position = 9; position => place;) {
      if (place = position) {
        highScoreList[position].name = this.name;
        highScoreList[position].time = this.currentScore;
        break;
      }
      else {
        highScoreList[position] = highScoreList[position - 1];
        position--;
      }
    }
  }

}
