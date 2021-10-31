const urlUsed = "https://juvz.no/wp-json/wc/store/products?category=17";
const usedProductContainer = document.querySelector(".usedProducts");

async function getUsedProducts() {
  try {
    const usedResponse = await fetch(urlUsed);
    const GetResultsUsed = await usedResponse.json();

    usedProductContainer.innerHTML = "";

    createHTMLUsed(GetResultsUsed);
  } catch (error) {
    console.log(error);
    usedProductContainer.innerHTML =
      "Seems to be a glitch here, we are workin on it!";
  }
}

getUsedProducts();

function createHTMLUsed(usedProducts) {
  usedProducts.forEach(function (product) {
    usedProductContainer.innerHTML += `<div class="games-text">
      <img src="${product.images[0].src}" alt="${product.name}"/>
      <h2>${product.price_html}</h2>
      <h2>${product.name}</h2>
      <a href="product.html?id=${product.id}" class="cta-small">View</a>
      </div>`;
  });
}
