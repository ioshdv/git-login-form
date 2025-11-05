document.getElementById("loginForm").onsubmit = function(e) {
  e.preventDefault();
  if(this.username.value === "admin" && this.password.value === "1234") {
    alert("Login OK");
  } else {
    alert("Error");
  }
};
