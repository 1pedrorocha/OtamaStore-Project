// Logout

const logoutButton = document.querySelector(".logout");

logoutButton.addEventListener("click", () => {
  window.location.href = `/pages/loja.html`;
});

// data

const orders = [];
const ordersOpen = [];
const ordersCancelled = [];
const ordersSent = [];

const choosenStatus = localStorage.getItem("choosen-status");

const orderFetch = () => {
  const result = fetch("http://localhost:3001/orders")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((order) => {
        orders.push(order);
        createCard(order);

        if (order.status == "Em aberto") {
          ordersOpen.push(order);
        } else if (order.status == "Cancelado") {
          ordersCancelled.push(order);
        } else if (order.status == "Enviado") {
          ordersSent.push(order);
        }

        filterOrdersByStatus();
        makeOrdersClickable();
      });
    })
    .catch((error) => {
      console.error("Erro na requisição:", error);
    });
};

orderFetch();

// create cards

const cardWrapper = document.querySelector(".admin__order-list__wrapper");

function createCard(item) {
  let orderPrice = parseFloat(item.total).toFixed(2).replace(".", ",");

  let orderStatus;

  const products = JSON.parse(item.products);

  if (item.status == "Em aberto") {
    orderStatus = "status__color__open";
  } else if (item.status == "Cancelado") {
    orderStatus = "status__color__cancelled";
  } else if (item.status == "Enviado") {
    orderStatus = "status__color__sent";
  }

  cardWrapper.innerHTML += `
  <div class="admin__order__card" data-order="${
    item.id
  }" data-products="${JSON.stringify(products)} ">
                    <div class="admin__order__card__content">
                        <h6>PEDIDO</h6>
                        <p class= "admin__order__number">${item.id}</p>
                    </div>
                    <div class="admin__order__card__content">
                        <h6>CLIENTE</h6>
                        <p>${item.customer_name}</p>
                    </div>
                    <div class="admin__order__card__content">
                    <h6>STATUS</h6>
                    <div class="admin__order__status ${orderStatus}">
                        <p>${item.status}</p>
                    </div>
                    </div>
                    
                    <h5>R$ ${orderPrice}</h5>    

                </div>
  
  `;
}

// filter by status

function filterOrdersByStatus() {
  if (choosenStatus) {
    if (choosenStatus == "open") {
      cardWrapper.innerHTML = "";
      ordersOpen.forEach((order) => {
        createCard(order);
      });
    } else if (choosenStatus == "sent") {
      cardWrapper.innerHTML = "";
      ordersSent.forEach((order) => {
        createCard(order);
      });
    } else if (choosenStatus == "cancelled") {
      cardWrapper.innerHTML = "";
      ordersCancelled.forEach((order) => {
        createCard(order);
      });
    } else if (choosenStatus == "") {
      cardWrapper.innerHTML = "";
      orders.forEach((order) => {
        createCard(order);
      });
    }
  }
}

// filter buttons

const filterOpenButton = document.getElementById("filter-open");

const filterSentButton = document.getElementById("filter-sent");

const filterCancelledButton = document.getElementById("filter-cancelled");

filterOpenButton.addEventListener("click", () => {
  if (choosenStatus != "open") {
    localStorage.setItem("choosen-status", "open");
    window.location.href = "";
  } else {
    localStorage.setItem("choosen-status", "");
    window.location.href = "";
  }
});

filterSentButton.addEventListener("click", () => {
  if (choosenStatus != "sent") {
    localStorage.setItem("choosen-status", "sent");
    window.location.href = "";
  } else {
    localStorage.setItem("choosen-status", "");
    window.location.href = "";
  }
});

filterCancelledButton.addEventListener("click", () => {
  if (choosenStatus != "cancelled") {
    localStorage.setItem("choosen-status", "cancelled");
    window.location.href = "";
  } else {
    localStorage.setItem("choosen-status", "");
    window.location.href = "";
  }
});

// filter button selected

function setSelectedButton() {
  if (choosenStatus == "open") {
    filterOpenButton.classList.add("option-selected");
  } else if (choosenStatus == "sent") {
    filterSentButton.classList.add("option-selected");
  } else if (choosenStatus == "cancelled") {
    filterCancelledButton.classList.add("option-selected");
  }
}

setSelectedButton();

// make orders clickable

function makeOrdersClickable() {
  const clickableOrderCards = document.querySelectorAll(".admin__order__card");

  // when I click on the card, it gives me the order passed through the dataset

  clickableOrderCards.forEach((card) => {
    card.addEventListener("click", () => {
      console.log(card.dataset.order);

      localStorage.setItem("selected-order", card.dataset.order);

      window.location.href = "admin-orders-order.html";
    });
  });
}
