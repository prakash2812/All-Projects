let today = new Date();
let usestring = today.getFullYear();
function addition() {
    var body = document.getElementById("main");
    var headele = document.createElement("h2");
    body.appendChild(headele);

    var elememt = document.createElement("p");
    let headtext = document.createTextNode("H2 header this one");
    body.appendChild(elememt);
    headele.appendChild(headtext);
    var text = document.createTextNode("something");
    elememt.appendChild(text);

    var pattri = document.createAttribute("id");
    pattri.value = "test"
    elememt.setAttributeNode(pattri);
}



function changeBackGround() {
    document.getElementById("main").style.backgroundColor = "blue";
    document.getElementById("para").style.backgroundColor = "yellow";
}

function changeBackGround1() {
    document.getElementById("para").style.backgroundColor = "yellow";
}
function backToNormal() {
    document.getElementById("para").style.backgroundColor = "";
}

function newPicture() {
    document.getElementById("image").src = ".//css/Zero field.PNG";
}

function oldPicture() {
    document.getElementById("image").src = ".//css/cloud.png";
}