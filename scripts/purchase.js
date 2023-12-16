const whatToLookAt = localStorage.getItem("look-at");

console.log(whatToLookAt);

if (whatToLookAt == "cart") {
  const itemListOnStorageString = localStorage.getItem("cart");

  const itemListOnStorage = JSON.parse(itemListOnStorageString);

  console.log(itemListOnStorage);
} else if (whatToLookAt == "buy-now") {
  const itemListOnStorage = [
    {
      id: localStorage.getItem("selected-product-id"),
      category: localStorage.getItem("selected-category"),
      name: localStorage.getItem(""),
      price: "",
      amount: "",
      image: "",
    },
  ];
}

// if (cartListOnStorage == null) {
//   cartItems = [];
// } else if (cartListOnStorage == "") {
//   cartItems = [];
// } else {
//   cartItems = JSON.parse(localStorage.getItem("cart"));
// }
