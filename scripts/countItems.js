"use strict";

import { calcPrice } from "./calcPrice.js";
import { countItemsInCart } from "./countItemsInCart.js";

// Счетчик товаров
export const countItems = () => {
  const itemsWrapper = document.querySelector(".wrapper");

  itemsWrapper.addEventListener("click", function (e) {
    if (e.target.dataset.action === "minus") {
      const cartCounter = e.target.closest(".counter");
      const currentValue = cartCounter.querySelector("[data-counter-current]");
      if (parseInt(currentValue.innerText) > 1) {
        currentValue.innerText = --currentValue.innerText;
        calcPrice();
        countItemsInCart();
      }
    }

    if (e.target.dataset.action === "plus") {
      const cartCounter = e.target.closest(".counter");
      const currentValue = cartCounter.querySelector("[data-counter-current]");
      currentValue.innerText = ++currentValue.innerText;
      calcPrice();
      countItemsInCart();
    }
  });
};
