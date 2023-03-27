/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  const suit = generateRanSuit();
  let entity = "&" + suit + ";";

  document.getElementById("top-suit").classList.add(suit);
  document.getElementById("bottom-suit").classList.add(suit);
  document.getElementById("number").classList.add(suit);
  document.getElementById("top-suit").setHTML(entity);
  document.getElementById("bottom-suit").setHTML(entity);
  document.getElementById("number").setHTML(generateRanNum());
};

function generateRanNum() {
  let numbers = [
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
    "K",
    "A"
  ];
  let numbersIndex = Math.floor(Math.random() * numbers.length);
  return numbers[numbersIndex];
}

function generateRanSuit() {
  let suitType = ["clubs", "spades", "diams", "hearts"];
  let suitIndex = Math.floor(Math.random() * suitType.length);
  return suitType[suitIndex];
}
