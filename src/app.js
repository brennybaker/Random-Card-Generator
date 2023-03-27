/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
//   document.querySelector(".card").classList.add("club");
//   document.querySelector(".card").classList.add("diamond");
//   document.querySelector(".card").classList.add("heart");
//   document.querySelector(".card").classList.add("spade");
  var newSuit = generateRanSuit();
};

let generateRanNum = () => {
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
};

let generateRanSuit = () => {
  let suit = ["club", "diamond", "heart", "spade"];
  let suitIndex = Math.floor(Math.random() * suit.length);
  return suit[suitIndex];
};
