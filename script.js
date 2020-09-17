// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 // document.querySelector("#password").value=password

  passwordText.value = password;

}
function generatePassword(){
    var passwordlength=prompt("password size?")
    console.log(passwordlength)

    if(passwordlength >=8 && passwordlength <=128){
           
      var isLowercase= confirm("is this lowecase?")
           console.log (isLowercase)
      var isUppercase= confirm("is this uppercase?")
          console.log (isUppercase)
      var isNumeric= confirm("is this numeric?")
          console.log (isNumeric)
      var isSpecialCharacter= confirm("is this a special character?")
          console.log (isSpecialCharacter)
    } 
    else{
           alert("invalid password length")
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//document.querySelector("#generate").addEventListener("click", writePassword);
