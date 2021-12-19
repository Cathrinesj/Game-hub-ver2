//Products newgames

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
    newProductContainer.innerHTML += `<div class="product-link"><a href="product.html?id=${product.id}">
      <img src="${product.images[0].src}" alt="${product.name}"/>
      <h2>${product.price_html}</h2>
      <h2>${product.name}</h2></div>`;
  });
}

//Products usedgames

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
    usedProductContainer.innerHTML += `<div class="product-link"><a href="product.html?id=${product.id}">
      <img src="${product.images[0].src}" alt="${product.name}"/>
      <h2>${product.price_html}</h2>
      <h2>${product.name}</h2></div>`;
  });
}

/*
//Tried several types of solutions like below

const baseUrl = "https://juvz.no/wp-json/wc/store/products";
const categories = document.querySelectorAll(".loadgames");
const sortedCatergory = document.querySelectorAll(".sortedCategory");

async function getProducts() {
  const response = await fetch(baseUrl);
  const products = await response.json();
  products.forEach(function (product) {
    sortedCatergory.innerHTML += `<div class="games-text">
      <img src="${product.images[0].src}" alt="${product.name}"/>
      <h2>${product.price_html}</h2>
      <h2>${product.name}</h2>
      <a href="product.html?id=${product.id}" class="cta-small">View</a>
      </div>`;
  });
}

getProducts();

sortedCatergory.forEach(function (category) {
  category.onload = function (event) {
    let newUrl;
    let usedUrl;
    if (event.target.id === "16") {
      newUrl = baseUrl + "?category=16";
    } else if (event.target.id === "17") {
      usedUrl = baseUrl + `?category=17`;
    }
    sortedCatergory.innerHTML = "";
    getProducts(newUrl, usedUrl);
  };
});*/
