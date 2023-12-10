// SHOWING AND HIDING ADMIN MENU

const adminMenuButton = document.querySelector("[data-chevronbtn]");
const adminMenu = document.querySelector(".admin-menu__container");

adminMenuButton.addEventListener("mouseover", () => {
  adminMenu.classList.remove("hidden");
});

adminMenuButton.addEventListener("mouseout", () => {
  adminMenu.classList.add("hidden");
});

// IDENTIFYING CLICKS

const adminCategoryButtons = document.querySelectorAll(".admin-menu__box");

console.log(adminCategoryButtons);

adminCategoryButtons.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (event.target.nodeName == "IMG") {
      console.log(event.target.parentNode.dataset.type);
    } else {
      console.log(event.target.dataset.type);
    }
  });
});
