/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let loadPage = () => {
  //alert("This is just a test to make sure my JavaScript is working")
};
//window.onload = loadPage;

window.setTimeout(function() {
  window.location.reload();
}, 10000);

let deckBuilder = () => {
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];

  const cards = [];
  for (let s = 0; s < suits.length; s++) {
    for (let v = 0; v < values.length; v++) {
      const value = values[v];
      const suit = suits[s];
      cards.push({ value, suit });
    }
  }
  return cards;
};

let randomCard = cards => {
  const random = Math.floor(Math.random() * 51);
  const cardValue = cards[random].value;
  const cardSuit = cards[random].suit;

  let entity;
  if (cardSuit === "Diamonds") {
    entity = "&diams;";
  } else if (cardSuit === "Hearts") {
    entity = "&hearts;";
  } else if (cardSuit === "Spades") {
    entity = "&spades;";
  } else if (cardSuit === "Clubs") {
    entity = "&clubs;";
  }

  const card = document.createElement("div");
  card.classList.add("card", cardSuit.toLowerCase());
  card.innerHTML =
    '<span class="card-value-suit top">' +
    cardValue +
    entity +
    "</span>" +
    '<span class="card-suit">' +
    entity +
    "</span>" +
    '<span class="card-value-suit bot">' +
    cardValue +
    entity +
    "</span>";
  document.body.appendChild(card);
};

const cards = deckBuilder();
randomCard(cards);

const button = document.createElement("button");
button.innerText = "New Card";
button.id = "button1";
button.addEventListener("click", () => {
  button.onclick = location.reload();
});
document.body.appendChild(button);
