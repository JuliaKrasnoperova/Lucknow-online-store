// Фильтр товаров по категориям
export const filterProduct = (value) => {
  const buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    if (value == button.innerText) {
      button.classList.add("menu__link_active");
    } else {
      button.classList.remove("menu__link_active");
    }
  });

  // Выбор по фильтру "All"
  const allCards = document.querySelectorAll(".dishes__item");
  allCards.forEach((card) => {
    if (value == "All") {
      card.classList.remove("hide");
    } else {
      if (card.classList.contains(value)) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");

        if (card.closest(".cart__wrapper")) {
          card.classList.remove("hide");
        }
      }
    }
  });
};

const menuList = document.querySelector(".menu__list");

menuList.addEventListener("click", function (e) {
  if (e.target.dataset.action === "burgers") {
    filterProduct("Burgers");
  } else if (e.target.dataset.action === "all") {
    filterProduct("All");
  } else if (e.target.dataset.action === "pizza") {
    filterProduct("Pizza");
  } else if (e.target.dataset.action === "salad") {
    filterProduct("Salad");
  } else if (e.target.dataset.action === "donuts") {
    filterProduct("Donuts");
  } else if (e.target.dataset.action === "drinks") {
    filterProduct("Drinks");
  }
});

window.onload = () => {
  filterProduct("All");
};
