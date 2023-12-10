const cartBtn = document.querySelector("[data-cartBtn]");

const cartContainer = document.querySelector(".cart__container");

const cartCloseButton = document.querySelector(".cart__container__close");

cartBtn.addEventListener("click", () => {
  cartContainer.classList.remove("hidden");
});

cartCloseButton.addEventListener("click", () => {
  cartContainer.classList.add("hidden");
});
