// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function to generate password
//ask for password length and characters to be included

function generatePassword(){
  let passwordLength = window.prompt("Choose a password length between 8-128")
  while(passwordLength< 8 || passwordLength > 128 || passwordLength == NaN){
    prompt("Chosen password length is not acceptable! \n Please choose a password length between 8-128")
  }
//setting character options
  let password = []
  const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const upperCase = ["A", "B" ,"C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const numeric = [0,1,2,3,4,5,6,7,8,9];
  const specialCharacters = ["!","\"","#","$","%","&","\'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
  
  // confirm if each character type is being used
  let isVariableChosen = false;

while(!isVariableChosen){
  const useLower = window.confirm("Would you like to use lowercase letters?")
  if(useLower){
    password = password.concat(lowerCase)
    isVariableChosen = true
  }
  console.log(password);

    let useUper = window.confirm("Would you like to use uppercase letters?")
    if(useUper){
      password = password.concat(upperCase);
      isVariableChosen = true;
    }
    console.log(password);

    let useNumeric = window.confirm("Would you like to use Numbers?")
    if(useNumeric){
      password = password.concat(numeric);
      isVariableChosen = true;
    }

    console.log(password);

    let useSpecChar = window.confirm("Would you like to use special characters?")
    if(useSpecChar){
      password = password.concat(specialCharacters);
      isVariableChosen = true;
    }

    console.log(password);
}

let randomPassword = []



console.log(chosenPassword)

}

generatePassword ()