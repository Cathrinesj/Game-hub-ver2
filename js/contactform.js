const form = document.querySelector("form");
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const messageSuccess = document.querySelector("#messageSuccess");
const button = document.querySelector("button");

function checkIfButtonDisabled() {
  if (
    checkLength(fullName.value, 1) &&
    validateEmail(email.value) &&
    checkLength(message.value, 20)
  ) {
    button.disabled = false;
  } else {
    messageSuccess.innerHTML = "";
    button.disabled = true;
  }
}

fullName.addEventListener("keyup", checkIfButtonDisabled);
email.addEventListener("keyup", checkIfButtonDisabled);
message.addEventListener("keyup", checkIfButtonDisabled);

function submitForm(event) {
  event.preventDefault();
  messageSuccess.innerHTML =
    '<div class="message">Your message has been sent</div>';
  form.reset();
}

form.addEventListener("submit", submitForm);

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
