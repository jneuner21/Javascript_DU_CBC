var generateBtn = document.querySelector("#generate");
var modal= document.querySelector("#Modal")

var lowerCase= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numeric= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialCharacter= ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "_", "~"]

var closeButton = document.querySelector("#Close")

var randomizer = Math.floor(Math.random() * lowerCase.length)

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //passwordText.value = password;
  modal.style.display = "block";
}

generateBtn.addEventListener("click", writePassword);
closeButton.addEventListener("click", close);
generateCriteria.addEventListener("click", createPassword);

function createPassword(){
  var lowerCaseBox= document.getElementById("lowerCase").checked;
  var upperCaseBox= document.getElementById("upperCase").checked;
  var numericBox= document.getElementById("numeric").checked;
  var specialCharacterBox= document.getElementById("specialCharacters").checked;
  var sliderValue= document.getElementById("characterSlider").value
  var combinedArray= []
    if (lowerCaseBox) combinedArray= lowerCase.concat(combinedArray);
    if (upperCaseBox) combinedArray= upperCase.concat(combinedArray);
    if (numericBox) combinedArray= numeric.concat(combinedArray);
    if (specialCharacterBox) combinedArray= specialCharacter.concat(combinedArray);
   
    if (sliderValue >= 8 && sliderValue <= 128)
    var randomItem=""
    for(var i= 0; i< sliderValue; i++){
      randomItem= randomItem + combinedArray[Math.floor(Math.random() * combinedArray.length)]
    }
    close()
    
    document.querySelector("#password").textContent= randomItem
}

function close(){
  modal.style.display = "none"
}


