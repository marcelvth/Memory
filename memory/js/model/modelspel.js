class ModelSpel extends Observable {
    constructor() {
        super();
        this.memoryCards4girls = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
        this.memoryCards4boys = [9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16];
        this.memoryCards8girls = [17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 30, 30, 31, 31, 32, 32, 33, 33, 34, 34];
        this.memoryCards8boys = [35, 35, 36, 36, 37, 37, 38, 38, 39, 39, 40, 40, 41, 41, 42, 42, 43, 43, 44, 44, 45, 45, 46, 46, 47, 47, 48, 48, 49, 49, 50, 50, 51, 51, 52, 52];
        this.genderType;
        this.fillArray;
    }

    makeCards() {
        if (this.genderType === 1 && this.groupType === 1) {
            let o = 9;
            for (let i = 0; i < this.memoryCards4boys.length; i++) {
                this.memoryCards4boys[i] = o;
                if (this.memoryCards4boys[i] == this.memoryCards4boys[i - 1]) {
                    o++;
                }
            }
        } else if (this.genderType === 1 && this.groupType === 2) {
            let o = 9;
            for (let i = 8; i < this.memoryCards4boys.length; i++) {
                this.memoryCards4boys[i] = o;
                if (this.memoryCards4boys[i] == this.memoryCards4boys[i - 1]) {
                    o++;
                }
            }
        } else if (this.genderType === 2 && this.groupType === 1) {
            let o = 1;
            for (let i = 16; i < this.memoryCards8girls.length; i++) {
                this.memoryCards8girls[i] = o;
                if (this.memoryCards8girls[i] == this.memoryCards4girls[i - 1]) {
                    o++;
                }
            }
        } else if (this.genderType === 2 && this.groupType === 2) {
            let o = 1;
            for (let i = 34; i < this.memoryCards8girls.length; i++) {
                this.memoryCards8girls[i] = o;
                if (this.memoryCards8girls[i] == this.memoryCards4girls[i - 1]) {
                    o++;
                }
            }
        }
        this.shuffleCard();
        this.makeArrayCards();
        this.notify();
    }

    shuffleCard() {
        if (this.genderType === 1 && this.groupType === 1) {
            this.currentIndex = this.memoryCards4boys.length;

            while (this.currentIndex !== 0) {
                this.randomIndex = Math.floor(Math.random() * this.currentIndex);
                this.currentIndex -= 1;
                this.temporaryValue = this.memoryCards4boys[this.currentIndex];
                this.memoryCards4boys[this.currentIndex] = this.memoryCards4boys[this.randomIndex];
                this.memoryCards4boys[this.randomIndex] = this.temporaryValue;
            }
            

        } else if (this.genderType === 2 && this.groupType === 1) {
            this.currentIndex = this.memoryCards4girls.length;

            while (this.currentIndex !== 0) {
                this.randomIndex = Math.floor(Math.random() * this.currentIndex);
                this.currentIndex -= 1;
                this.temporaryValue = this.memoryCards4girls[this.currentIndex];
                this.memoryCards4girls[this.currentIndex] = this.memoryCards4girls[this.randomIndex];
                this.memoryCards4girls[this.randomIndex] = this.temporaryValue;
            }

        } else if (this.genderType === 1 && this.groupType === 2) {
            this.currentIndex = this.memoryCards8boys.length;

            while (this.currentIndex !== 0) {
                this.randomIndex = Math.floor(Math.random() * this.currentIndex);
                this.currentIndex -= 1;
                this.temporaryValue = this.memoryCards8boys[this.currentIndex];
                this.memoryCards8boys[this.currentIndex] = this.memoryCards8boys[this.randomIndex];
                this.memoryCards8boys[this.randomIndex] = this.temporaryValue;
            }
        } else if (this.genderType === 2 && this.groupType === 2) {
            this.currentIndex = this.memoryCards8girls.length;

            while (this.currentIndex !== 0) {
                this.randomIndex = Math.floor(Math.random() * this.currentIndex);
                this.currentIndex -= 1;
                this.temporaryValue = this.memoryCards8girls[this.currentIndex];
                this.memoryCards8girls[this.currentIndex] = this.memoryCards8girls[this.randomIndex];
                this.memoryCards8girls[this.randomIndex] = this.temporaryValue;
            }
        }
    }
    setGender(_genderType) {
        this.genderType = _genderType;
    }
    setGroup(_groupType) {
        this.groupType = _groupType;
        console.log(this.groupType);

    }

    makeArrayCards() {
        this.fillArray = [];
        if (this.genderType === 1 && this.groupType === 1) {
            for (let i = 0; i < this.memoryCards4boys.length; i++) {
                this.fillArray.push(new Card(this.memoryCards4boys[i]));
            }
        } else if (this.genderType === 2 && this.groupType === 1) {
            for (let i = 0; i < this.memoryCards4girls.length; i++) {
                this.fillArray.push(new Card(this.memoryCards4girls[i]));
            }
        }

    }

    checkMatchCards() {
        
    }
}   