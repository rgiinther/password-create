
// Assignment code here
var generateBtn = document.querySelector("#generate");


//variables for password
var upperLetters = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,Z,Y,Z";
var lowerLetters = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
var numbers = "1,2,3,4,5,6,7,8,9,0";
var symbols = "!,@,#,$,%,^,&,*,(,),_,+";
var lengthPrompt;
var numberPrompt;
var upperPrompt;
var lowerPrompt;
var symbolPrompt;

// add prompts for user preference

function chooseLength() {
  lengthPrompt = window.prompt("How many characters would you like? (8-128 characters)");
      console.log(lengthPrompt);
  //conditions for password length
      if (lengthPrompt < 8) {
        window.alert("Password must be within 8-128 characters.");
        chooseLength();
      } else if (length > 128) {
        window.alert("Password must be within 8-128 characters.")
        chooseLength();
      }
      else{
        window.alert("The following prompts will ask for your password preferences.")
      }
      return lengthPrompt;
}
// Conditions for numbers
function chooseNumber() {
  numberPrompt = window.prompt("Would you like numbers: 'yes or no'? (0123456789)");
  if (numberPrompt === null || numberPrompt === "") {
    window.alert("Only answer yes or no");
    chooseNumber();
  }
  else if (numberPrompt === "yes") {
    numberPrompt = true; 
    return numberPrompt;
  }
  else if (numberPrompt === "no") {
    numberPrompt = false;
    return numberPrompt;
  }
  else {
    window.alert("Only answer yes or no")
  }
  return numberPrompt;
} 
//conditions for uppercase letters
function chooseUppercase() {
  upperPrompt = window.prompt("Would you like uppercase letters: 'yes or no'?");
  if (upperPrompt === null || upperPrompt === "") {
    window.alert("Only answer yes or no");
    chooseUppercase();
  }
  else if (upperPrompt === "yes") {
    upperPrompt = true; 
    return numberPrompt;
  }
  else if (upperPrompt === "no") {
    upperPrompt = false;
    return upperPrompt;
  }
  else {
    window.alert("Only answer yes or no")
  }
  return upperPrompt;
}
// conditions for symbols
function chooseSymbol(){
  symbolPrompt = window.prompt("Would you like special symbols: 'yes or no'? (!@#$%^&*(,)_+)");
  if (symbolPrompt === null || symbolPrompt === "") {
    window.alert("Only answer yes or no");
    chooseSymbol();
  }
  else if (symbolPrompt === "yes") {
    symbolPrompt = true; 
    return numberPrompt;
  }
  else if (symbolPrompt === "no") {
    symbolPrompt = false;
    return symbolPrompt;
  }
  else {
    window.alert("Only answer yes or no")
  }
  return symbolPrompt;
}

    

// Write password to the #password input
function writePassword() {
  var password2 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password2;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
