function inc()
{
  if(document.querySelector(".inputtxt").value=="")
  {
    alert("Enter Login ID");
  }
  if(document.querySelector(".inputtxtp").value=="")
  {
    alert("Enter Login Password");
  }
  var loginId=document.querySelector(".inputtxt").value;
  var atpos=loginId.indexOf("@");
  var dotpos=loginId.lastIndexOf(".");
  if((isNaN(loginId))&&((atpos<1)||(dotpos-atpos)<2))
  {
    alert("Incorrect Email Id");
  }
}

document.querySelector(".loginSubmit").addEventListener("click",inc);

function wrong()
{
  if(document.querySelector(".inputtxts").value=="")
  {
    alert("Enter state");
  }
  if(document.querySelector(".inputtxtc").value=="")
  {
    alert("Enter city");
  }if(document.querySelector(".inputtxta").value=="")
  {
    alert("Enter area");
  }if(document.querySelector(".inputtxtg").value=="")
  {
    alert("Enter group");
  }
}


document.querySelector(".detSubmit").addEventListener("click",wrong);
