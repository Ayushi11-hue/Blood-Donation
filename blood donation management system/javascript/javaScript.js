function name()
{
  //if input empty
  if(document.querySelector(".nameFull").value=="")
  {
    alert("Name is a mandatory");
  }

  if(document.querySelector(".state").value=="")
  {
    alert("State is a mandatory");
  }
  if(document.querySelector(".city").value=="")
  {
    alert("City is a mandatory");
  }
  if(document.querySelector(".no").value=="")
  {
    alert("Phone Number is a mandatory");
  }
  if(document.querySelector(".mail").value=="")
  {
    alert("Email is a mandatory");
  }
  if(document.querySelector(".pass").value=="")
  {
    alert("Creating password is a mandatory");
  }
  if(document.querySelector(".cnfpass").value=="")
  {
    alert("Confirm your Password");
  }
  //input format check
  var pHno=document.querySelector(".no").value;
  if((document.querySelector(".no").value!=="")&&(isNaN(pHno)||pHno.length!=10))
  {
    alert("Incorrect Phone Number");
  }
  var pass=document.querySelector(".pass").value;
  var cnfpass=document.querySelector(".cnfpass").value;
  if(pass!==cnfpass)
  {
    alert("Password doesn't match");
  }
  var email=document.querySelector(".mail").value;
  var atpos=email.indexOf("@");
  var dotpos=email.lastIndexOf(".");
  if((atpos<1)||(dotpos-atpos)<2)
  {
    alert("Incorrect Email");
  }


}
document.querySelector("button").addEventListener("click",name);
