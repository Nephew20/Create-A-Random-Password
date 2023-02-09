// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialChar = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', "`", '{', '|', "'", '}', '~', ' '];

// Write password to the #password input
function writePassword() {
  var choice = window.confirm("Would you like to generate a password?");
  
  if (choice == false) {
    alert("Click the Generate Password Button Again");
  } else if (choice == true) {
    var userChoice = prompt("Choose how many characters you would like? Choose between 8-128");
  
    if (userChoice < 8) {
      prompt('Not Enough Characters. Choose between 8 - 128');
    } else if (userChoice > 129) {
      prompt('Too many Characters. Choose between 8 - 128');
    }   

    console.log(userChoice)
  }  
  
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
