var passwordLowercase = "";
var passwordUppercase = "";
var passwordNumeric = "";
var passwordSpecial = "";
var currentPassword = "";

// Get references to the #generate element
function generatePassword() {
  var passwordLength = "";
  var passwordString = "";
  passwordLength = window.prompt("How long do you want your password to be? Enter a number between 8 and 128.")
  console.log(passwordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert('Please enter a number between 8 and 128.');
    var passwordLength = window.prompt('Enter a number between 8 and 128.');
  }
  var passwordLowercase = window.confirm("Do you want to include lowercase in your password?  Click OKAY for Yes and CANCEL for NO.");
  console.log(passwordLowercase);
  var passwordUppercase = window.confirm("Do you want to include uppercase in your password?  Click OKAY for Yes and CANCEL for NO.");
  console.log(passwordUppercase);
  var passwordNumeric = window.confirm("Do you want to indclude numeric values in your password? Click OKAY for YES and CANCEL for NO.");
  console.log(passwordNumeric);
  var passwordSpecial = window.confirm("Do you want to include special characters in your password?  Click OKAY for YES and CANCEL for NO.");
  console.log(passwordSpecial);