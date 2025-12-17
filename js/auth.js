const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby7TiikH0aSbAcXgPak6iBFkB2GJTTP24cQZyVX2mb472siK4hfj0KTASZexrduAby33A/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}
