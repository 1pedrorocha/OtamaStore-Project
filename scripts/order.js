// GETTING THE ORDER FROM THE ID

// getting id from local storage
const orderId = localStorage.getItem("selected-order");

let orderFromDatabase;

// getting the order from the database
const orderFetchFromId = () => {
  const result = fetch("http://localhost:3001/orders")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((order) => {
        if (order.id == orderId) {
          orderFromDatabase = order;

          console.log(orderFromDatabase);

          let productList = JSON.parse(orderFromDatabase.products);
          createProductsFromList(productList);
          updateTotalAmount(productList);
          insertCustomerInfo(orderFromDatabase);
        }
      });
    });
};

orderFetchFromId();

// Creates the list of products
const productListToBePaid = document.querySelector(
  ".shipping-info__cart__product-list"
);

function createProductsFromList(list) {
  productListToBePaid.innerHTML = "";

  list.forEach((item) => {
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

// updates the total

const purchaseSubtotalAmount = document.getElementById(
  "purchase-subtotal-amount"
);

const purchaseTotalAmount = document.getElementById("purchase-total-amount");

let totalAmount = 0;

function updateTotalAmount(list) {
  for (var i = 0; i < list.length; i++) {
    let productPrice = list[i].price;
    let productAmount = list[i].amount;

    totalAmount += parseFloat(productPrice * productAmount);
  }

  purchaseSubtotalAmount.textContent = `R$ ${parseFloat(totalAmount)
    .toFixed(2)
    .replace(".", ",")}`;

  purchaseTotalAmount.textContent = `${purchaseSubtotalAmount.textContent}`;
}

// FORM FIELDS

// USER
// name
const nameField = document.getElementById("name");

//email
const emailField = document.getElementById("email");

// ADDRESS
//address
const addressText = document.getElementById("address");

// button
const orderContinueButton = document.getElementById("continue");

// INSERT CUSTOMER INFO

function insertCustomerInfo(order) {
  nameField.value = order.customer_name;
  emailField.value = order.customer_email;

  addressText.textContent = order.address;
}
