function hamburgerNav() {
  var hamburgerMenu = document.querySelector("nav");
  if (hamburgerMenu.style.display === "block") {
    hamburgerMenu.style.display = "none";
  } else {
    hamburgerMenu.style.display = "block";
  }
}

const cartButton = document.querySelector("#cartButton");
const cart = document.querySelector(".cart");
const cartTotal = document.querySelector(".fa-desktop");
let total = 0;
let count = 0;

cartButton.onclick = function () {
  count++;
  total += 199;
  cart.style.display = "inline";
  cart.innerHTML = ` ${total},-`;
  localStorage.setItem("total", total);
};

cartTotal.onclick = function () {
  if (cartTotal.style.display === "block") {
    cartTotal.style.display = "none";
  } else {
    cartTotal.style.display = "block";
    cartTotal.innerHTML = `Items: ${count} Total: NOK ${total},- <a href="basket.html" class="cta-small"> Checkout</a>`;
  }
};

/*function cartTotal() {
  const = cartTotal;
  if (cartTotal.style.display === "block") {
    cartTotal.style.display = "none";
  } else {
    cartTotal.style.display = "block";
    cartTotal.innerHTML = `Items: ${count} Total; NOK ${total},- <a href="../../basket.html" class="cta-small"> Checkout</a>`;
  }
}*/
