const API_URL = "https://dummyjson.com/products";
const productWrapper = document.querySelector(".product-wrapper");

async function fetchData(api) {
  let data = await fetch(api);
  data
    .json()
    .then((res) => createCard(res.products))
    .catch((err) => console.log(err));
}

fetchData(API_URL);

function createCard(data) {
  data.forEach(
    ({ title, price, description, category, thumbnail, id }) => {
      let card = document.createElement("div");
      card.classList.add("product-card");
      card.innerHTML = `
       <div class="product-img">
                  <img src=${thumbnail} alt="" />
                </div>
                <div class="product-info">
                  <div class="product-title">
                    <h1>${title}</h1>
                    <p class="product-p">By <span>${category}</span></p>
                  </div>
                  <div class="product-buy">
                    <div class="product-price">
                      <h2>${price}</h2>
                      <h4>$32.8</h4>
                    </div>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="10" cy="20.5" r="1" />
                        <circle cx="18" cy="20.5" r="1" />
                        <path
                          d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"
                        /></svg
                      >Add
                    </button>
                  </div>
                </div> 
    `;
      card.addEventListener("click", () => singleRoute(id));
      productWrapper.appendChild(card);
    }
  );
}
function singleRoute(id) {
  window.open(`/pages/product.html?id=${id}`, "_self");
}
