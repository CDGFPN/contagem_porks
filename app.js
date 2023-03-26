const comidas = [
  {    nome: "Oldwest",
    valor: 20,
  },
  {
    id: 2,
    nome: "Porks Bacon",
    valor: 20,
  },
  {    nome: "Blues Burger",
    valor: 25,
  },
  {    nome: "Pork Burrito",
    valor: 22,
  },
  {    nome: "Pernil Municipal",
    valor: 20,
  },
  {    nome: "Sweet Home Alabama",
    valor: 22,
  },
  {    nome: "Cheese Salad",
    valor: 22,
  },
  {    nome: "Porkspoca",
    valor: 10,
  },
  {    nome: "Torresmo de Tira",
    valor: 22,
  },
  {
    nome: "Torresmo Mineiro",
    valor: 20,
  },
  {
    nome: "Mix de Torresmos",
    valor: 20,
  },
  {
    nome: "Costelinha BBQ",
    valor: 25,
  },
  {
    nome: "Linguicinha Artesanal",
    valor: 20,
  },
  {
    nome: "Bei Com Melado",
    valor: 18,
  },
  {
    nome: "Calabresa",
    valor: 20,
  },
  {
    nome: "Pastelzinho",
    valor: 25,
  },
  {
    nome: "Queijinho Empanadinho",
    valor: 22,
  },
  {
    nome: "Bolinho de Macaxeira",
    valor: 22,
  },
  {
    nome: "Batata Tropeira",
    valor: 25,
  },
  {
    nome: "Fish and Chips",
    valor: 28,
  },
  {
    nome: "Batata Rústica",
    valor: 20,
  },
  {
    nome: "Porks Fritas",
    valor: 20,
  },
  {
    nome: "Fucking Fritas",
    valor: 25,
  },
  {
    nome: "Dadinho",
    valor: 23,
  },
  {
    nome: "Pastel Raiz",
    valor: 25,
  }
];

comidas.forEach(function (comidas) {
  addItemToCart(comidas.nome, comidas.valor);
});

function addItemToCart(title, price) {
  var cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  var cartRowContents = `
        <div class="cart-item cart-column">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">R$${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="0" min=0 name="inputComida">
            <span class="cart-quantity-text">R$0</span>
        </div>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
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


var btnComida = document.querySelector(".btn-comidas");
var btnDrinks = document.querySelector(".btn-drinks");

const drinks = [
  {
    nome: "Tropical Gin",
    valor: 28,
  },
  {
    nome: "Lady Pig",
    valor: 25,
  },
  {
    nome: "Gabriela Cravo",
    valor: 25,
  },
  {
    nome: "Valerie Gin",
    valor: 28,
  },
  {
    nome: "Gin Tônica",
    valor: 22,
  },
  {
    nome: "Melancia Atômica",
    valor: 25,
  },
  {
    nome: "C#UP@ ESSA MANGA",
    valor: 25,
  },
  {
    nome: "Moscow Mule",
    valor: 28,
  },
  {
    nome: "Pink Mule",
    valor: 25,
  },
  {
    nome: "Dale Pink",
    valor: 25,
  },
  {
    nome: "Apple Pie",
    valor: 25,
  },
  {
    nome: "Cosmopolitan",
    valor: 25,
  },
  {
    nome: "Porks Fire",
    valor: 25,
  },
  {
    nome: "Caipirinha Morango",
    valor: 25,
  },
  {
    nome: "Caipirinha Limão",
    valor: 22,
  },
  {
    nome: "Caipirinha Maracujá",
    valor: 25,
  },
  {
    nome: "Saquerinha de Morango",
    valor: 28,
  },
  {
    nome: "Bananinha",
    valor: 15,
  },
  {
    nome: "Shot Tequila",
    valor: 20,
  },
  {
    nome: "Jack & Coke",
    valor: 25,
  },
  {
    nome: "Soda Italiana",
    valor: 12,
  },
  {
    nome: "Red Bull",
    valor: 16,
  }
];

btnComida.addEventListener("click", () => {
  document.querySelector(".section-drinks").classList.add("hide");
  document.querySelector(".section-comidas").classList.remove("hide");
});

btnDrinks.addEventListener("click", () => {
  document.querySelector(".section-comidas").classList.add("hide");
  document.querySelector(".section-drinks").classList.remove("hide");
});

drinks.forEach(function (drinks) {
  addDrinkToCart(drinks.nome, drinks.valor);
});

function addDrinkToCart(title, price) {
  var cartRow = document.createElement("div");
  cartRow.classList.add("drink-row");
  var cartItems = document.getElementsByClassName("cart-drink-items")[0];
  var cartRowContents = `
          <div class="cart-item cart-column">
              <span class="cart-item-title">${title}</span>
          </div>
          <span class="drink-price cart-column">R$${price}</span>
          <div class="cart-quantity cart-column">
              <input class="drink-quantity-input" type="number" value="0" name="inputDrink" min=0>
              <span class="drink-quantity-text">R$0</span>
          </div>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
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
