// TAKING CART ITEMS FROM LOCAL STORE

const cartListOnStorage = localStorage.getItem("cart");

if (cartListOnStorage == null) {
  cartItems = [];
} else if (cartListOnStorage == "") {
  cartItems = [];
} else {
  cartItems = JSON.parse(localStorage.getItem("cart"));
}

// ADD TO CART BUTTON

const addToCartButton = document.getElementById(
  "product_page_add-to-cart_button"
);

if (addToCartButton) {
  addToCartButton.addEventListener("click", (e) => {
    e.preventDefault();

    addToList();
    addListToStorage();
    cartContainer.classList.remove("hidden");
  });
}

function addToList() {
  const newCartItem = {
    id: `${activeProductId}`,
    name: `${activeProductName}`,
    price: `${activeProductPrice}`,
    category: `${activeProductCategory}`,
    image: `${activeProductImage}`,
    amount: 1,
  };

  cartItems.push(newCartItem);
}

function addListToStorage() {
  localStorage.setItem("cart", JSON.stringify(cartItems));
}

// CLEAN CART BUTTON

const cleanCartButton = document.querySelector(".cart-secondary-button");

if (cleanCartButton) {
  cleanCartButton.addEventListener("click", clearCart);
}

function clearCart() {
  cartItems = [];
  addListToStorage();
  showProductsOnCart();
  updateTotalOnCart();
  adAmountToCartHeader();
}

// ALERTA DE ITENS NO CARRINHO NO MENU

const cartAmountAlert = document.querySelector(".cart-amount");

if (cartItems.length < 1) {
  cartAmountAlert.classList.add("hidden");
} else {
  cartAmountAlert.classList.remove("hidden");
}

cartAmountAlert.textContent = cartItems.length;

// // INSERIR VISUALMENTE NO CARRINHO

// //numero de itens no carrinho
const amountItemsOnCart = document.getElementById("amount-items-in-cart");

function adAmountToCartHeader() {
  if (amountItemsOnCart) {
    if (cartItems && cartItems.length > 0) {
      amountItemsOnCart.innerHTML = `(${cartItems.length})`;
    } else {
      amountItemsOnCart.innerHTML = ``;
    }
  }
}

adAmountToCartHeader();

// //lista de produtos no carrinho

const productsListedOnCart = document.querySelector(
  ".cart__product-list__container"
);

function showProductsOnCart() {
  if (productsListedOnCart) {
    productsListedOnCart.innerHTML = "";
  }

  if (productsListedOnCart) {
    cartItems.forEach((element) => {
      createItemOnCart(element);
    });
  }

  function createItemOnCart(item) {
    let categoryOnCart = "Otamatone Fun";

    if (item.category == "PRO") {
      categoryOnCart = "Otamatone Pro";
    } else if (item.category === "FUN") {
      categoryOnCart == "Otamatone Fun";
    } else if (item.category == "Mini") {
      categoryOnCart = "Otamatone Mini";
    } else if (item.category == "Acessórios") {
      categoryOnCart = "Acessórios";
    } else {
      categoryOnCart = "Otamatone";
    }

    productsListedOnCart.innerHTML += `
    <div class="cart__product__container">
            <img
              class="cart__product__container__img"
              src="${item.image}"
              alt="product in the cart"
            />
            <div class="cart__product__info">
              <div class="cart__product__info__top">
                <div class="cart__product__info__product-name">
                  <h4> ${categoryOnCart} </h4>
                  <p>${item.name}</p>
                </div>
                <button>
                  <img
                    src="../img/cart-remove-product.png"
                    alt="icon to remove product"
                  />
                </button>
              </div>
              <div class="cart__product__info__bottom">
                <div class="cart__product__info__bottom__quantity" data-minus>
                  <button class="cart__product__info__bottom__quantity__button">
                    <img
                      src="../img/cart-product-quantity-minus.png"
                      alt="minus signal"
                    />
                  </button>
                  <p>1</p>
                  <button
                    class="cart__product__info__bottom__quantity__button"
                    data-plus
                  >
                    <img
                      src="../img/cart-product-quantity-plus.png"
                      alt="plus signal"
                    />
                  </button>
                </div>
                <h5>R$ ${item.price.replace(".", ",")}</h5>
              </div>
            </div>
          </div>

    `;
  }
}

showProductsOnCart();
// atualizar total

const cartTotalAmountOnScreen = document.getElementById("cart_total_amount");

function updateTotalOnCart() {
  let cartTotalAmountValue = 0;

  if (cartItems) {
    for (var i = 0; i < cartItems.length; i++) {
      cartTotalAmountValue += parseFloat(cartItems[i].price);

      console.log(cartTotalAmountValue);
    }
  }

  if (cartTotalAmountOnScreen) {
    cartTotalAmountOnScreen.innerHTML = `R$ ${parseFloat(cartTotalAmountValue)
      .toFixed(2)
      .replace(".", ",")}`;
  }
}

updateTotalOnCart();
