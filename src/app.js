/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  const suit = generateRanSuit();
  document.querySelector(".top-suit").innerHTML = suit;
  document.querySelector(".bottom-suit").innerHTML = suit;
  document.querySelector(".number").innerHTML = generateRanNum();
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
  let suitType = ["♣", " ♠", "♦", "♥"];
  let suitIndex = Math.floor(Math.random() * suitType.length);
  return suitType[suitIndex];
}
