var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if ( username == "admin" && password == "password"){
  alert ("Login successfully");
  window.location = "admin.html"; // Redirecting to other page.
  return false;
  }
  else{
  attempt --;// Decrementing by one.
  alert("You have "+ attempt+" attempts left; after 3 attempts you will be locked out of the system. Please contact your administrator if you have forgotten your password.");
  // Disabling fields after 3 attempts.
  if( attempt == 0){
  document.getElementById("username").disabled = true;
  document.getElementById("password").disabled = true;
  document.getElementById("submit").disabled = true;
  return false;
}
}
}
