// Array of special characters to be included in password
var specialCharacters  = [  '@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];

// Array of numeric characters to be included in password
var numbers  = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCase  = [   'a',  'b',  'c',  'd',  'e',  'f',  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z'];

// Array of uppercase characters to be included in password
var upperCase  = [  'A',  'B',  'C',  'D',  'E',  'F',  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N',  'O',  'P',  'Q',  'R',  'S',  'T',  'U',  'V',  'W',  'X',  'Y',  'Z'];


// User prompts
function generatePassword() {

    var firstQuestion = confirm("Do you want uppercase characters in your password?");
  
    var secondQuestion = confirm("Do you want lowercase characters in your password?");
     
    var thirdQuestion = confirm("Do you want numbers in your password?");
  
    var fourthQuestion = confirm("Do you want special characters in your password?");
  
    var fifthQuestion = prompt("Please choose a length for your password. Recommended between 10 and 64 characters in length");
    

    if (!firstQuestion && !secondQuestion && !thirdQuestion && !fourthQuestion && (fifthQuestion < 10 || fifthQuestion > 64)) {
      alert("you must choose at least one parameter!");
      alert("Password must be between 8 and 128 characters!");
      writePassword();
      return;
    } else if (!firstQuestion && !secondQuestion && !thirdQuestion && !fourthQuestion) {
      alert("you must choose at least one parameter!");
      writePassword();
      return;
    } else if (fifthQuestion < 10 || fifthQuestion > 64) {
      alert("Password must be between 10 and 64 characters!");
      writePassword();
      return;
    }
  
 
    var userChoice = [];

    var passwordFinal = "";
  
//concatenate user input into random password
    if (firstQuestion) {
      userChoice = userChoice.concat(upperCase);
    
    }
    if (secondQuestion) {
      userChoice = userChoice.concat(lowerCase);
  
    }
    if (thirdQuestion) {
      userChoice = userChoice.concat(numbers);
    
    }
    if (fourthQuestion) {
      userChoice = userChoice.concat(specialCharacters);

    }
    for (var i = 0; i < fifthQuestion; i++) {
      passwordFinal += userChoice[Math.floor(Math.random() * userChoice.length)];
      console.log(passwordFinal);
    }
    return passwordFinal;
  };



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