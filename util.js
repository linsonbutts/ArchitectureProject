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
    patient1.temp =  Math.floor(Math.random() * (110 - 35 +1)+35);
    patient1.conditions = ('Filler','Filler','Filler');
    if(patient1.temp >85 || patient1 < 50){
        alert('Check '+patient1.name+"'s temperature it is abnormal")
    }
    
    
    let content = document.getElementsByClassName('collapse');

    for(i =0; i<content.length; i++){
        content[i].append('Patient Name: '+patient1.name+', Patient Temperature:'+Math.round(patient1.temp)+', Patients Conditions:'+patient1.conditions);
    }
    window.setInterval(function(){
        alert('Temperatures have been updated');

        patient1.temp =  Math.floor(Math.random() * (110 - 35 +1)+35);
        if(patient1.temp >85 || patient1 < 50){
            alert('Check '+patient1.name+"'s temperature it is abnormal");
        }
        for(i =0; i<content.length; i++){
            content[i].innerHTML = (' Patient Name:'+patient1.name+', Patient Temperature:'+Math.round(patient1.temp)+', Patients Conditions:'+patient1.conditions);
        }
        },10000);

}

if (document.readyState !== "loading") {
    ready();
} else {
    document.addEventListener("DOMContentLoaded", ready);
}  