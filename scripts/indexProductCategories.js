// SHOWING AND HIDING CATEGORIES
const navProductCategories = document.querySelector(".header__center-menu");

const productCategories = document.querySelector(
  ".product-category__container"
);

navProductCategories.addEventListener("mouseover", () => {
  productCategories.classList.remove("hidden");
});

navProductCategories.addEventListener("mouseout", () => {
  productCategories.classList.add("hidden");
});

// IDENTIFYING CLICKS ON CATEGORIES
const productCategory = document.querySelectorAll(".product-category");

productCategory.forEach((element) => {
  element.addEventListener("click", (event) => {
    let destination;

    if (event.target.nodeName == "IMG") {
      destination = event.target.parentNode.dataset.category;
    } else if (event.target.nodeName == "H3" || "P") {
      destination = event.target.parentNode.parentNode.dataset.category;
    } else {
      destination = event.target.dataset.category;
    }
    if (destination == undefined) {
      destination = event.target.dataset.category;
    }

    defineChoosenCategory(destination);

    window.location.href = `/pages/loja.html`;
  });
});

function defineChoosenCategory(category) {
  localStorage.setItem("choosen-category", category);
}

const seeMoreAccessories = document.getElementById(
  "main_page_link-to_accessories"
);

seeMoreAccessories.addEventListener("click", (e) => {
  e.preventDefault();
  defineChoosenCategory("acessorios");
  window.location.href = `/pages/loja.html`;
});
