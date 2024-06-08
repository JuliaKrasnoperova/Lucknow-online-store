import { countItems } from "./countItems.js";
import { createCards } from "./createCards.js";
import { deleteItemFromCart } from "./deleteItemFromCart.js";
import { filterProduct } from "./filterProducts.js";
import { openCart } from "./openCart.js";
import { preloader } from "./preloader.js";

window.addEventListener("DOMContentLoaded", () => {
  createCards();
  countItems();
  deleteItemFromCart();
  openCart();
  preloader();
});
