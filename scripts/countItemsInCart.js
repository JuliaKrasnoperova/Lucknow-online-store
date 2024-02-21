"use srtict";
// Счетчик на значке с корзиной
export const countItemsInCart = () => {
  const cartCounterValue = document.querySelectorAll("[data-counter-in-cart]");
  const arrValues = [];
  for (let item of cartCounterValue) {
    arrValues.push(Number(item.innerText));
  }
  const totalVal = arrValues.reduce((a, b) => a + b, 0);
  document.querySelector(".header__btn-counter").innerText = totalVal;
};
