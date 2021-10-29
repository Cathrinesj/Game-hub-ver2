const detailContainer = document.querySelector(".product-details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const idProduct = params.get("id");

console.log(idProduct);

const url = "https://juvz.no/wp-json/wc/store/products/" + idProduct;

console.log(url);

async function fetchProduct() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);

    createHtml(details);
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML =
      "Seems to be a glitch here, we are workin on it!";
  } finally {
    console.log("Finally");
  }
}

fetchProduct();

function createHtml(details) {
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
      <div id="cartButton" class="cta-small fas fa-heart">Favourite</div>
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
}

//We recommend

const urlRec = "https://juvz.no/wp-json/wc/store/products?featured";
const recommendContainer = document.querySelector(".recommend");

console.log(urlRec);

async function getRecommand() {
  try {
    const recResponse = await fetch(urlRec);
    const GetResultsRec = await recResponse.json();

    console.log(getResultsRec);

    createHTMLUsed(GetResultsRec);
  } catch (error) {
    console.log(error);
    recommendContainer.innerHTML =
      "Seems to be a glitch here, we are workin on it!";
  }
}

getRecommand();

function createHTMLUsed(getResultsRec) {
  recommendContainer.innerHTML += `<div class="product-link">`;
}
