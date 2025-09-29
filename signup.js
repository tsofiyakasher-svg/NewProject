// שומר את נתוני הטופס ב-LocalStorage ומציג אותם
function saveFormData() {
  const username = document.getElementById("sign").value;
  const password = document.getElementById("up").value;
  const confirmPassword = document.getElementById("up2").value;

  const savedDataDiv = document.getElementById("savedData");

  if (!username || !password || !confirmPassword) {
    alert("Please fill in all fields.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }
  let users = JSON.parse(localStorage.getItem("users")) || {};
  users[username] = password;
  localStorage.setItem("users", JSON.stringify(users));
  alert(`${username} was saved successfully`);
}

document.getElementById("button2").addEventListener("click", (e) => {
  e.preventDefault(); // stop form reload
  saveFormData();
});

document.getElementById("loginBtn").addEventListener("click", (e) => {
  e.preventDefault(); // also stop reload
  window.location.href = "login.html";
});
