import { countItemsInCart } from "./countItemsInCart.js";

let cart = document.querySelector(".cart__wrapper");

export const updateStorage = () => {
  let html = cart.innerHTML;
  html = html.trim();

  if (html.length) {
    localStorage.setItem("products", html);
  } else {
    localStorage.removeItem("products");
  }
};

const initialState = () => {
  if (localStorage.getItem("products") !== null) {
    cart.innerHTML = localStorage.getItem("products");
    countItemsInCart();
  }
};

initialState();
