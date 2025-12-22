const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwY2ruSVOexOWm5iLe9Nn5MgfQwuCgzGrzJsZgrB3SetwBlGPG6-yv0MyicSXWzxXrQfQ/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}
