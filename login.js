if (!localStorage.getItem("users")) {
  const users = {
    alice: "1234",
    bob: "qwerty",
    noa: "password",
  };
  localStorage.setItem("users", JSON.stringify(users));
}

// let username = document.getElementById("username")
// let password = document.getElementById("password")
// if(username==users.JSON)
document.getElementById("loginBtn").addEventListener("click", function (e) {
  e.preventDefault(); // stop form reload

  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value;

  // Get stored users
  let users = JSON.parse(localStorage.getItem("users") || {});

  if (users[username] && users[username] === password) {
    localStorage.setItem("username", username); // save logged in user
    alert("hello!"); // window.location.href = "home.html"; // go to homepage
  } else {
    document.getElementById("error").textContent =
      "Invalid username or password!";
  }
});

document.getElementById("signup").addEventListener("click", function () {
  window.location.href = "signup.html";
});

document
  .getElementById("forgotpassword")
  .addEventListener("click", function (e) {
    e.preventDefault(); // stop the link from reloading

    const forgotText = document.getElementById("forgotText");
    //like an on and of switch
    if (
      forgotText.style.display === "none" ||
      forgotText.style.display === ""
    ) {
      forgotText.style.display = "block";
    } else {
      forgotText.style.display = "none";
    }
  });
