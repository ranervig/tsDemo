var targetNumber = 0; //this global variable will store the target number to be guessed in the Hi-Low Game
//1. Create an array called numberRanges for the following numbers 5,10,20
var numberRanges = [5, 10, 20];
//2. Use the numberRanges array to populate the topNumber dropdown list
function populateTopNumber(number) {
    var option = document.createElement("option");
    option.text = option.value = number;
    document.querySelector("#topNumber").add(option);
}
function getTargetNumber() {
    //3. The onChange event handler fires it will call this function. Get the selected value from the list using document.querySelector()
    var selectedNumber = document.querySelector("#topNumber").value;
    //console.log(selectedNumber);
    //4. Call the randomNumber function and pass it the chosen number as a parameter. Capture the retun value in targetNumber	
    targetNumber = randomNumber(selectedNumber);
}
function hiLowGame() {
    var inNumb = document.querySelector("#inputNumber").value;
    var outputDisplay = document.querySelector("#outResults");
    if (inNumb == targetNumber) {
        //6. display CORRECT!!!	
        outputDisplay.innerHTML = "CORRECT!!!";
    }
    else {
        if (inNumb < targetNumber) {
            //7. display HIGHER!
            outputDisplay.innerHTML = "HIGHER";
        }
        else {
            //8. display LOWER
            outputDisplay.innerHTML = "LOWER";
        }
    }
}
function randomNumber(inTopNum) {
    return Math.floor(Math.random() * inTopNum) + 1; //random number from 1 to inTopNum	
}
window.addEventListener("DOMContentLoaded", function (event) {
    numberRanges.forEach(populateTopNumber);
    document.querySelector("#topNumber").addEventListener("change", getTargetNumber);
    document.querySelector("#game").addEventListener("submit", function (event) {
        //prevent page reloading from submiting form
        event.preventDefault();
        //runs game when enter or button is pressed
        hiLowGame();
    });
    //reset the result area on reset
    document.querySelector("#game").addEventListener("reset", function () {
        document.querySelector("#outResults").innerHTML = "";
    });
});
