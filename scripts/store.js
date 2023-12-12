const produtos = document.querySelectorAll(".store-products__product");

produtos.forEach((element) => {
  element.addEventListener("click", () => {
    const selectedProduct =
      element.childNodes[3].children[0].childNodes[0].data;

    console.log(selectedProduct);

    localStorage.setItem("selected-product", selectedProduct);

    window.location.href = `/pages/product-page.html`;
  });
});
