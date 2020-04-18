class Patient{

    constructor(name, temp, src,conditions){
        this.name = name; // patient's name
        this.temp = temp;//temperature of patient
        this.src= src;//image src
        this.conditions =  conditions;
    }

    get name(){ return this._name;}
    set name(name){this.name = name;}
    get temp(){ return this.temp;}
    set temp(temp){this.temp = temp;}
    
    get src(){ return this.src;}
    set src(src){this.src = src;}
    
    get conditions(){return this.conditions;}
    set conditions(conditions){this.conditions = conditions;}


}

function ready(){
    let patient1 = new Patient();
    patient1.name = 'Phony Pearson';
    patient1.temp =  window.setInterval(function(){
        let x = Math.random * 100 - 10;
        if(x<87){
            alert(patient1.name+"'s temperature is very high");
            return x;
        }
        return x;
    },5000);
}

if (document.readyState !== "loading") {
    ready();
} else {
    document.addEventListener("DOMContentLoaded", ready);
}  