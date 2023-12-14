// ALERTA DE ITENS NO CARRINHO NO MENU

const cartItems = [1, 2];

const cartAmountAlert = document.querySelector(".cart-amount");

cartAmountAlert.addEventListener("click", () => {
  console.log("test");
});

cartAmountAlert.textContent = cartItems.length;
