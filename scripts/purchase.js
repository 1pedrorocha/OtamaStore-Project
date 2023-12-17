// const orderInfo = {
//   id: "",
//   client: {
//     name: "",
//     email: "",
//   },
//   address: {
//     address: "",
//     city: "",
//     state: "",
//     cep: "",
//   },
//   products: [],
//   total: 0,
//   status: "em aberto",
// };

// PRODUCTS TO BE PAID

// defines if it is from cart or from the "buy now" option

const whatToLookAt = localStorage.getItem("look-at");

const itemListOnStorage = [];

if (whatToLookAt == "cart") {
  const itemListOnStorageString = JSON.parse(localStorage.getItem("cart"));

  itemListOnStorageString.forEach((item) => {
    itemListOnStorage.push(item);
  });
} else if (whatToLookAt == "buy-now") {
  let itemFromStorage = {
    id: localStorage.getItem("selected-product-id"),
    category: localStorage.getItem("selected-category"),
    name: localStorage.getItem("selected-product-name"),
    price: localStorage.getItem("selected-product-price"),
    amount: localStorage.getItem("selected-product-amount"),
    image: localStorage.getItem("selected-product-image"),
  };

  itemListOnStorage.push(itemFromStorage);
}

// Creates the list of products
const productListToBePaid = document.querySelector(
  ".shipping-info__cart__product-list"
);

function createProductsOnList() {
  productListToBePaid.innerHTML = "";

  itemListOnStorage.forEach((item) => {
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

    productListToBePaid.innerHTML += `
    <div class="shipping-info__cart__product__container">
      <img
      class="cart__product__container__img"
      src="${item.image}"
      alt="product in the cart"
      />
      <div class="shipping-info__cart__product__info">
      
          <div class="shipping-info__cart__product__info__product-name">
          <h4>${categoryOnCart}</h4>
          <p>${item.name} <span>(${item.amount})</span></p>
          </div>
          <h5>${finalPrice.replace(".", ",")}</h5> 
      </div>
    </div>`;
  });
}

createProductsOnList();

// updates the total

const purchaseSubtotalAmount = document.getElementById(
  "purchase-subtotal-amount"
);

const purchaseTotalAmount = document.getElementById("purchase-total-amount");

let totalAmount = 0;

function updateTotalAmount() {
  for (var i = 0; i < itemListOnStorage.length; i++) {
    let productPrice = itemListOnStorage[i].price;
    let productAmount = itemListOnStorage[i].amount;

    totalAmount += parseFloat(productPrice * productAmount);
  }

  purchaseSubtotalAmount.textContent = `R$ ${parseFloat(totalAmount)
    .toFixed(2)
    .replace(".", ",")}`;

  purchaseTotalAmount.textContent = `${purchaseSubtotalAmount.textContent}`;
}

updateTotalAmount();

// Setting the final Order

function setOrder() {
  // add data about the order
  localStorage.setItem("order-total", totalAmount);
  localStorage.setItem("order-items", JSON.stringify(itemListOnStorage));
}

// FORM FIELDS

//state
const cepField = document.getElementById("cep");

// error message
const errorCEP = document.querySelector(".mensagem-erro-cep");

// button
const orderContinueButton = document.getElementById("continue");

// name
const nameField = document.getElementById("name");

//email
const emailField = document.getElementById("email");

//address
const addressField = document.getElementById("address");

const neighborhoodField = document.getElementById("neighborhood");

const complField = document.getElementById("compl");

//city
const cityField = document.getElementById("city");

//state
const stateField = document.getElementById("state");

// CONSULTING CEP

cepField.addEventListener("blur", () => {
  if (cepField.value.length !== 8) {
    document.querySelector(".mensagem-erro-cep").textContent = "CEP Inválido";

    addressField.value = "";
    neighborhoodField.value = "";
    cityField.value = "";
    stateField.value = "";
    return;
  }
  document.querySelector(".mensagem-erro-cep").textContent = "";

  let url = `https://viacep.com.br/ws/${cepField.value}/json/`;

  fetch(url).then(function (response) {
    response.json().then(function (data) {
      if (data.erro == true) {
        document.querySelector(".mensagem-erro-cep").textContent =
          "CEP Inválido";

        addressField.value = "";
        neighborhoodField.value = "";
        cityField.value = "";
        stateField.value = "";
        return;
      }

      addressField.value = data.logradouro;
      neighborhoodField.value = data.bairro;
      cityField.value = data.localidade;
      stateField.value = data.uf;
    });
  });
});

// CAPTURING INPUT DATA

orderContinueButton.addEventListener("click", (button) => {
  button.preventDefault();
  console.log("test");
});
