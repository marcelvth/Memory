class ViewSpel extends Observer {
    constructor(model){
        super(model)
        this.model.addObserver(this);
    }
    makeBoyGame(){
       var d = document.getElementById("spel");
        d.className += "jongen";
    }

    makeGirlGame(){
        
    }

}
