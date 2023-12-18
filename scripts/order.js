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
          insertOrderInfo(orderFromDatabase);
          verifyStatusForButtons(orderFromDatabase);
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

// INSERT ORDER INFO

const orderNumberId = document.querySelector(".order__title__order-id");

const orderStatus = document.querySelector(".admin__order__status");

const orderStatusContent = document.querySelector(
  ".admin__order__status__content"
);

function insertOrderInfo(order) {
  orderNumberId.textContent = order.id;

  orderStatusContent.textContent = order.status;

  console.log(order.status);

  if (order.status == "Enviado") {
    orderStatus.classList.add("status__color__sent");
  } else if (order.status == "Em aberto") {
    orderStatus.classList.add("status__color__open");
  } else if (order.status == "Cancelado") {
    orderStatus.classList.add("status__color__cancelled");
  }
}

////////////// UPDATE ORDER //////////////

////cancel order
function updateCancelledOrder() {
  fetch(`http://localhost:3001/order/${orderId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      status: "Cancelado",
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro na atualização do pedido");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Pedido atualizado com sucesso:", data);
    })
    .catch((error) => {
      console.error("Erro:", error);
    });
}

const orderCancelledButton = document.getElementById(
  "order-button-status-cancelled"
);

orderCancelledButton.addEventListener("click", () => {
  updateCancelledOrder();
  window.location.href = ``;
});

////confirm order
function updateSentOrder() {
  fetch(`http://localhost:3001/order/${orderId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      status: "Enviado",
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro na atualização do pedido");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Pedido atualizado com sucesso:", data);
    })
    .catch((error) => {
      console.error("Erro:", error);
    });
}

const orderSentButton = document.getElementById("order-button-status-sent");

orderSentButton.addEventListener("click", () => {
  updateSentOrder();
  window.location.href = ``;
});

// Remove buttons if the order is not open
function verifyStatusForButtons(order) {
  if (order.status != "Em aberto") {
    const buttonsOnScreen = document.querySelector(".buttons-on-screen");

    buttonsOnScreen.innerHTML = "";
  }
}
