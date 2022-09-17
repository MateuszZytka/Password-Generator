// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  //if max is not defined, use a range from 0 to min
  if (!max) {
    max = min
    min = 0
  }

  let rand = Math.random()
  return Math.floor(min * (1 - rand) + rand*max)
}

function randomItem(array) {
  return array[randomInt(array.length)]
}

//function to generate password
//ask for password length and characters to be included

let generatePassword = function (){

    //password length is defined by user's input
    let passwordLength = window.prompt("Choose a password length between 8-128")

    //if the input for password length is too short/long, an alert pops up
    if(passwordLength< 8 || passwordLength > 128){
      alert("Chosen password length is not acceptable!")
      return
    }

    //if the input for password length is not a number, an alert pops up
    if (isNaN(passwordLength)) {
      alert("Input is not a number!")
      return}

  //setting character options
    let list = []
    const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const upperCase = ["A", "B" ,"C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const numeric = ["0","1","2","3","4","5","6","7","8","9"]
    const specialCharacters = ["!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
    
    // confirm if each character type is being used
    let isVariableChosen = false;

  while(!isVariableChosen){
    //prompt for use of lower characters
    const useLower = window.confirm("Would you like to use lowercase letters?")
    if(useLower){
      list.push(lowerCase)
      isVariableChosen = true
    }

//prompt for use of upper characters
      let useUper = window.confirm("Would you like to use uppercase letters?")
      if(useUper){
        list.push(upperCase)
        isVariableChosen = true;
      }

//prompt for use of numeric characters
      let useNumeric = window.confirm("Would you like to use Numbers?")
      if(useNumeric){
        list.push(numeric)
        isVariableChosen = true;
      }
      
//prompt for use of special characters
      let useSpecChar = window.confirm("Would you like to use special characters?")
      if(useSpecChar){
        list.push(specialCharacters)
        isVariableChosen = true;
      }
  }

  //empty string that characters will be logged to
  let generatedPassword = ""

  for (let i = 0; i < passwordLength; i++){
    //chooses a random array from the selected choices(list)
    let chosenArray = randomItem(list)
    //chooes a random character from the previously randomly chosen array
    let randomChar = randomItem(chosenArray)
    // the "+= randomChar" adds each character as it is logged to the generatePassword string
    generatedPassword += randomChar
  }
//returns generatedPassword value to function that was called (generatepassword)
return generatedPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword)
