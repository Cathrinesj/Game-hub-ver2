const form = document.querySelector("form");
const paymentmethod = document.querySelector("#paymentMethod");
const paymentError = document.querySelector("#paymentError");
const fullname = document.querySelector("#fullname");
const fullnameError = document.querySelector("#fullnameError");
const streetadress = document.querySelector("#streetadress");
const streetadressError = document.querySelector("#streetadressError");
const postcode = document.querySelector("#postcode");
const postcodeError = document.querySelector("#postcodeError");
const postarea = document.querySelector("#postarea");
const postareaError = document.querySelector("#postareaError");
const acceptterms = document.querySelector("#acceptterms");
const accepttermsError = document.querySelector("#accepttermsError");

function validateForm(event) {
  event.preventDefault();

  if (checkPayment(paymentmethod.value) === true) {
    paymentError.style.display = "none";
  } else {
    paymentError.style.display = "block";
  }

  if (checkLength(fullname.value, 1) === true) {
    fullnameError.style.display = "none";
  } else {
    fullnameError.style.display = "block";
  }

  if (checkLength(streetadress.value, 1) === true) {
    streetadressError.style.display = "none";
  } else {
    streetadressError.style.display = "block";
  }

  if (checkLength(postcode.value, 1) === true) {
    postcodeError.style.display = "none";
  } else {
    postcodeError.style.display = "block";
  }

  if (checkLength(postarea.value, 1) === true) {
    postareaError.style.display = "none";
  } else {
    postareaError.style.display = "block";
  }

  if (checkTerms(acceptterms.value) === true) {
    accepttermsError.style.display = "none";
  } else {
    accepttermsError.style.display = "block";
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

function checkPayment(value) {
  var paymentmethod = document.getElementsByName("paymentmethod");

  for (i = 0; i < paymentmethod.length, i++; ) {
    if (paymentmethod[i].checked) {
      return true;
    } else {
      return false;
    }
  }
}

function checkTerms(value) {
  var acceptterms = document.getElementsByName("acceptterms");

  for (i = 0; i < acceptterms.length, i++; ) {
    if (acceptterms[i].checked) {
      return true;
    } else {
      return false;
    }
  }
}
