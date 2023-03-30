// Assignment Code
var generateBtn = document.querySelector("#generate");

//will have to make arrays of lower and uper letters, numbers, and symbols
var charVariables = {
  lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",],
  uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",],
  numeric: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",],
  specialCharacters: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "{", "}", "[", "]", "/", "|", ":", ">", "<", ".", ",", "?",],
}

//Make generatePasswordfunction
//prompt for pass length - is a number
//if statement - if number is above 8 && below 128
//confirm for lowercase, uppercase, numeric and special characters
function generatePassword () {
  var password = "";
  var passwordLength = prompt("Between 8-128, how many characters would you like your password to be?");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters.");
    return;
  }
  var lowercase = confirm("Would you like to include lowercase letters?");
  var uppercase = confirm("Would you like uppercase letters?");
  var numeric = confirm("Wouild you like to include any numbers?");
  var specialCharacters = confirm("Would you like to include special characters?");
  if (!lowercase && !uppercase && !numeric && !specialCharacters) {
    alert("You must select at least one character type");
    return;
  }

//store their response in a variable
//if statement for each confirm and if it is a yes or true I would push or add random characters to a big array of all characters selected so far (after each confirim it would update pass being)
//for loop while I is less than there answer for num length prompt (this way for loop will run for each charactere)
//in this for loop we would randly pull characters from the big array
var characterTypes = [];

if (lowercase) {
  characterTypes = characterTypes.concat(charVariables.lowercase);
  console.log(characterTypes)
}
if (uppercase) {
  characterTypes = characterTypes.concat(charVariables.uppercase);
}
if (numeric) {
  characterTypes = characterTypes.concat(charVariables.numeric);
}
if (specialCharacters) {
  characterTypes = characterTypes.concat(charVariables.specialCharacters);
}
console.log(characterTypes)
for (var i = 0; i < passwordLength; i++) {
  //assign variable = to array at math.floor, math.random times the length of the array
//pull random characters from the array using math.random
  var rand = Math.floor(Math.random() * characterTypes.length)
  console.log(rand)
  var character = characterTypes[rand];
  password += character;
  }
  return password;
}

//once done, push to array and use .join 
//have a variable declaried above for loop
//that variable += theRandomChar
//return the password var
//is not required to use all 3 character requirements; it is ok to only get one of the 3 returned
//dont touch html or css; just use js


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

