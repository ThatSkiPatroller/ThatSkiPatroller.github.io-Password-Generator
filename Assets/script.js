// Assignment Code
var generateBtn = document.querySelector("#generate");  
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword(passwordLength, uppercase, lowercase, numeric, special) {
  const passCharacters = [];
  var password = "";
    if (uppercase) {
    passCharacters.push(uppercaseCharacters);
  } if (lowercase) {
    passCharacters.push(lowercaseCharacters);
  } if (numeric) {
    passCharacters.push(numericCharacters);
  } if (special) {
    passCharacters.push(specialCharacters);
  } for (i = 0; i < passwordLength; i++) {
    password = password + passCharacters[Math.floor(Math.random() * passCharacters.length)]();
    console.log(password);
  }
  return password;
};

// Find different characters
function numericCharacters () {
  let numericChar = Math.floor(Math.random() * 10);
  let char = numericChar.toString();
  return char;
};

function uppercaseCharacters () {
  let uppercaseChar = Math.floor(Math.random() * 26) + 65;
  let char = String.fromCharCode(uppercaseChar);
  return char;
};

function lowercaseCharacters () {
  let lowercaseChar = Math.floor(Math.random() * 26) + 97;
  let char = String.fromCharCode(lowercaseChar);
  return char;
};

function specialCharacters () {
  let specialChar = Math.floor(Math.random() * 15) + 32;
  let char = String.fromCharCode(specialChar);
  return char;
};

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  function getLength() {
    var lengthPrompt = parseInt(prompt("Enter a password length between 8 and 128 characters"));
    if (lengthPrompt < 8 || lengthPrompt > 128) {
      alert("Try again with a number less than 8 or greater than 128.")
      return getLength();
    }
    return lengthPrompt;
  }
// Prompts attached to button
  let length = getLength();
  let uppercase = confirm("Do you want your password to contain uppercase characters?");
  let lowercase = confirm ("Do you want your password to contain lowercase characters?");
  let numeric = confirm("Do you want your password to contain numeric characters?");
  let special = confirm("Do you want your password to contain special characters?");
  let displayPassword = writePassword(length, uppercase, lowercase, numeric, special);
  passwordText.textContent = displayPassword;
});