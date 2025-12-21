const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby3lkiScNjQ9l38P9oBmuBkzeQawljEqNU6SdV05nM-TXeL4potFxPlvZiKdFx02fMD5g/exec";

function requireLogin() {
  if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "index.html";
}
