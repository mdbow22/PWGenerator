// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

function generatePassword() {
    //Ask user how many characters the password should be
    let pLength = prompt('How many characters for the password? (min 8, max 128)');

    //validate that the user followed the size restrictions
    while (pLength > 128 || pLength < 8 || isNaN(pLength)) {
        pLength = prompt('Password Length must be an integer between 8 and 128 characters.');
    }

    //Confirm what kinds of characters the user wants in their password
    let pUpper = confirm('Include uppercase characters?');
    let pDown = confirm('Include lowercase letters?');
    let numeral = confirm('Use numbers?');
    let special = confirm('Use special characters?');

    //Verify that there is at least one type of character allowed
    while (!(pUpper || pDown || numeral || special)) {
        alert('You did not allow any characters! Try again');
        pUpper = confirm('Include uppercase characters?');
        pDown = confirm('Include lowercase letters?');
        numeral = confirm('Use numbers?');
        special = confirm('Use special characters?');
    }

    //Arrays of available characters for passwords
    let alphaU = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let alphaL = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let numeric = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    let specArray = ['%', '$', '#', '@', '!', '?'];

    //Create an array of what characters are allowed based on user selection
    let choices = [pUpper && alphaU, pDown && alphaL, numeral && numeric, special && specArray].filter(Boolean);


    //Generate a random character from all available characters and add it to the password
    let passString = '';
    for (let i = 1; i <= pLength; i++) {
        let curChoice = choices[Math.floor(Math.random() * choices.length)];
        passString += curChoice[Math.floor(Math.random() * curChoice.length)];
    }

    //return the created password
    return passString;
}

function passwordLength() {

    return pLength;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);