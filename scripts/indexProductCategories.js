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

function createAccessoriesOnMainPage() {
  if (accessoriesOnMainPageContainer) {
    accessoriesOnMainPageContainer.innerHTML = "";

    accessoriesToBePlacedOnMainPage.forEach((item) => {
      let finalPrice = item.Price.toFixed(2).replace(".", ",");

      accessoriesOnMainPageContainer.innerHTML += `
      <div class="accessories__accessory"
                    data-id = "${item._id}"
                     data-category = "${item.Category}"
                     data-name = "${item.Name}"
                     data-price = "${item.Price}"
                     data-image = ${item.Image}"
                     data-gallery = ${JSON.stringify(item.Gallery)}
      >
        <img src="${item.Image}" alt="Acessorio para Otamatone">
        <h5>${item.Name}</h5>
        <p>R$ ${finalPrice}</p>
      </div>
    `;
    });
  }
}

createAccessoriesOnMainPage();

const accessoryCardOnMainPage = document.querySelectorAll(
  ".accessories__accessory"
);

accessoryCardOnMainPage.forEach((item) => {
  item.addEventListener("click", () => {
    localStorage.setItem("selected-category", item.dataset.category);
    localStorage.setItem("selected-product-id", item.dataset.id);
    localStorage.setItem("selected-product-name", item.dataset.name);
    localStorage.setItem("selected-product-price", item.dataset.price);
    localStorage.setItem("selected-product-image", item.dataset.image);
    localStorage.setItem("selected-product-gallery", item.dataset.gallery);

    window.location.href = `/pages/product-page.html`;
  });
});

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
