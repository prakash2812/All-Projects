function validationForm() {
    let address = document.getElementById("address");
    let name = document.getElementById("name");


    if (address.value.length < 5 || name.value < 5) {
        // if(address.value=="" || name.value==""){
        alert("Please enter atleast 5 charcs");
        name.focus();
        name.style.border = "2px solid red"
        return false;

    }
}


$(document).ready(function () {
    $('input1').click(function () {

        $('#theframe').remove();
    })
})



$(document).ready(function () {
    $('button1').click(function validationForm1() {

        if ($('#name').value == "" || $('#address').value == "") {
            alert("Please enter atleast 5 charcs");
            $('#name').focus();
            $('#name').css('border', "2px solid red");
            return false;

        }
    })
})