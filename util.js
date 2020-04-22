class Patient{

    constructor(name, temp,conditions){
        this._name = name; // patient's name
        this._temp = temp;//temperature of patient

        this._conditions =  conditions;
    }

    get name(){ return this._name;}
    set name(name){this._name = name;}
    get temp(){ return this._temp;}
    set temp(temp){this._temp = temp;}
    
    
    get conditions(){return this._conditions;}
    set conditions(conditions){this._conditions = conditions;}


}

function ready(){
    let patient1 = new Patient();
    patient1.name = 'Phony Pearson';
    patient1.temp =  Math.random() *100 -10;
    patient1.conditions = ('Filler','Filler','Filler');
    
    let content = document.getElementsByClassName('collapse');

    for(i =0; i<content.length; i++){
        content[i].append(patient1.name,patient1.temp,patient1.conditions);
    }

}

if (document.readyState !== "loading") {
    ready();
} else {
    document.addEventListener("DOMContentLoaded", ready);
}  