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
    displayCart.innerHTML = `<div id="myCart" class="overlay"><div class="overlay-content"><i class="fas fa-times" onclick="closeBasket()"></i><p>Items: ${cartItemTotal} Total: NOK ${cartAmountTotal},- <a href="checkout.html" class="cta-small"> Checkout</a></div></div>`;
    document.getElementById("myCart").style.width = "100%";
  }
};

function closeBasket() {
  displayCart.innerHTML = "";
  document.getElementById("myCart").style.width = "0%";
}
