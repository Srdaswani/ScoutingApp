var highlightedButtons = {};

// Array with stuff
const questions = ["Throwing", "Parking", "Hang", "Trap"]

// Annoying button logic
function addition(element) {
    // alert(element.id);
    document.getElementById(element.id + "input").value = parseInt(document.getElementById(element.id + "input").value) + 1;
}

function subtraction(element) {
    document.getElementById(element.id + "input").value = parseInt(document.getElementById(element.id + "input").value) - 1;
}

function inAlliance(element){inAllianceString = element.includes("yes") === true ? "Yes": "No";}

// html is mid 
function getInputValue(element) {
    var inputVal = document.getElementById(element + "input").value;
    // alert(inputVal);
    return inputVal;
}

function getQRCodeString() {
    let qrCodeString = "";
    for (i = 0; i < questions.length; i++) {
        qrCodeString += getInputValue(questions[i]) + "|";
    }
}

function generateQRCode() {
    let qrCodeString = "";
    for (i = 0; i < questions.length; i++) {
        qrCodeString += getInputValue(questions[i]) + "|";
    }
    // alert(qrCodeString);
    document.getElementById("qrcode").innerHTML = "";
    new QRCode(document.getElementById("qrcode"), qrCodeString);
}
    function highlightButton(sectionId, button) {
        var currentHighlightedButton = highlightedButtons[sectionId];
        if (currentHighlightedButton) {currentHighlightedButton.classList.remove('highlighted');}
        button.classList.add('highlighted');
        highlightedButtons[sectionId] = button;
}