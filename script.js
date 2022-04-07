
// Assignment code here
var generateBtn = document.querySelector("#generate");


//variables for password
    var upperletters = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,Z,Y,Z";
    var lowerLetters = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
    var numbers = "1,2,3,4,5,6,7,8,9,0";
    var symbols = "!,@,#,$,%,^,&,*,(,),_,+";

    
      /*var preferences = window.prompt("How many characters would you like? (8-128)");
  var character = window.prompt("Would you like special characters: 'yes or no'? (!@#$%^&*()_+)");
  var number = window.prompt("Would you like numbers: 'yes or no'? (0123456789)");
    console.log(preferences, character, number);*/

function writePassword() {



// Get references to the #generate element


// Write password to the #password input

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  document.getElementByClass("box");
  passwordText.value = password;

  box.appendChild(password);



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}