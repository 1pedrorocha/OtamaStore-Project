const activeProductId = localStorage.getItem("selected-product-id");
const activeProductName = localStorage.getItem("selected-product-name");
const activeProductPrice = localStorage.getItem("selected-product-price");
const activeProductImage = localStorage.getItem("selected-product-image");
const activeProductCategory = localStorage.getItem("selected-category");
const activeProductGallery = localStorage.getItem("selected-product-gallery");

// ACTIVE IMAGE
const productMainImage = document.querySelector(
  ".product__content__image-container"
);

productMainImage.innerHTML = `
<img class="product__content__product-images__main" src="${activeProductImage}" alt="imagem do Otamatone">

`;

const breadcrumbProduct = document.getElementById("breadcrumb_product");
breadcrumbProduct.innerHTML = `${activeProductName}`;

// INFOS DO PRODUTO

// category
const ProductCategoryOnPage = document.getElementById(
  "product_category_on_page"
);

if (activeProductCategory == "PRO") {
  ProductCategoryOnPage.innerHTML = "Otamatone Pro";
} else if (activeProductCategory == "FUN") {
  ProductCategoryOnPage.innerHTML = "Otamatone Fun";
} else if (activeProductCategory == "Mini") {
  ProductCategoryOnPage.innerHTML = "Otamatone Mini";
} else if (activeProductCategory == "Acessórios") {
  ProductCategoryOnPage.innerHTML = "Acessórios";
}

// name
const productNameOnPage = document.getElementById("product_name_on_page");
productNameOnPage.innerHTML = activeProductName;

// price
const oldPriceOnPage = document.getElementById("product_old-price_on_page");

const oldPriceCalculated = parseFloat(activeProductPrice * 1.15).toFixed(2);

oldPriceOnPage.innerHTML = `R$ ${parseInt(oldPriceCalculated)}`;

const priceOnPage = document.getElementById("product_price_on_page");

priceOnPage.innerHTML = `R$ ${parseFloat(activeProductPrice)
  .toFixed(2)
  .replace(".", ",")}`;

//   gallery

const galleryThumbnails = document.querySelector(
  ".product__content__product-images__thumbnails"
);

const galleryImages = JSON.parse(activeProductGallery);

function createGalleryImages() {
  galleryImages.forEach((image) => {
    galleryThumbnails.innerHTML += `
          <div class="product__content__product-images__thumbnails__thumbnail" data-${galleryImages.indexOf(
            image
          )}>
                      <img src="..${image} " alt="imagem do Otamatone">
                    </div>
          
          `;
  });
}

createGalleryImages();

function changeThumbnail() {
  const thumbnail0 = document.querySelector("[data-0]");
  thumbnail0.addEventListener("click", () => {
    productMainImage.innerHTML = `
          <img class="product__content__product-images__main" src="${galleryImages[0]}" alt="imagem do Otamatone">`;
  });

  if (galleryImages.length > 1) {
    const thumbnail1 = document.querySelector("[data-1]");
    thumbnail1.addEventListener("click", () => {
      productMainImage.innerHTML = `
            <img class="product__content__product-images__main" src="${galleryImages[1]}" alt="imagem do Otamatone">`;
    });
  }

  if (galleryImages.length > 2) {
    const thumbnail2 = document.querySelector("[data-2]");
    thumbnail2.addEventListener("click", () => {
      productMainImage.innerHTML = `
            <img class="product__content__product-images__main" src="${galleryImages[2]}" alt="imagem do Otamatone">`;
    });
  }

  if (galleryImages.length > 3) {
    const thumbnail3 = document.querySelector("[data-3]");
    thumbnail3.addEventListener("click", () => {
      productMainImage.innerHTML = `
              <img class="product__content__product-images__main" src="${galleryImages[3]}" alt="imagem do Otamatone">`;
    });
  }

  if (galleryImages.length > 4) {
    const thumbnail4 = document.querySelector("[data-4]");
    thumbnail4.addEventListener("click", () => {
      productMainImage.innerHTML = `
                <img class="product__content__product-images__main" src="${galleryImages[4]}" alt="imagem do Otamatone">`;
    });
  }

  if (galleryImages.length > 5) {
    const thumbnail5 = document.querySelector("[data-5]");
    thumbnail5.addEventListener("click", () => {
      productMainImage.innerHTML = `
                  <img class="product__content__product-images__main" src="${galleryImages[5]}" alt="imagem do Otamatone">`;
    });
  }
}

changeThumbnail();

// PURCHASE BUTTON

const purchaseButton = document.getElementById("product_page_purchase_button");

purchaseButton.addEventListener("click", (e) => {
  e.preventDefault();
});
