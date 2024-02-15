var highlightedButtons = {};
var completethrowstring = "";
var parkingstring =  "";
var trapscorestring = "";
var whereonchainstring = "";

function completethrow(element) {
    completethrowstring = element.includes("yes") === true ? "Yes": "No";
}

function parking(element) {
    parkingstring = element.includes("yes") === true ? "Yes": "No";
}

function trapscore(element) {
    trapscorestring = element.includes("yes") === true ? "Yes": "No";
}

function whereonchain(element) {
    if (element.includes("Left")) {
        whereonchainstring = "Left";
    }
    else if (element.includes("Right")) {
        whereonchainstring = "Right";
    }
    else {
        whereonchainstring = "No";
    }
}

// Array with stuff
const questions = ["hang"]

// Annoying button logic
function addition(element) {
    // alert(element.id);
    document.getElementById(element.id + "input").value = parseInt(document.getElementById(element.id + "input").value) + 1;
}

function subtraction(element) {
    document.getElementById(element.id + "input").value = parseInt(document.getElementById(element.id + "input").value) - 1;
}

// html is mid 
function getInputValue(element) {
    var inputVal = document.getElementById(element + "input").value;
    // alert(inputVal);
    return inputVal;
}

function generateQRCode() {
    let qrCodeString = "";
    for (i = 0; i < questions.length; i++) {
        qrCodeString += getInputValue(questions[i]) + "|";
    }
    qrCodeString+= completethrowstring + "|" + parkingstring + "|" + whereonchainstring + "|" + trapscorestring;
    document.getElementById("qrcode").innerHTML = "";
    new QRCode(document.getElementById("qrcode"), qrCodeString);
}
    function highlightButton(sectionId, button) {
        var currentHighlightedButton = highlightedButtons[sectionId];
        if (currentHighlightedButton) {currentHighlightedButton.classList.remove('highlighted');}
        button.classList.add('highlighted');
        highlightedButtons[sectionId] = button;
}