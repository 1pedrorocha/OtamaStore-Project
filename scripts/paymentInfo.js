// Taking data from local store

const customerDataOnStorage = JSON.parse(
  localStorage.getItem("order-customer-data")
);

const orderAddressOnStorage = JSON.parse(localStorage.getItem("order-address"));

// showing customer data on screen

const customerNameOnScreen = document.getElementById("customer-name");
const customerEmailOnScreen = document.getElementById("customer-email");

if (customerNameOnScreen) {
  customerNameOnScreen.textContent = customerDataOnStorage.name;
  customerEmailOnScreen.textContent = customerDataOnStorage.email;
}

// showing order address on screen
const address1OnScreen = document.getElementById("address-1");
const address2OnScreen = document.getElementById("address-2");

if (address1OnScreen) {
  address1OnScreen.textContent = `${orderAddressOnStorage.address} ${orderAddressOnStorage.compl} - ${orderAddressOnStorage.neighborhood}`;

  address2OnScreen.textContent = `${orderAddressOnStorage.city}, ${orderAddressOnStorage.state} | ${orderAddressOnStorage.cep}`;
}
// FORM FIELDS
// card name
const cardNameField = document.getElementById("card-name");

// card number
const cardNumberField = document.getElementById("card-number");

// expiration date
const cardExpirationDate = document.getElementById("expiration");

// cvv
const cardCvv = document.getElementById("cvv");

// CHECK FIELDS

// check name
function checkCardName() {
  if (cardNameField.value == "") {
    document.querySelector(".mensagem-erro-card-name").textContent =
      "Informe o nome no cartão";
  } else {
    document.querySelector(".mensagem-erro-card-name").textContent = "";
  }
}

if (cardNameField) {
  cardNameField.addEventListener("blur", checkCardName);
}

// check card number
function checkCardNumber() {
  if (cardNumberField.value == "") {
    document.querySelector(".mensagem-erro-card-number").textContent =
      "Informe o número do cartão";
  } else {
    document.querySelector(".mensagem-erro-card-number").textContent = "";
  }
}

if (cardNumberField) {
  cardNumberField.addEventListener("blur", checkCardNumber);
}

// check card expiration
function checkCardExpiration() {
  if (cardExpirationDate.value == "") {
    document.querySelector(".mensagem-erro-card-expiration").textContent =
      "Informe a validade";
  } else {
    document.querySelector(".mensagem-erro-card-expiration").textContent = "";
  }

  const validadeInformada = new Date(cardExpirationDate.value);
  const dataAtual = new Date();

  if (validadeInformada < dataAtual) {
    document.querySelector(".mensagem-erro-card-expiration").textContent =
      "Validade expirada";
    cardExpirationDate.value = "";
  } else {
    document.querySelector(".mensagem-erro-card-expiration").textContent = "";
  }
}

if (cardExpirationDate) {
  cardExpirationDate.addEventListener("blur", checkCardExpiration);
}

//check cvv
function checkCardCvv() {
  if (cardCvv.value == "") {
    document.querySelector(".mensagem-erro-card-cvv").textContent =
      "Informe o CVV";
  } else {
    document.querySelector(".mensagem-erro-card-cvv").textContent = "";
  }
}

if (cardCvv) {
  cardCvv.addEventListener("blur", checkCardCvv);
}

// PAYMENT BUTTON

const paymentButton = document.getElementById("payment-button");

if (paymentButton) {
  paymentButton.addEventListener("click", (button) => {
    button.preventDefault();

    checkCardName();
    checkCardNumber();
    checkCardExpiration();
    checkCardCvv();

    if (
      cardNameField.value != "" &&
      cardNumberField.value != "" &&
      cardExpirationDate.value != "" &&
      cardCvv.value != ""
    ) {
      // remove cart from local storage
      const checkLookAt = localStorage.getItem("look-at");

      //   if (checkLookAt == "cart") {
      //     localStorage.setItem("cart", "");
      //   }
      //   localStorage.setItem("selected-product-name", "");
      //   localStorage.setItem("selected-product-price", "");
      //   localStorage.setItem("selected-product-gallery", "");
      //   localStorage.setItem("selected-category", "");
      //   localStorage.setItem("selected-product-id", "");
      //   localStorage.setItem("selected-product-image", "");

      window.location.href = `/pages/success.html`;
    }
  });
}
