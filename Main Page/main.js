
// Sidebar

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    // document.getElementById("page-top").style.marginLeft = "250px";
    
    
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("page-top").style.marginLeft= "0";
    
  }

  function collapse(){
    document.getElementById("mySidenav").style.width = "0";
  }


// Username Display

function unameInfo(){
  var x = localStorage.getItem("txt");
  document.getElementById("usrname").innerHTML = x
}

function logout() {
  window.location.href = "C:/Users/mnaveeduddin/Desktop/Bootstrap%20WebPage/Login%20Page/loginCerina.html"
  // alert("Logged Out Successfully")
}


  
