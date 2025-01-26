const blousePrice = document.getElementById("blouse-price");
const shoesPrice = document.getElementById("shoes-price");
const dressPrice = document.getElementById("dress-price");
const beltPrice = document.getElementById("belt-price");
const totalPrice = document.getElementById("total-price");
const buttonDiscount = document.getElementById("button-discount");

let blousePriceTotal = +blousePrice.innerHTML;
let shoesPriceTotal = +shoesPrice.innerHTML;
let dressPriceTotal = +dressPrice.innerHTML;
let beltPriceTotal = +beltPrice.innerHTML;

let total =
  blousePriceTotal + shoesPriceTotal + dressPriceTotal + beltPriceTotal;
totalPrice.innerHTML = total.toFixed(2);

const getDiscount = () => {
  // Определяем скидку 20%
  let discountBlouse = blousePriceTotal * 0.2;
  let discountShoes = shoesPriceTotal * 0.2;
  let discountDress = dressPriceTotal * 0.2;
  let discountBelt = beltPriceTotal * 0.2;

  //высчитываем стоимость с учетом скидки 20%
  blousePriceTotal = blousePriceTotal - discountBlouse;
  shoesPriceTotal = shoesPriceTotal - discountShoes;
  dressPriceTotal = dressPriceTotal - discountDress;
  beltPriceTotal = beltPriceTotal - discountBelt;

  blousePrice.innerHTML = blousePriceTotal.toFixed(2);
  shoesPrice.innerHTML = shoesPriceTotal.toFixed(2);
  dressPrice.innerHTML = dressPriceTotal.toFixed(2);
  beltPrice.innerHTML = beltPriceTotal.toFixed(2);

  total = blousePriceTotal + shoesPriceTotal + dressPriceTotal + beltPriceTotal;
  totalPrice.innerHTML = total.toFixed(2);

  buttonDiscount.removeEventListener("click", getDiscount);
};

buttonDiscount.addEventListener("click", getDiscount);
