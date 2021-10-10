const form = document.querySelector("form");
const username = document.querySelector("#username");
const usernameError = document.querySelector("#usernameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
const confirmPassword = document.querySelector("#confirmPassword");
const confirmPasswordError = document.querySelector("#confirmPasswordError");
const accountSuccess = document.querySelector(".accountSuccess");

function validateForm(event) {
  event.preventDefault();

  if (checkLength(username.value, 1) === true) {
    usernameError.style.display = "none";
  } else {
    usernameError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(password.value, 7) === true) {
    passwordError.style.display = "none";
  } else {
    passwordError.style.display = "block";
  }

  if (checkLength(confirmPassword.value, 7) === true) {
    confirmPasswordError.style.display = "none";
  } else {
    confirmPasswordError.style.display = "block";
  }
  accountSuccess.innerHTML =
    '<a href=account.html class="accountMessage">You account is now open, check it out!</a>';
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
