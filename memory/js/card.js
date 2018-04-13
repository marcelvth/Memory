class Card extends Observable {

    constructor(cardId) {
        super();
        this.isClosed = true;

        switch (cardId) {
            case 1: this.cardsrc = url("img/groep_4/girls/memorycardariel.png"); break;
            case 2: this.cardsrc = url("img/groep_4/girls/memorycardbella.png"); break;
            case 3: this.cardsrc = url("img/groep_4/girls/memorycardelsa.png"); break;
            case 4: this.cardsrc = url("img/groep_4/girls/memorycardrapunzel.png"); break;
            case 5: this.cardsrc = url("img/groep_4/girls/memorycardsnowwhite.png"); break;
            case 6: this.cardsrc = url("img/groep_4/girls/memorycardyasmin.png"); break;
            case 7: this.cardsrc = url("img/groep_4/girls/memorycardsleepingbeauty.png"); break;
            case 8: this.cardsrc = url("img/groep_4/girls/memorycardtiana.png"); break;
        }
    }
    getCardBack() {
        if (!this.isClosed) {
            return this.cardsrc;
        }
        else {
            if (this.cardsrc < 9) {
                return url("img/memorycardbackgirls.png");
            }
        }
    }
}
