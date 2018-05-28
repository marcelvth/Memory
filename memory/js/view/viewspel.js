class ViewSpel extends Observer {
    constructor(model){
        super(model)
        this.model.addObserver(this);
    }

    update(){
            for (let i = 0; i < this.model.fillArray.length; i++) {
                document.getElementById(i+1).style.backgroundImage = this.model.fillArray[i].getCardBack();
            }
    }
}
