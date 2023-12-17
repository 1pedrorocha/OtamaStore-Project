const logoOnHeader = document.getElementById("logo-link");

logoOnHeader.addEventListener("click", (element) => {
  element.preventDefault();

  localStorage.setItem("choosen-category", "");

  window.location.href = `/index.html`;
});
