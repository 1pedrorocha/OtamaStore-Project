// ALERTA DE ITENS NO CARRINHO NO MENU

const cartItems = [];

const cartAmountAlert = document.querySelector(".cart-amount");

if (cartItems.length < 1) {
  cartAmountAlert.classList.add("hidden");
} else {
  cartAmountAlert.classList.remove("hidden");
}

cartAmountAlert.textContent = cartItems.length;
