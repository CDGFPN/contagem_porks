const comidas = [
  { id: 1, nome: "Oldwest", valor: 20 },
  { id: 2, nome: "Porks Bacon", valor: 20 },
  { id: 3, nome: "Blues Burger", valor: 25 },
  { id: 4, nome: "Pork Burrito", valor: 22 },
  { id: 5, nome: "Pernil Municipal", valor: 20 },
  { id: 6, nome: "Sweet Home Alabama", valor: 22 },
  { id: 7, nome: "Cheese Salad", valor: 22 },
  { id: 8, nome: "Porkspoca", valor: 10 },
  { id: 9, nome: "Torresmo de Tira", valor: 22 },
  { id: 10, nome: "Torresmo Mineiro", valor: 20 },
  { id: 11, nome: "Mix de Torresmos", valor: 20 },
  { id: 12, nome: "Costelinha BBQ", valor: 25 },
  { id: 13, nome: "Linguicinha Artesanal", valor: 20 },
  { id: 14, nome: "Bei Com Melado", valor: 18 },
  { id: 15, nome: "Calabresa", valor: 20 },
  { id: 16, nome: "Pastelzinho", valor: 25 },
  { id: 17, nome: "Queijinho Empanadinho", valor: 22 },
  { id: 18, nome: "Bolinho de Macaxeira", valor: 22 },
  { id: 19, nome: "Batata Tropeira", valor: 25 },
  { id: 20, nome: "Fish and Chips", valor: 28 },
  { id: 21, nome: "Batata Rústica", valor: 20 },
  { id: 22, nome: "Porks Fritas", valor: 20 },
  { id: 23, nome: "Fucking Fritas", valor: 25 },
  { id: 24, nome: "Dadinho", valor: 23 },
  { id: 25, nome: "Pastel Raiz", valor: 25 },
];

let btnComida = document.querySelector(".btn-comidas");
let btnDrinks = document.querySelector(".btn-drinks");

btnComida.addEventListener("click", () => {
  document.querySelector(".section-drinks").classList.add("hide");
  document.querySelector(".section-comidas").classList.remove("hide");
});

btnDrinks.addEventListener("click", () => {
  document.querySelector(".section-comidas").classList.add("hide");
  document.querySelector(".section-drinks").classList.remove("hide");
});


comidas.forEach(function (comidas) {
  addItemToCart(comidas.id, comidas.nome, comidas.valor);
});

function addItemToCart(id, title, price) {
  const input_comida = `input-comida-${id}`;
  const diminui_input = `diminui-input-${id}`;
  const aumenta_input = `aumenta-input-${id}`;
  var cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  var cartRowContents = `
        <div class="cart-item cart-column">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">R$${price}</span>
        <div class="cart-quantity cart-column">
            <i class="fas fa-minus pointer fa-xl mx-2 text-white" id="${diminui_input}"></i>
            <input class="cart-quantity-input" id="${input_comida}" type="number" value="0" min=0 name="inputComida" disabled>
            <i class="fas fa-plus pointer fa-xl mx-2 text-white" id="${aumenta_input}"></i>
            <span class="cart-quantity-text">R$0</span>
        </div>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);

  const input = document.getElementById(input_comida);
  const decreaseButton = document.getElementById(diminui_input);
  const increaseButton = document.getElementById(aumenta_input);

  increaseButton.addEventListener("click", () => {
      input.value = parseInt(input.value) + 1;
      input.dispatchEvent(new Event("change"));
      updateCartTotal()
  });

  decreaseButton.addEventListener("click", () => {
    if (input.value > input.min) {
      input.value = parseInt(input.value) - 1;
    }
    input.dispatchEvent(new Event("change"));
      updateCartTotal()
  });

  cartRow.decreaseButton
  cartRow.increaseButton
  cartRow
    .getElementsByClassName("cart-quantity-input")[0]
    .addEventListener("change", updateCartTotal);
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName("cart-items")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    var quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    var price = parseFloat(priceElement.innerText.replace("R$", ""));
    var quantity = quantityElement.value;
    total += price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("cart-total-price")[0].innerText =
    "R$" + total;
  return total;
}


document.querySelectorAll("input[name='inputComida']").forEach((n, i) => {
  n.onchange = function () {
    i == 0 ? (anterior = 1) : null;
    var cartItemContainer = document.getElementsByClassName("cart-items")[0];
    var cartRows = cartItemContainer.getElementsByClassName("cart-row");
    var totalItem = 0;

    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    var quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    var price = parseFloat(priceElement.innerText.replace("R$", ""));
    var quantity = quantityElement.value;
    totalItem = price * quantity;

    totalItem = Math.round(totalItem * 100) / 100;
    document.querySelectorAll(".cart-quantity-text")[i].innerText =
      "R$" + totalItem;
    anterior = i;
  };
});

const drinks = [
  {id:1, nome: "Tropical Gin", valor: 28},
  {id:2, nome: "Lady Pig", valor: 25},
  {id:3, nome: "Gabriela Cravo", valor: 25},
  {id:4, nome: "Valerie Gin", valor: 28},
  {id:5, nome: "Gin Tônica", valor: 22},
  {id:6, nome: "Melancia Atômica", valor: 25},
  {id:7, nome: "C#UP@ ESSA MANGA", valor: 25},
  {id:8, nome: "Moscow Mule", valor: 28},
  {id:9, nome: "Pink Mule", valor: 25},
  {id:10, nome: "Dale Pink", valor: 25},
  {id:11, nome: "Apple Pie", valor: 25},
  {id:12, nome: "Cosmopolitan", valor: 25},
  {id:13, nome: "Porks Fire", valor: 25},
  {id:14, nome: "Caipirinha Morango", valor: 25},
  {id:15, nome: "Caipirinha Limão", valor: 22},
  {id:16, nome: "Caipirinha Maracujá", valor: 25},
  {id:17, nome: "Saquerinha de Morango", valor: 28},
  {id:18, nome: "Bananinha", valor: 15},
  {id:19, nome: "Shot Tequila", valor: 20},
  {id:20, nome: "Jack & Coke", valor: 25},
  {id:21, nome: "Soda Italiana", valor: 12},
  {id:22, nome: "Red Bull", valor: 16}
];


drinks.forEach(function (drinks) {
  addDrinkToCart(drinks.id, drinks.nome, drinks.valor);
});

function addDrinkToCart(id, title, price) {
  const input_drink = `input-drink-${id}`;
  const diminui_drink = `diminui-drink-${id}`;
  const aumenta_drink = `aumenta-drink-${id}`;
  var cartRow = document.createElement("div");
  cartRow.classList.add("drink-row");
  var cartItems = document.getElementsByClassName("cart-drink-items")[0];
  var cartRowContents = `
          <div class="cart-item cart-column">
              <span class="cart-item-title">${title}</span>
          </div>
          <span class="drink-price cart-column">R$${price}</span>
          <div class="cart-quantity cart-column">
              <i class="fas fa-minus pointer fa-xl mx-2 text-white" id="${diminui_drink}"></i>
            <input class="drink-quantity-input" id="${input_drink}" type="number" value="0" min=0 name="inputDrink" disabled>
            <i class="fas fa-plus pointer fa-xl mx-2 text-white" id="${aumenta_drink}"></i>
              <span class="drink-quantity-text">R$0</span>
          </div>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);

  const input = document.getElementById(input_drink);
  const decreaseButton = document.getElementById(diminui_drink);
  const increaseButton = document.getElementById(aumenta_drink);

  increaseButton.addEventListener("click", () => {
      input.value = parseInt(input.value) + 1;
      input.dispatchEvent(new Event("change"));
      updateCartTotal()
  });

  decreaseButton.addEventListener("click", () => {
    if (input.value > input.min) {
      input.value = parseInt(input.value) - 1;
    }
    input.dispatchEvent(new Event("change"));
      updateCartTotal()
  });

  cartRow.decreaseButton
  cartRow.increaseButton
  cartRow
    .getElementsByClassName("drink-quantity-input")[0]
    .addEventListener("change", updateDrinkTotal);

}

function updateDrinkTotal() {
  var cartItemContainer =
    document.getElementsByClassName("cart-drink-items")[0];
  var cartRows = cartItemContainer.getElementsByClassName("drink-row");
  var totalDrink = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceDrinkElement = cartRow.getElementsByClassName("drink-price")[0];
    var quantityElement = cartRow.getElementsByClassName(
      "drink-quantity-input"
    )[0];
    var price = parseFloat(priceDrinkElement.innerText.replace("R$", ""));
    var quantity = quantityElement.value;
    totalDrink += price * quantity;
  }
  totalDrink = Math.round(totalDrink * 100) / 100;
  document.getElementsByClassName("drink-total-price")[0].innerText =
    "$" + totalDrink;
}

document.querySelectorAll("input[name='inputDrink']").forEach((n, i) => {
  n.onchange = function () {
    i == 0 ? (anterior = 1) : null;
    var cartItemContainer =
      document.getElementsByClassName("cart-drink-items")[0];
    var drinkRows = cartItemContainer.getElementsByClassName("drink-row");
    var totalItem = 0;

    var drinkRow = drinkRows[i];
    var priceElement = drinkRow.getElementsByClassName("drink-price")[0];
    var quantityElement = drinkRow.getElementsByClassName(
      "drink-quantity-input"
    )[0];
    var price = parseFloat(priceElement.innerText.replace("R$", ""));
    var quantity = quantityElement.value;
    totalItem = price * quantity;

    totalItem = Math.round(totalItem * 100) / 100;
    document.querySelectorAll(".drink-quantity-text")[i].innerText =
      "R$" + totalItem;
    anterior = i;
  };
});
