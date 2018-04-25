class Card extends Observable {

    constructor(cardId) {
        super();
        this.isClosed = true;
    }

    card() {
        switch (cardId) {
            // Groep 4 Kaarten Meisjes
            case 1: this.cardId = url("img/groep_4/girls/memorycardariel.png"); break;
            case 2: this.cardId = url("img/groep_4/girls/memorycardbella.png"); break;
            case 3: this.cardId = url("img/groep_4/girls/memorycardgirlselsa.png"); break;
            case 4: this.cardId = url("img/groep_4/girls/memorycargirlsdrapunzel.png"); break;
            case 5: this.cardId = url("img/groep_4/girls/memorycardgirlssnowwhite.png"); break;
            case 6: this.cardId = url("img/groep_4/girls/memorycardyasmin.png"); break;
            case 7: this.cardId = url("img/groep_4/girls/memorycardsleepingbeauty.png"); break;
            case 8: this.cardId = url("img/groep_4/girls/memorycardtiana.png"); break;
            // Groep 4 Kaarten Jongens
            case 9: this.cardId = url("img/groep_4/boys/memorycardboyssally.png"); break;
            case 10: this.cardId = url("img/groep_4/boys/memorycardboyschickhicks.png"); break;
            case 11: this.cardId = url("img/groep_4/boys/memorycardboysdochudson.png"); break;
            case 12: this.cardId = url("img/groep_4/boys/memorycardboysguido.png"); break;
            case 13: this.cardId = url("img/groep_4/boys/memorycardboyslightningmcqueen.png"); break;
            case 14: this.cardId = url("img/groep_4/boys/memorycardboysluigi.png"); break;
            case 15: this.cardId = url("img/groep_4/boys/memorycardboysmater.png"); break;
            case 16: this.cardId = url("img/groep_4/boys/memorycardboystheking.png"); break;
            // Groep 8 Kaarten Meisjes
            case 17: this.cardId = url("img/groep_8/girls/astonmartin.png"); break;
            case 18: this.cardId = url("img/groep_8/girls/audi.png"); break;
            case 19: this.cardId = url("img/groep_8/girls/bentley.png"); break;
            case 20: this.cardId = url("img/groep_8/girls/bmw.png"); break;
            case 21: this.cardId = url("img/groep_8/girls/bugatti.png"); break;
            case 22: this.cardId = url("img/groep_8/girls/camaro.png"); break;
            case 23: this.cardId = url("img/groep_8/girls/dodge.png"); break;
            case 24: this.cardId = url("img/groep_8/girls/ferrari.png"); break;
            case 25: this.cardId = url("img/groep_8/girls/gmc.png"); break;
            case 26: this.cardId = url("img/groep_8/girls/jeep.png"); break;
            case 27: this.cardId = url("img/groep_8/girls/lamborghini.png"); break;
            case 28: this.cardId = url("img/groep_8/girls/mclaren.png"); break;
            case 29: this.cardId = url("img/groep_8/girls/mercedes.png"); break;
            case 30: this.cardId = url("img/groep_8/girls/nissan.png"); break;
            case 31: this.cardId = url("img/groep_8/girls/porsche.png"); break;
            case 32: this.cardId = url("img/groep_8/girls/rollsroyce.png"); break;
            case 33: this.cardId = url("img/groep_8/girls/tesla.png"); break;
            case 34: this.cardId = url("img/groep_8/girls/volkswagen.png"); break;
            // Groep 8 Kaarten Jongens
            case 35: this.cardId = url("img/groep_8/boys/astonmartin.png"); break;
            case 36: this.cardId = url("img/groep_8/boys/audi.png"); break;
            case 37: this.cardId = url("img/groep_8/boys/bentley.png"); break;
            case 38: this.cardId = url("img/groep_8/boys/bmw.png"); break;
            case 39: this.cardId = url("img/groep_8/boys/bugatti.png"); break;
            case 40: this.cardId = url("img/groep_8/boys/camaro.png"); break;
            case 41: this.cardId = url("img/groep_8/boys/dodge.png"); break;
            case 42: this.cardId = url("img/groep_8/boys/ferrari.png"); break;
            case 43: this.cardId = url("img/groep_8/boys/gmc.png"); break;
            case 44: this.cardId = url("img/groep_8/boys/jeep.png"); break;
            case 45: this.cardId = url("img/groep_8/boys/lamborghini.png"); break;
            case 46: this.cardId = url("img/groep_8/boys/mclaren.png"); break;
            case 47: this.cardId = url("img/groep_8/boys/mercedes.png"); break;
            case 48: this.cardId = url("img/groep_8/boys/nissan.png"); break;
            case 49: this.cardId = url("img/groep_8/boys/porsche.png"); break;
            case 50: this.cardId = url("img/groep_8/boys/rollsroyce.png"); break;
            case 51: this.cardId = url("img/groep_8/boys/tesla.png"); break;
            case 52: this.cardId = url("img/groep_8/boys/volkswagen.png"); break;
        }

        getCardBack() {
            if (!this.isClosed) {
                return this.cardId;
            }
            else {
                if (this.cardId < 9 && this.modelmenu.genderType === 1) {
                    return url("img/memorycardbackgirls.png");
                } 

            }
        }
    }
}