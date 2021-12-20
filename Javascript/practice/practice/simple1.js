function changeText() {
    var parent = document.getElementById("main");
    let child = parent.lastElementChild;
    // var child=parent.childNodes[3];
    child.style.color = "blue";

}
//traversing child to parent
function changeText1() {
    //traversing from child to parent
    var child = document.getElementById("p1");
    let parent = child.parentElement;
    parent.style.color = "blue";
}

//sibling to sibling
function changeText2() {
    var child = document.getElementById("p2");
    let siibling = child.previousElementSibling;
    // let siibling=child.nextElementSibling;
    siibling.style.color = "blue";
}