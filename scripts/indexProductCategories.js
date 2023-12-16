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

// BUY NOW BUTTON

const callToActionButtons = document.querySelectorAll(
  "#main_page_call-to-action"
);

if (callToActionButtons) {
  callToActionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      defineChoosenCategory("");
      window.location.href = `/pages/loja.html`;
    });
  });
}

// ACCESSORIES

const accessoriesOnMainPageContainer = document.querySelector(
  ".accessories__accessory__container"
);

const accessoriesToBePlacedOnMainPage = JSON.parse(
  localStorage.getItem("accessories-main-page")
);

console.log(accessoriesToBePlacedOnMainPage);

function createAccessoriesOnMainPage() {
  if (accessoriesOnMainPageContainer) {
    accessoriesOnMainPageContainer.innerHTML = "";

    accessoriesToBePlacedOnMainPage.forEach((item) => {
      accessoriesOnMainPageContainer.innerHTML += `
      <div class="accessories__accessory">
        <img src="${item.Image}" alt="Acessorio para Otamatone">
        <h5>${item.Name}</h5>
        <p>${item.Price}</p>
      </div>
    `;
    });
  }
}

createAccessoriesOnMainPage();

// SEE MORE ACCESSORIES
const seeMoreAccessories = document.getElementById(
  "main_page_link-to_accessories"
);

if (seeMoreAccessories) {
  seeMoreAccessories.addEventListener("click", (e) => {
    e.preventDefault();
    defineChoosenCategory("acessorios");
    window.location.href = `/pages/loja.html`;
  });
}
