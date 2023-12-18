const logoOnHeader = document.getElementById("logo-link");

logoOnHeader.addEventListener("click", (element) => {
  element.preventDefault();

  localStorage.setItem("choosen-category", "");

  window.location.href = `/index.html`;
});

const fetchApi = () => {
  const result = fetch("http://localhost:3001/orders")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Erro na requisição:", error);
    });
};

fetchApi();
