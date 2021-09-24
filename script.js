
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(alphaCap, alphaLow, numbers, specialChar);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Declaring variables 
var lettCap = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P',
                'Q','R','S','T','U','V','W','X','Y','Z'];

var lettLow = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',
                'q','r','s','t','u','v','w','x','y','z'];

var nums    = ['0','1','2','3','4','5','6','7','8','9'];

var speChar = ['!','@','#','$','%','^','&','*','(',')'];

var passLength;

var alphaCap;

var alphaLow;

var numbers; 

var specialChar;

//Promt user function
function choises(){
    passLength = prompt('Password must be between 8 to 128 characters.How long do you want it to be? ', "");
    if(passLength >= 8 && passLength <= 128){
         alphaCap = window.confirm('Would you like your password to have uppercases?');
         alphaLow = window.confirm('Would you like your password to have lowercases?');
         numbers  = window.confirm('Would you like your password to have number?');
         specialChar = window.confirm('Would you like your password to have special characters?');
    }else if (passLength != null){
        alert('Sorry, password needs to be between 8 and 128 characters');
        choises();
    }
}
choises();

//Now let's generate password based on the choices of our user 
function generatePassword(alphaCap, alphaLow, numbers, specialChar){
    
    var pass = "";
   
   for(var i = 0; i < passLength; i++){
       var chosen = false;
        while(chosen === false){
            
            var num = Math.floor(Math.random() * 4);

            if (num === 0 && alphaCap){
                pass += lettCap[Math.floor(Math.random()*26)];
                chosen = true; 
            }else if (num === 1 && alphaLow){
            pass += lettLow[Math.floor(Math.random()*26)]; 
            chosen = true;
            }else if (num === 2 && numbers){
                pass += nums[Math.floor(Math.random()*10)]; 
                chosen = true;
            }else if(num === 3 && specialChar){
                pass += speChar[Math.floor(Math.random()*10)]; 
                chosen = true;
            }
    
        }

    } return pass;
}  


