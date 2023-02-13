// Assignment Code
var generateBtn = document.querySelector("#generate");

// List of the all the characters being used
var Char = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var SpecialChar = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', "`", '{', '|', "'", '}', '~', ' '];
var Num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

// Write password to the #password input
function writePassword() {
  var choice = window.confirm("Would you like to generate a password?");

  if (choice == false) {
    alert("Click the Generate Password Button Again");
  } else if (choice == true) {
    var choiceLen = prompt("Choose how many characters you would like? Choose between 8-128");

    // Making sure that the user inputs choice of 8-128 characters
    if (choiceLen < 8) {
      alert('Not Enough Characters. Choose between 8 - 128');
      writePassword();
    } else if (choiceLen > 129) {
      alert('Too many Characters. Choose between 8 - 128');
      writePassword();
    }
  }

  // Function to generate the password
  function generatePassword() {
    
    // Empty array to add the characters to 
    var emptyPass = []

    // Assignment variables for the users choices 
    var choiceChar = window.confirm("Would you like to have Uppercase letters?")
    var choiceSpec = window.confirm("Do you want special characters?")
    var choiceNum = window.confirm("Do you want to have numbers?")
    
    // Assignment variables for random spechial and number characters
    var randomSpecChar = SpecialChar[Math.floor(Math.random() * SpecialChar.length)];
    var randomNum = Num[Math.floor(Math.random() * Num.length)];
    
    if (choiceSpec == true) {
      emptyPass.push(randomSpecChar);
    }

    if (choiceNum == true) {
      emptyPass.push(randomNum);
    }
    
    // Iteration for pulling randam characters from the list 
    for (x=0; x <= choiceLen; x++) {
      var randomChar = Char[Math.floor(Math.random()*Char.length)];
      
      if (choiceChar == true) {
        upperChar = randomChar.toUpperCase();
        emptyPass.push(upperChar);
      } else {
        // lowerChar = randomChar.toLowerCase();
        emptyPass.push(randomChar);
      }
    }

    // Returns the string values from the empty array  
    return emptyPass.join("")

  }


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
