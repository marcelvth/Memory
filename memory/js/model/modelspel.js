class ModelSpel extends Observable {
    constructor() {
        super();
        this.memoryCards4girls = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
        this.memoryCards4boys = [9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16];
        this.memoryCards8girls = [17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 30, 30, 31, 31, 32, 32, 33, 33, 34, 34];
        this.memoryCards8boys = [35, 35, 36, 36, 37, 37, 38, 38, 39, 39, 40, 40, 41, 41, 42, 42, 43, 43, 44, 44, 45, 45, 46, 46, 47, 47, 48, 48, 49, 49, 50, 50, 51, 51, 52, 52];
    }

    makeCards() {
        if (this.modelmenu.genderType === 1 && this.modelmenu.groupType === 1) {
            let o = 1;
            for (let i = 0; i < this.memoryCards4girls.length; i++) {
                this.memoryCards4girls[i] = "imageClass4-" + o;
                if (this.memoryCards4girls[i] == this.memoryCards4[i - 1]) {
                    o++;
                }
            }
        } else if (this.modelmenu.genderType === 1 && this.modelmenu.groupType === 2) {
            let o = 1;
            for (let i = 0; i < this.memoryCards4boys.length; i++) {
                this.memoryCards4boys[i] = "imageClass4-" + o;
                if (this.memoryCards4boys[i] == this.memoryCards4[i - 1]) {
                    o++;
                }
            }
        } else if (this.modelmenu.genderType === 2 && this.modelmenu.groupType === 1) {
            let o = 1;
            for (let i = 0; i < this.memoryCards8girls.length; i++) {
                this.memoryCards8girls[i] = "imageClass4-" + o;
                if (this.memoryCards8girls[i] == this.memoryCards4[i - 1]) {
                    o++;
                }
            }
        } else if (this.modelmenu.genderType === 2 && this.modelmenu.groupType === 2) {
            let o = 1;
            for (let i = 0; i < this.memoryCards8boys.length; i++) {
                this.memoryCards8boys[i] = "imageClass4-" + o;
                if (this.memoryCards8boys[i] == this.memoryCards4[i - 1]) {
                    o++;
                }
            }
        }
        shuffleCard();
    }

    shuffleCard() {
       
    }

}   