class ViewSpel extends Observer {
    constructor(model){
        super(model)
        this.model.addObserver(this);
    }

    updateGame(){
        console.log(this.model.genderType);
        console.log(this.model.groupType);
        
        if (this.model.genderType === 1 && this.model.groupType === 1) {
            console.log("test");
            
            for (let i = 0; i < this.model.memoryCards4boys.length; i++) {
                document.getElementById(i+1).style.backgroundImage = this.model.fillArray[i].cardId;
            }
        }
        
    }

}
