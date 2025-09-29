const username = localStorage.getItem("username");
if (username) {
  //check if it exsist
  document.getElementById("greet").textContent = "hello " + username + "!";
}
