var generateBtn = document.querySelector("#generate");
var modal= document.querySelector("#Modal")

var lowerCase= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numeric= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialCharacter= ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "_", "~"]

var lowerCaseBox= document.querySelector("#lowerCase:checked") == null;
var upperCaseBox= document.querySelector("#upperCase:checked") == null;
var numericBox= document.querySelector("#numeric:checked") == null;
var specialCharacterBox= document.querySelector("#specialCharacters:checked") ==null;

var closeButton = document.querySelector("#Close")

//var randomChoice = ComputerChoice[index];

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //passwordText.value = password;
  modal.style.display = "block";

}



generateBtn.addEventListener("click", writePassword);
closeButton.addEventListener("click", close);
generateCriteria.addEventListener("click", close);

function close(){
  modal.style.display = "none"
}


