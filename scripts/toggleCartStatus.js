"use srtict";

// Отображение надписи "Your cart is empty в корзине, если она пустая"
export const toggleCartStatus = () => {
  const cartWrapper = document.querySelector(".cart__wrapper");
  const cartEmptyBage = document.querySelector("[data-cart-empty]");
  const orderInfo = document.querySelector("#orderInfo");

  if (cartWrapper.children.length > 0) {
    cartEmptyBage.classList.add("none");
    orderInfo.classList.remove("none");
  } else {
    cartEmptyBage.classList.remove("none");
    orderInfo.classList.add("none");
  }
};
