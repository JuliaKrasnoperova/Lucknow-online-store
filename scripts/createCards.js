
import { products } from "./consts.js";
import { addToCart } from "./addToCart.js";

// Создание карточки товара
export const createCards = () => {
  for (let i of products.data) {
    const productsWrapper = document.getElementById("products");

    const card = document.createElement("div");
    card.classList.add("dishes__item", i.category, "hide");
    card.setAttribute("data-id", i.id);

    const cardImage = document.createElement("img");
    cardImage.classList.add("dishes__img");
    cardImage.setAttribute("src", i.image);

    const cardName = document.createElement("span");
    cardName.classList.add("dishes__name");
    cardName.innerText = i.productName;

    const cardDescr = document.createElement("p");
    cardDescr.classList.add("dishes__descr");
    cardDescr.innerText = i.productDescr;

    const cardWrapper = document.createElement("div");
    cardWrapper.classList.add("dishes__item-wrapper");

    const price = document.createElement("span");
    price.classList.add("dishes__price");
    price.innerText = "$" + i.price;

    const dishesCounter = document.createElement("div");
    dishesCounter.classList.add("dishes__counter", "counter");

    const counterMinus = document.createElement("button");
    counterMinus.classList.add("counter__control");
    counterMinus.setAttribute("data-action", "minus");
    counterMinus.innerText = "-";

    const counterPlus = document.createElement("button");
    counterPlus.classList.add("counter__control");
    counterPlus.setAttribute("data-action", "plus");
    counterPlus.innerText = "+";

    const counterCurrent = document.createElement("div");
    counterCurrent.classList.add("counter__current");
    counterCurrent.setAttribute("data-counter", "");
    counterCurrent.setAttribute("data-counter-current", "");
    counterCurrent.innerText = "0";

    dishesCounter.appendChild(counterMinus);
    dishesCounter.appendChild(counterCurrent);
    dishesCounter.appendChild(counterPlus);

    const cardButton = document.createElement("button");
    cardButton.classList.add("dishes__button");
    cardButton.setAttribute("data-cart", "");

    const cardButtonImg = document.createElement("img");
    cardButtonImg.classList.add("dishes__cart");
    cardButtonImg.setAttribute("src", "./img/dishes/cart.svg");
    cardButtonImg.setAttribute("data-cart", "");
    cardButtonImg.setAttribute("alt", "cart");

    card.appendChild(cardImage);
    card.appendChild(cardName);
    card.appendChild(cardDescr);

    cardWrapper.appendChild(price);
    cardWrapper.appendChild(dishesCounter);
    cardWrapper.appendChild(cardButton);

    cardButton.appendChild(cardButtonImg);

    card.appendChild(cardWrapper);

    productsWrapper.appendChild(card);

    addToCart(
      cardButton,
      i.image,
      i.productName,
      i.productDescr,
      i.price,
      counterCurrent,
      i.id,
      counterPlus,
      counterMinus
    );
  }
};
