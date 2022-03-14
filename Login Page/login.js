function loginfunction(){

    var uname = document.getElementById("username").value;
    var pwd = document.getElementById("password").value;
    var filter =  /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,})+$/;
    
    if (uname==''){
        alert("Please Enter your Username")
    }
    else if(pwd=='')
{
    alert("enter the password");
}
    else if(!filter.test(pwd))
{
    alert("Password Must Contain: Atleast one Capital letter, Small letter & Number ");
}
    else
{
    var x =  localStorage.setItem("txt",uname);
    
    window.location.href = "C:/Users/mnaveeduddin/Desktop/Bootstrap%20WebPage/Main%20Page/main.html";

  }
  return x;
}