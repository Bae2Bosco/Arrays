var wrapperEle = document.body.querySelector(".wrapper");

var warriors = [
    {
        name:"Bob",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Mavis",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name: "Morty",
        damage: 4,
        health: 10,
        warrior: true

    }
]

for(var i=0; i<warriors.length; i++){
    var ele = document.createElement("div");
    var nameEle = document.createElement("h2");
    var damageEle = document.createElement("h4")
    var healthEle = document.createElement("h6");
    var warriorEle = document.createElement("h8");
    nameEle.innerHTML=warriors[i].name;
    damageEle.innerHTML=warriors[i].damage;
    healthEle.innerHTML=warriors[i].health;
    warriorEle.innerHTML=warriors[i].warrior;
    wrapperEle.appendChild(ele);

}

document.getElementById("myH2").style.color = "#ff0000";
