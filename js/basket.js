const cartButton = document.querySelector("#cartButton");
const basketCart = document.querySelector(".basketCart");
const checkOut = document.querySelector(".checkOut");

checkOut.innerHTML = ` Number of items: ${cartItemTotal} <h2>Total: ${cartAmountTotal},-</h2>`;

let total = 0;
let count = 0;

cartButton.onclick = function () {
  count++;
  total += 199;
  basketCart.style.display = "inline";
  basketCart.innerHTML = ` ${total},-`;
  localStorage.setItem("total", total);
  localStorage.setItem("count", count);
};
