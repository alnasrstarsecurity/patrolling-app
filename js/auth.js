const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbydAeCCsW7MGoa0zur8Uawu3ivJG-jpB4Le6HDaGEqxzLEEL1znrEhIpmT-4_EGIRpqRA/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}
