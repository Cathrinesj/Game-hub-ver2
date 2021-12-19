const url = "https://juvz.no/wp-json/wc/store/products";
const newProductContainer = document.querySelector(".products");

async function getProducts() {
  try {
    const response = await fetch(url);
    const getResultsNew = await response.json();

    newProductContainer.innerHTML = "";

    createHTML(getResultsNew);
  } catch (error) {
    console.log(error);
    newProductContainer.innerHTML =
      "Seems to be a glitch here, we are workin on it!";
  }
}

getProducts();

function createHTML(products) {
  products.forEach(function (product) {
    newProductContainer.innerHTML += `<div class="product-link"><a href="product.html?id=${product.id}">
      <img src="${product.images[0].src}" alt="${product.name}"/>
      <h2>${product.price_html}</h2>
      <h2>${product.name}</h2></div>`;
  });
}

/*//Tried several types of solutions like below

const baseUrl = "https://juvz.no/wp-json/wc/store/products";
const loader = document.querySelector(".loader");
const sortedCatergory = document.querySelectorAll(".sortedCategory");

async function getProducts(url) {
  const response = await fetch(url);
  const products = await response.json();

  loader.innerHTML = "";

  products.forEach(function (product) {
    sortedCatergory.innerHTML += `<div class="games-text">
      <img src="${product.images[0].src}" alt="${product.name}"/>
      <h2>${product.price_html}</h2>
      <h2>${product.name}</h2>
      <a href="product.html?id=${product.id}" class="cta-small">View</a>
      </div>`;
  });
}

getProducts(baseUrl);

sortedCatergory.forEach(function (category) {
  category(function (event) {
    let newUrl;
    let usedUrl;
    if (event.target.dataset.category === "16") {
      newUrl = url + "?category=16";
    }
    if (event.target.dataset.category === "17") {
      usedUrl = url + `?category=17`;
    }
    getProducts(newUrl, usedUrl);
  });
});*/
