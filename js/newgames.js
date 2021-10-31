const urlNew = "https://juvz.no/wp-json/wc/store/products?category=16";
const newProductContainer = document.querySelector(".newProducts");

async function getNewProducts() {
  try {
    const response = await fetch(urlNew);
    const getResultsNew = await response.json();

    newProductContainer.innerHTML = "";

    createHTMLNew(getResultsNew);
  } catch (error) {
    console.log(error);
    newProductContainer.innerHTML =
      "Seems to be a glitch here, we are workin on it!";
  }
}

getNewProducts();

function createHTMLNew(newProducts) {
  newProducts.forEach(function (product) {
    newProductContainer.innerHTML += `<div class="games-text">
      <img src="${product.images[0].src}" alt="${product.name}"/>
      <h2>${product.price_html}</h2>
      <h2>${product.name}</h2>
      <a href="product.html?id=${product.id}" class="cta-small">View</a>
      </div>`;
  });
}
