// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var characters = {
    specialCharacters : [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '}', '~'],
    upperCase : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K','L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V','W', 'X', 'Y', 'Z',],
    lowerCase : ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i','j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'w', 'x', 'y', 'z', ],
    numeric : ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  }
  // Established an array for each of the different characters to use for the password and a boolean on/off switch

  var passLength = window.prompt('How long would you like your password to be?');
  // Establishes a variable to assign the password length

  if (passLength <=7 || passLength >= 129 || !passLength) {
    window.alert('Please enter a password length between 8 and 128 character');
    return;
  } 
  // Establishes the minimum and maximum password length

  var combinedCharacters = [];
  // Creates a pool for remaining characters
  
  var specialCharacterSelection = window.confirm('Would you like your password to contain special characters?');
    if (specialCharacterSelection) {
      combinedCharacters = combinedCharacters.concat(characters.specialCharacters);
    }

  var upperCaseSelection = window.confirm('Would you like your password to contain upper case characters?');
    if (upperCaseSelection) {
      combinedCharacters = combinedCharacters.concat(characters.upperCase);
    }

  var lowerCaseSelection = window.confirm('Would you like your password to contain lower case characters?');
    if (lowerCaseSelection) {
      combinedCharacters = combinedCharacters.concat(characters.lowerCase);
    }

  var numericSelection = window.confirm('Would you like your password to contain numbers?');
    if (numericSelection) {
      combinedCharacters = combinedCharacters.concat(characters.numeric);
    }
  // Moves contents from attributes under characters to charactersArray based on user input

  function generatePassword() {
    var passwordArray = []; 
    passwordArray.length = passLength
    // Provides an array to splice each character into based on passLength value
    for (i=0; i < passLength; i++) {
      var combinedCharactersIndex = Math.floor((Math.random()*combinedCharacters.length));
      passwordArray.push(combinedCharacters[combinedCharactersIndex]);
      // Performs math.random to select a random element from the combinedCharacters and add it to a passwordArray
    } 
    var passString = passwordArray.join("");
    // Removes everything other than the characters from the passwordArray
    return passString;
  }
  
  var password = generatePassword();
  // Calls the generatePassword function

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);