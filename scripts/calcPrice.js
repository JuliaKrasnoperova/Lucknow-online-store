"use strict";

// Подсчет стоимости всех товаров в корзине
export const calcPrice = () => {
  const cartItems = document.querySelectorAll(".cart__item");
  const totalPriceEl = document.querySelector(".cart__total-price");
  let totalPrice = 0;

  cartItems.forEach(function (item) {
    const amountEl = item.querySelector("[data-counter-current]").innerText;
    const pricetEl = item
      .querySelector(".cart__price")
      .innerText.replace("$", "");

    const currentPrice = parseInt(amountEl) * parseInt(pricetEl);
    totalPrice += currentPrice;
  });

  totalPriceEl.innerText = totalPrice;
};
