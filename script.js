var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var numeric = "0123456789".split("");
var specialCharacter = "!@#$%^&*?+".split("");

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // document.querySelector("#password").value=password

  passwordText.value = password;
}

function generatePassword() {
  var password = "";
  var passwordlength = parseInt(prompt("password size?"));
  console.log(passwordlength);

  if (passwordlength >= 8 && passwordlength <= 128) {
    var isLowerCase = confirm("is this lowecase?");
    console.log(isLowerCase);
    var isUpperCase = confirm("is this uppercase?");
    console.log(isUpperCase);
    var isNumeric = confirm("is this numeric?");
    console.log(isNumeric);
    var isSpecialCharacter = confirm("is this a special character?");
    console.log(isSpecialCharacter);

    if (isLowerCase) {
      password =
        password + lowerCase[Math.floor(Math.random() * lowerCase.length)];
    }
    if (isUpperCase) {
      password =
        password + upperCase[Math.floor(Math.random() * upperCase.length)];
    }
    if (isNumeric) {
      password = password + numeric[Math.floor(Math.random() * numeric.length)];
    }
    if (isSpecialCharacter) {
      password =
        password + specialCharacter[Math.floor(Math.random() * numeric.length)];
    }

    var remaining = passwordlength - password.length ;
    for (var i = 0; i < remaining; i++) {
      if (isLowerCase) {
        password =
          password + lowerCase[Math.floor(Math.random() * lowerCase.length)];
      }
      if (isUpperCase) {
        password =
          password + upperCase[Math.floor(Math.random() * upperCase.length)];
      }
      if (isNumeric) {
        password =
          password + numeric[Math.floor(Math.random() * numeric.length)];
      }
      if (isSpecialCharacter) {
        password =
          password +
          specialCharacter[Math.floor(Math.random() * numeric.length)];
      }
    }
  } else {
    alert("invalid password length");
  }
  return password.substring(0,passwordlength)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//document.querySelector("#generate").addEventListener("click", writePassword);
