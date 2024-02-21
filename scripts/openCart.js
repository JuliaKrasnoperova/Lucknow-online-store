"use strict";
// Открытие корзины по нажатию картинки с корзиной
export const openCart = () => {
  const cartBtn = document.querySelector("#cart");
  const cart = document.querySelector("#cartBlock");
  const cartBntClose = cart.querySelector("#cartClose");
  const cartBg = document.querySelector(".cart__bg");
  const html = document.querySelector("html");

  cartBtn.addEventListener("click", function () {
    cart.classList.remove("cart__none");
    cartBg.classList.remove("cart__bg-none");
    html.classList.add("locked");
    cart.style.overflow = "scroll";
  });

  cartBntClose.addEventListener("click", function () {
    cart.classList.add("cart__none");
    cartBg.classList.add("cart__bg-none");
    html.classList.remove("locked");
  });

  cartBg.addEventListener("click", function (e) {
    if (e.target.dataset.action === "bg") {
      cart.classList.add("cart__none");
      this.classList.add("cart__bg-none");
      html.classList.remove("locked");
    }
  });
};
