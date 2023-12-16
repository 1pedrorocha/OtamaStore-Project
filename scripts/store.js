//breadcrumbs
const breadcrumbsStore = document.querySelector(".breadcrumbs");

// stock
let stockFilter;

// right navigation

const navigationPro = document.getElementById("header-linha-pro");

const navigationFun = document.getElementById("header-linha-fun");

const navigationMini = document.getElementById("header-linha-mini");

const navigationAccessories = document.getElementById("header-acessorios");

navigationPro.addEventListener("click", () => {
  if (choosenCategory != "pro") {
    localStorage.setItem("choosen-category", "pro");
    window.location.href = "";
  } else {
    localStorage.setItem("choosen-category", "");
    window.location.href = "";
  }
});

navigationFun.addEventListener("click", () => {
  if (choosenCategory != "fun") {
    localStorage.setItem("choosen-category", "fun");
    window.location.href = "";
  } else {
    localStorage.setItem("choosen-category", "");
    window.location.href = "";
  }
});

navigationMini.addEventListener("click", () => {
  if (choosenCategory != "mini") {
    localStorage.setItem("choosen-category", "mini");
    window.location.href = "";
  } else {
    localStorage.setItem("choosen-category", "");
    window.location.href = "";
  }
});

navigationAccessories.addEventListener("click", () => {
  if (choosenCategory != "acessorios") {
    localStorage.setItem("choosen-category", "acessorios");
    window.location.href = "";
  } else {
    localStorage.setItem("choosen-category", "");
    window.location.href = "";
  }
});

// store interface
function setStoreInterface() {
  if (choosenCategory == "pro") {
    //highlights navigation link
    navigationPro.classList.add("_selected");
  } else if (choosenCategory == "fun") {
    //highlights navigation link
    navigationFun.classList.add("_selected");
  } else if (choosenCategory == "mini") {
    //highlights navigation link
    navigationMini.classList.add("_selected");
  } else if (choosenCategory == "acessorios") {
    //highlights navigation link
    navigationAccessories.classList.add("_selected");
  } else {
  }
}

// Product selector
const storeProducts = document.querySelectorAll(
  ".store-products__product__stock"
);

storeProducts.forEach((element) => {
  element.addEventListener("click", () => {
    //
    const selectedProductId = element.childNodes[3].dataset.id;
    const selectedProductCategory = element.childNodes[3].dataset.category;
    const selectedProductName = element.childNodes[3].dataset.name;
    const selectedProductPrice = element.childNodes[3].dataset.price;
    const selectedProductImage = element.childNodes[3].dataset.image;
    const selectedProductGallery = element.childNodes[3].dataset.gallery;

    localStorage.setItem("selected-category", selectedProductCategory);
    localStorage.setItem("selected-product-id", selectedProductId);
    localStorage.setItem("selected-product-name", selectedProductName);
    localStorage.setItem("selected-product-price", selectedProductPrice);
    localStorage.setItem("selected-product-image", selectedProductImage);
    localStorage.setItem("selected-product-gallery", selectedProductGallery);

    window.location.href = `/pages/product-page.html`;
  });
});
