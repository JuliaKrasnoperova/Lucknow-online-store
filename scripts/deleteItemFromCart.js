import { calcPrice } from "./calcPrice.js";
import { countItemsInCart } from "./countItemsInCart.js";
import { toggleCartStatus } from "./toggleCartStatus.js";

// Удаление товара из корзины
export const deleteItemFromCart = () => {
  document.addEventListener("click", function (event) {
    const removeButton = event.target.closest("#delete");

    if (removeButton) {
      removeButton.closest(".dishes__item").remove();
      toggleCartStatus();
      calcPrice();
      countItemsInCart();
    }
  });
};
