function myFunction() {
    document.getElementById("menu").classList.toggle("display-menu")
}

function validation(form) {

    var _name = document.getElementById("name").value;
    var _emailaddress = document.getElementById("email-address").value;
    var _mobilenumber = document.getElementById("mobile-number").value;
    var _country = document.getElementById("country").value;
    var _message = document.getElementById("message").value;

    alert("Checking Form.....Please Wait");
    fail = validateName(_name);
    fail = fail + validateEmailAddress(_emailaddress);
    fail = fail + validateMobileNumber(_mobilenumber);
    fail = fail + validateCountry(_country);
    fail = fail + validateMessage(_message);


    if (fail == "") {
        return true;
    } else {
        alert(fail);
        return false;
    }
}

function validateName(field) {
    if (field == "")
        return "No Name entered \n";
    else
        return "";
}

function validateEmailAddress(field) {
    if (!(/^\S+@\S+\.\S+$/gi).test(field)) {
        return "Invalid Email address \n";
    } else if (field == "")
        return "No Email address was entered \n";
    else
        return "";
}

function validateMobileNumber(field) {
    if (field == "") {
        return "No Number was entered \n";
    } else if (!(/^[0-9]\d{9}$/).test(field)) {
        return "Invalid Mobile Number!!! should contain numbers \n";
    } else if ((/^[0-9]\d{9}$/).test(field) > 10) {
        return "Invalid!!! should contain 10 numbers \n";
    } else {
        return "";
    }
}

function validateCountry(field) {
    if (field == "")
        return "Nothing was choosen \n";
    else
        return "";
}

function validateMessage(message) {
    if (message == "")
        return "No message entered \n";
    else
        return "";
}