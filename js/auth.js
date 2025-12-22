const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwIKlC-cr-MMWa6GA4bqLlKuRFLwS-T3jJzBr0IrwlLOYEaLNH_e47Co_fXyotKcAfhIA/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}
