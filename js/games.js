const baseUrl = "https://juvz.no/wp-json/wc/store/products";
const productContainer = document.querySelector(".products");
const categories = document.querySelectorAll(".categories");

async function getProducts(url) {
  const response = await fetch(url);
  const products = await response.json();
  products.forEach(function (product) {
    productContainer.innerHTML += `<div class="games-text">
      <img src="${product.images[0].src}" alt="${product.name}"/>
      <h2>${product.price_html}</h2>
      <h2>${product.name}</h2>
      <a href="product.html?id=${product.id}" class="cta-small">View</a>
      </div>`;
  });
}

getProducts(baseUrl);

categories.forEach(function (category) {
  category.onclick = function (event) {
    let newUrl;
    if (event.target.id === "featured") {
      newUrl = baseUrl + "?featured=true";
    } else {
      const categoryChosen = event.target.value;
      newUrl = baseUrl + `?category=${categoryChosen}`;
    }
    productContainer.innerHTML = "";
    getProducts(newUrl);
  };
});
