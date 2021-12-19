const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const idProduct = params.get("id");

const url = "https://juvz.no/wp-json/wc/store/products/" + idProduct;

async function fetchProduct() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    const detailContainer = document.querySelector(".product-details");

    detailContainer.innerHTML = "";

    detailContainer.innerHTML += `<div class="product-spec">
  <div class="product-photo">
    <img src="${details.images[0].src}" alt="${details.name}" id= picture class="product-image"/>
    <div class="thumbnail">
      <div>
        <img src="${details.images[0].src}" alt="${details.name}" class="product-image"/>
      </div>
      <div>  
      <img src="${details.images[0].src}" alt="${details.name}" class="product-image"/>
      </div>
    </div>
  </div>
  <div class="product-buy">
      <h1>${details.name}</h1>
      <h2 id="price">${details.price_html}</h2>
      <div id="cartButton" class="cta-big">Buy</div>
      <div class="cta-small fas fa-heart">Favourite</div>
      <h3>Review:</h3>
      <h3>
      "I really enjoyed this one. If you are a real gamer, you will love it!"
      - Borgund101
      </h3>
    <div class="Product-text">
      <h2>Details:</h2>
      <p>${details.short_description}</p>
    </div>  
  </div>
  </div>`;
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML =
      "Seems to be a glitch here, we are working on it!";
  } finally {
  }
  try {
    const cartButton = document.querySelector("#cartButton");
    const basketCart = document.querySelector(".basketCart");

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
  } catch (error) {
    console.log(error);
  } finally {
  }
}

fetchProduct();

//We recommend

const recommendUrl = "https://juvz.no/wp-json/wc/store/products?category=22";
const recommendText = document.querySelector(".recommendText");
const recommendContainer = document.querySelector(".recommend");

async function getRecommended() {
  try {
    const responseRec = await fetch(recommendUrl);
    const getResultRecommended = await responseRec.json();
    createHTMLRec(getResultRecommended);
  } catch (error) {
    console.log(error);
    recommendContainer.innerHTML =
      "Seems to be a glitch here, we are workin on it!";
  }
}

getRecommended();

recommendText.innerHTML += `
    <h2>We recommend:</h2>`;

function createHTMLRec(recommended) {
  recommended.forEach(function (product) {
    recommendContainer.innerHTML += `
    <div>
      <a href="product.html?id=${product.id}">
      <div>
        <img src="${product.images[0].src}" alt="${product.name}" class="product-image"/>
      </div>
      <h2>${product.price_html}</h2>
      <h2>${product.name}</h2>
    </div>`;
  });
}
