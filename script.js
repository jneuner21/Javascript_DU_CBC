// Assignment Code
var generateBtn = document.querySelector("#generate");
var modal = document.querySelector("#Modal")

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  //passwordText.value = password;
  modal.style.display = "block";

}

generateBtn.addEventListener("click", writePassword);

var closeButton = document.querySelector("#Close")

closeButton.addEventListener("click", close)

function close(){
  modal.style.display = "none"
}


