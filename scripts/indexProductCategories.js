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

    window.location.href = `./pages/otamatones-${destination}.html`;
  });
});
