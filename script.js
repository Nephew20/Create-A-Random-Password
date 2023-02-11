// Assignment Code
var generateBtn = document.querySelector("#generate");
var Char = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var SpecialChar = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', "`", '{', '|', "'", '}', '~', ' '];
var Num = ['1','2','3','4','5','6','7','8','9','0']

// Write password to the #password input
function writePassword() {
  var choice = window.confirm("Would you like to generate a password?");
   
  if (choice == false) {
    alert("Click the Generate Password Button Again");
  } else if (choice == true) {
    var choiceChar = prompt("Choose how many characters you would like? Choose between 8-128");
    
    // Making sure that the user inputs choice of 8-128 characters
    if (choiceChar < 8) {
      alert('Not Enough Characters. Choose between 8 - 128');
      writePassword();
    } else if (choiceChar > 129) {
      alert('Too many Characters. Choose between 8 - 128');
      writePassword();
    }
  }
  
  function generatePassword() {
    var emptyPass = []
    randoomChar = Char[Math.floor(Math.random()*Char.length)];
    randoomSpecChar = SpecialChar[Math.floor(Math.random()*SpecialChar.length)];
    randoomNum = Num[Math.floor(Math.random()*Num.length)];

    return randoomChar
    // for (let x = 0; x <= userChar; x++) {
      
      
    //   return randoomChar;
    // }
    
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
