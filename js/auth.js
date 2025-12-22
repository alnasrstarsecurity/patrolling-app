const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx8lnQh5Y1NfP_GWPI5IvRN_SjWqKesDYwd0kklW0zB8R0U5RXmTCLoPeE9T9TBMh4W/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}
