function myFormValidation()
{
  var status = false;
 var pass = document.signupForm.password.value;
 var cnfPass = document.signupForm.cnfPassword.value;
 if(pass.length != cnfPass)
 {
   document.getElementById("cnfPass").innerHTML = "*must be match with password";
   status = false;
 }
 else
 {
   status = true;
 }


return status;
}

console.log("hello everyone");