class ModelSpel extends Observable {
    constructor(){
        super();
        this.memoryCards4 = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
        this.memoryCards8 = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18];  
        this.makeCards();
    } 

    makeCards() {
        var o = 1;
        for (let i = 0; i < this.memoryCards4.length; i++) {
        this.memoryCards4[i] = "imageClass4-"+o;
        if (this.memoryCards4[i] == this.memoryCards4[i-1]) {
            o++;
        }
        }
        console.log(this.memoryCards4);
        
    }
}