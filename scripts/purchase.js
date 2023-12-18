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
    amount: 1,
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
  if (whatToLookAt == "cart") {
    for (var i = 0; i < itemListOnStorage.length; i++) {
      let productPrice = itemListOnStorage[i].price;
      let productAmount = itemListOnStorage[i].amount;

      totalAmount += parseFloat(productPrice * productAmount);
    }
  } else {
    totalAmount = parseFloat(itemListOnStorage[0].price);
  }

  purchaseSubtotalAmount.textContent = `R$ ${parseFloat(totalAmount)
    .toFixed(2)
    .replace(".", ",")}`;

  purchaseTotalAmount.textContent = `${purchaseSubtotalAmount.textContent}`;
}

updateTotalAmount();

// FORM FIELDS

// USER
// name
const nameField = document.getElementById("name");

//email
const emailField = document.getElementById("email");

// ADDRESS
//cep
const cepField = document.getElementById("cep");

// error message
const errorCEP = document.querySelector(".mensagem-erro-cep");

// button
const orderContinueButton = document.getElementById("continue");

//address
const addressField = document.getElementById("address");
const neighborhoodField = document.getElementById("neighborhood");
const complField = document.getElementById("compl");

//city
const cityField = document.getElementById("city");

//state
const stateField = document.getElementById("state");

// CONSULTING CEP

if (cepField) {
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

        addressField.value = `${data.logradouro}, nº`;
        neighborhoodField.value = data.bairro;
        cityField.value = data.localidade;
        stateField.value = data.uf;

        addressField.focus();
      });
    });
  });
}

// CAPTURING INPUT DATA

// checking required fields

function checkName() {
  if (nameField.value == "") {
    document.querySelector(".mensagem-erro-nome").textContent =
      "Informe seu nome";
  } else {
    document.querySelector(".mensagem-erro-nome").textContent = "";
  }
}

if (nameField) {
  nameField.addEventListener("blur", checkName);
}

function checkEmail() {
  if (emailField.value == "") {
    document.querySelector(".mensagem-erro-email").textContent =
      "Informe seu email";
  } else {
    document.querySelector(".mensagem-erro-email").textContent = "";
  }
}

if (emailField) {
  emailField.addEventListener("blur", checkEmail);
}

function checkCep() {
  if (cepField.value == "") {
    document.querySelector(".mensagem-erro-cep").textContent =
      "Informe seu CEP";
  } else {
    document.querySelector(".mensagem-erro-cep").textContent = "";
  }
}

// CONTINUE

if (orderContinueButton) {
  orderContinueButton.addEventListener("click", (button) => {
    button.preventDefault();

    checkName();
    checkEmail();
    checkCep();

    if (
      nameField.value != "" &&
      cepField.value != "" &&
      emailField.value != ""
    ) {
      const userData = {
        name: nameField.value,
        email: emailField.value,
      };

      const orderAddress = {
        cep: cepField.value,
        address: addressField.value,
        neighborhood: neighborhoodField.value,
        compl: complField.value,
        city: cityField.value,
        state: stateField.value,
      };

      // Setting the final Order

      //set customer info on storage
      localStorage.setItem("order-customer-data", JSON.stringify(userData));

      //set customer address on storage
      localStorage.setItem("order-address", JSON.stringify(orderAddress));

      //set items on cart on storage
      localStorage.setItem("order-items", JSON.stringify(itemListOnStorage));

      //set total amount on storage
      localStorage.setItem("order-total", totalAmount);

      window.location.href = `/pages/payment-info.html`;
    }
  });
}
