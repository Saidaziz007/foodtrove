const API_URL = "https://dummyjson.com/products";
const cardWrapper = document.querySelector(".card-wrapper");

async function fetchSingleUser(api) {
  let params = new URLSearchParams(window.location.search);
  let id = params.get("id");
  let data = await fetch(`${api}/${id}`);
  data
    .json()
    .then((res) => singleUser(res))
    .catch((err) => console.log(err));
}
fetchSingleUser(API_URL);

function singleUser({
  thumbnail,
  title,
  description,
  brand,
  category,
  price,
  id,
}) {
  let card = document.createElement("div");
  card.classList.add("single-card");
  card.innerHTML = `
            <div class="card-left">
                <img src=${thumbnail} alt="" />
              </div>
              <div class="card-right">
                <div class="card-top">
                  <h1>${title}</h1>
                  <p>${description}</p>
                </div>
                <div class="card-line"></div>
                <div class="card-info">
                  <h1>Brand : <span>${brand}</span></h1>
                  <h1>Flavour : <span>Super Saver Pack</span></h1>
                  <h1>Diet Type : <span>${category}</span></h1>
                  <h1>Weight : <span>200 Grams</span></h1>
                  <h1>Speciality : <span>Gluten Free, Sugar Free</span></h1>
                  <h1>Info : <span>Egg Free, Allergen-Free</span></h1>
                  <h1>Items : <span>1</span></h1>
                </div>
                <div class="card-price">
                  <div class="card-price-1">
                    <h2>${price}</h2>
                    <h4>$123.25</h4>
                  </div>
                  <div class="card-weight">
                    <h3>Size / Weight</h3>
                    <ul class="card-list">
                      <li class="card-item-1">50kg</li>
                      <li class="card-item">70kg</li>
                      <li class="card-item">100kg</li>
                      <li class="card-item">200kg</li>
                    </ul>
                  </div>
                  <div class="card-buy">
                    <h4>1</h4>
                    <button>Add to Cart</button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                      ></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </div>
                </div>
              </div>
        `;
  cardWrapper.appendChild(card);
}
