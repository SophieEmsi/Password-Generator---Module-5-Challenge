// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


function getPasswordOptions() {
  var passwordLength = prompt("Select how many characters between 8 - 128 you would like your password to be");
    if (passwordLength < 8 || passwordLength > 128) {
     alert("Try again. Please enter number between 8 - 128")
    }
  
  var hasLowercase = confirm("Would you like Lowercase characters?")
  
  var hasUppercase = confirm("Would you like Uppercase characters?")
  
  var hasNumeric = confirm("Would you like Numeric characters?")
  
  var hasSpecial = confirm("Would you like Special characters?")

  if  (hasLowercase === false && hasUppercase === false && hasNumeric === false && hasSpecial === false) {
    alert("Please select at least one character type")
  }
 
  console.log(getPasswordOptions);

var passwordCharacters = {
  length: passwordLength,
  lowerCase: hasLowercase,
  upperCase: hasUppercase,
  numeric: hasNumeric,
  special: hasSpecial,
};

return passwordCharacters;

}

function generatePassword() {

  var options = getPasswordOptions ();
  console.log(options);

  var passwordSelection = [];
  

if (options.lowerCase) {
    for (i = 0; i < lowerCasedCharacters.length; ++i) {
        passwordSelection.push(lowerCasedCharacters[i]);
    }
} 
if (options.upperCase) {
    for (i = 0; i < upperCasedCharacters.length; ++i) {
    passwordSelection.push(upperCasedCharacters[i]);
    }
}
if (options.numeric) {
    for (i = 0; i < numericCharacters.length; ++i) {
    passwordSelection.push(numericCharacters[i]);
    }
}
if (options.special) {
    for (i = 0; i < specialCharacters.length; ++i) {
    passwordSelection.push(specialCharacters[i]);
    }
}
console.log(passwordSelection)

var finalPassword = []

for (i = 0; i < options.length; ++i) {
  var randomSelection = Math.floor(Math.random() * Math.floor(passwordSelection.length));
   finalPassword.push(passwordSelection[randomSelection])
}

  console.log(finalPassword);

  return finalPassword;
}

var generateBtn = document.querySelector('#generate');

function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);