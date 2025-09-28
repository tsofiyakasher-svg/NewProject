if (!localStorage.getItem("users")) {
  const users = {
    "alice": "1234",
    "bob": "qwerty",
    "noa": "password"
  };
  localStorage.setItem("users", JSON.stringify(users));
}

// let username = document.getElementById("username")
// let password = document.getElementById("password")
// if(username==users.JSON)
    document.getElementById("loginBtn").addEventListener("click", function(event) {
      event.preventDefault(); // stop form reload

      let username = document.getElementById("username").value.trim();
      let password = document.getElementById("password").value;

      // Get stored users
      let users = JSON.parse(localStorage.getItem("users"));

      if (users[username] && users[username] === password) {
        localStorage.setItem("username", username); // save logged in user
        alert("hello!") // window.location.href = "home.html"; // go to homepage
      } else {
        document.getElementById("error").textContent = "Invalid username or password!";
      }
    });
  
