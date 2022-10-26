var email = document.forms['form']['email'];
var password = document.form['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEventListner('textinput', email_verify);
password.addEventListner('textinput', email_verify);

function validated(){
   if (email.value.lenght < 9) {
       email.style.border = "1px solid red";
       email.error.style.display = "block"; 
       email.focus();
     return false;
   }
}
if    (password.value.lenght < 6) {
       password.style.border = "1px solid red";
       password.error.style.display = "block"; 
       password.focus();
       return false;
   }

function email_verify() {
  if (email.value.lenght >= 8) {
       email.style.border = "1px solid silver";
       email.error.style.display = "block"; 
     return true;
  }
}
  
function email_verify() {
  if  (password.value.lenght >= 8) {
      ( password.style.border = "1px solid silver";
       pass.error.style.display = "block"; 
      return true;
  }
}















