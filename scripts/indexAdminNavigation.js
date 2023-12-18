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

// adminCategoryButtons.forEach((element) => {
//   element.addEventListener("click", (event) => {
//     let adminDestination;

//     if (event.target.nodeName == "IMG") {
//       adminDestination = `/pages/${event.target.parentNode.dataset.type}`;
//     } else {
//       adminDestination = `/pages/${event.target.dataset.type}`;
//     }

//     // window.location.href = `/pages/otamatones-${adminDestination}.html`;
//   });
// });
