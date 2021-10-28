//Products index page

const url = "https://juvz.no/gamehub/wp-json/wc/store/products";
const productContainer = document.querySelector(".productsnew");

async function getproducts() {
  try {
    const response = await fetch(url);
    const getResults = await response.json();
    createHTML(getResults);
  } catch (error) {
    console.log(error);
  }
}

getproducts();

function createHTML(products) {
  products.forEach(function (product) {
    productContainer.innerHTML += `<div class="product">
        <h2>${product.name}</h2>
        <img src="${product.images[0].src}" alt="${product.name}">
        </div>`;
  });
}
