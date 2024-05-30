import { calcPrice } from "./calcPrice.js";
import { countItemsInCart } from "./countItemsInCart.js";
import { toggleCartStatus } from "./toggleCartStatus.js";
import { updateStorage } from "./updateStorage.js";

// Добавление товаров в корзину
export const addToCart = (
  btnCart,
  image,
  productTitle,
  productDescr,
  productPrice,
  counter,
  id
) => {
  btnCart.addEventListener("click", function (e) {
    if (e.target.hasAttribute("data-cart")) {
      const cartItemHtml = `
          <div class="dishes__item cart__item"  data-id="${id}">
                              <img src="${image}" alt="burger" class="dishes__img cart__img">
                              <span class="dishes__name">${productTitle}</span>
                              <div class="dishes__item-wrapper">
                                  <span class="dishes__price cart__price">$ ${productPrice}</span>
                                  <div class="dishes__counter counter cart__counter">
                                      <button class="counter__control" data-action="minus">-</button>
                                      <div class="counter__current" data-counter-current data-counter-in-cart>${counter.innerText}</div>
                                      <button class="counter__control" data-action="plus">+</button>
                                  </div>
                              </div>
                <button class="dishes__close" id='delete'>
                                  <img src="./img/dishes/close.svg" alt="close" id='delete'>
                              </button>
                          </div>`;

      const cartWrapper = document.querySelector(".cart__wrapper");
      const itemInCart = cartWrapper.querySelector(`[data-id='${id}']`);

      if (itemInCart) {
        const counterEl = itemInCart.querySelector("[data-counter-current]");
        counterEl.innerText =
          parseInt(counterEl.innerText) + parseInt(counter.innerText);
      } else {
        cartWrapper.insertAdjacentHTML("beforeend", cartItemHtml);
      }
      counter.innerText = "0";
      countItemsInCart();
    }
    toggleCartStatus();
    calcPrice();
    updateStorage();
  });
};
