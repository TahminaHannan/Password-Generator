// Array of special characters to be included in password
var specialCharacters = [  '@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [   'a',  'b',  'c',  'd',  'e',  'f',  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [  'A',  'B',  'C',  'D',  'E',  'F',  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N',  'O',  'P',  'Q',  'R',  'S',  'T',  'U',  'V',  'W',  'X',  'Y',  'Z'];



// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

var passwordLength = 12;
var password ="";

for (var i = 0; i <= passwordLength; i++){
  var randomNumber = Math.floor(Math.random() * specialCharacters.length);
  password +=
}
}

// Function to generate password with user input
function generatePassword() {


let length = prompt("How long would you like your password length? Choose from a number from 10 - 64 ")

let lowerCase = prompt("Do you want to include Lowercase");

let upperCase = prompt("Do you want to include Upercase");

let numericalFigure = prompt("Do you want to include Numerical figure");

alert("Okay so you want to include " +  specialCharacters + " and " +
 numericCharacters + " and " +  lowerCasedCharacters + " and " + upperCasedCharacters );




}



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);