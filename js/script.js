function hamburgerNav() {
  var hamburgerMenu = document.querySelector("nav");
  if (hamburgerMenu.style.display === "block") {
    hamburgerMenu.style.display = "none";
  } else {
    hamburgerMenu.style.display = "block";
  }
}

const displayCart = document.querySelector(".fa-desktop");
const cartAmountTotal = localStorage.getItem("total");
const cartItemTotal = localStorage.getItem("count");
const cart = document.querySelector(".cart");

cart.innerHTML = ` ${cartAmountTotal},-`;

displayCart.onclick = function () {
  if (displayCart.style.display === "block") {
    displayCart.style.display = "inline";
    displayCart.innerHTML = "";
  } else {
    displayCart.style.display = "block";
    displayCart.innerHTML = `Items: ${cartItemTotal} Total: NOK ${cartAmountTotal},- <a href="checkout.html" class="cta-small cta-checkout"> Checkout</a>`;
  }
};
