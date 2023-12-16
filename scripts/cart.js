// OPEN AND CLOSE CART TAB

const cartBtn = document.querySelector("[data-cartBtn]");
const cartContainer = document.querySelector(".cart__container");
const cartCloseButton = document.querySelector(".cart__container__close");
const darkBackground = document.querySelector(".background-dark");

cartBtn.addEventListener("click", () => {
  cartContainer.classList.remove("hidden");
});

cartCloseButton.addEventListener("click", () => {
  cartContainer.classList.add("hidden");
});

darkBackground.addEventListener("click", () => {
  cartContainer.classList.add("hidden");
});

// TAKING CART ITEMS FROM LOCAL STORE

const cartListOnStorage = localStorage.getItem("cart");

if (cartListOnStorage == null) {
  cartItems = [];
} else if (cartListOnStorage == "") {
  cartItems = [];
} else {
  cartItems = JSON.parse(localStorage.getItem("cart"));
}

// CART COUNTER ON HEADER
const cartAmountAlert = document.querySelector(".cart-amount");
const amountItemsOnCart = document.getElementById("amount-items-in-cart");

function addCartAmountToHeader() {
  // Update the total number of items on the header
  let cartTotalItems = 0;
  if (cartItems) {
    for (var i = 0; i < cartItems.length; i++) {
      cartTotalItems += parseFloat(cartItems[i].amount);
    }
  }

  if (cartItems.length < 1) {
    cartAmountAlert.classList.add("hidden");
  } else {
    cartAmountAlert.classList.remove("hidden");
  }
  cartAmountAlert.innerHTML = cartTotalItems;

  // Update the total number of items on the cart header
  if (amountItemsOnCart) {
    if (cartItems && cartItems.length > 0) {
      amountItemsOnCart.innerHTML = `(${cartTotalItems})`;
    } else {
      amountItemsOnCart.innerHTML = ``;
    }
  }
}

addCartAmountToHeader();

// ADD TO CART BUTTON

const addToCartButton = document.getElementById(
  "product_page_add-to-cart_button"
);

if (addToCartButton) {
  addToCartButton.addEventListener("click", (e) => {
    e.preventDefault();

    addToList();
    addListToStorage();
    showProductsOnCart();
    addCartAmountToHeader();
    cartContainer.classList.remove("hidden");
  });
}

function addToList() {
  if (cartItems.find((element) => element.id == activeProductId)) {
    const editedCartItems = cartItems.map((item) => {
      if (item.id == activeProductId) {
        let currentAmount = item.amount;
        let updatedAmount = currentAmount + 1;

        return { ...item, amount: updatedAmount };
      }
      return item;
    });

    cartItems = editedCartItems;

    console.log(cartItems);
  } else {
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

// // INSERIR VISUALMENTE NO CARRINHO

// //lista de produtos no carrinho

const productsListedOnCart = document.querySelector(
  ".cart__product-list__container"
);

function showProductsOnCart() {
  if (productsListedOnCart) {
    productsListedOnCart.innerHTML = "";

    cartItems.forEach((element) => {
      createItemOnCart(element);
    });
  }
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

  let finalPrice = parseFloat(item.price * item.amount).toFixed(2);

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
                <div class="cart__product__info__bottom__quantity" data-id = "${
                  item.id
                }">
                  <button class="cart__product__info__bottom__quantity__button" id="cart_minus-button">
                    <img
                      src="../img/cart-product-quantity-minus.png"
                      alt="minus signal"
                    />
                  </button>
                  <p>${item.amount}</p>
                  <button
                    class="cart__product__info__bottom__quantity__button"
                    id="cart_plus-button"
                  >
                    <img
                      src="../img/cart-product-quantity-plus.png"
                      alt="plus signal"
                    />
                  </button>
                </div>
                <h5>R$ ${finalPrice.replace(".", ",")}</h5>
              </div>
            </div>
          </div>

    `;
}

showProductsOnCart();

// atualizar total

const cartTotalAmountOnScreen = document.getElementById("cart_total_amount");

function updateTotalOnCart() {
  let cartTotalAmountValue = 0;

  if (cartItems) {
    for (var i = 0; i < cartItems.length; i++) {
      let productPrice = cartItems[i].price;
      let productAmount = cartItems[i].amount;

      cartTotalAmountValue += parseFloat(productPrice * productAmount);
    }
  }

  if (cartTotalAmountOnScreen) {
    cartTotalAmountOnScreen.innerHTML = `R$ ${parseFloat(cartTotalAmountValue)
      .toFixed(2)
      .replace(".", ",")}`;
  }
}

updateTotalOnCart();

// Add to the amount of items in the cart

const minusButtons = document.querySelectorAll("#cart_minus-button");

const plusButtons = document.querySelectorAll("#cart_plus-button");

minusButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("minus");
    console.log(button.parentNode.dataset.id);
  });
});
