"use strict";

// Når HTML og CSS er loaded startes sidenVises
window.addEventListener("load", sidenVises);

// Når #burger_knap er "clicked" startes toggleMenu
function sidenVises() {
  const burgerKnap = document.querySelector("#burger_knap");
  burgerKnap.addEventListener("click", toggleMenu);
  console.log("siden vises");
}

// Hvis #burger_knap og #menu ikke har classen .open, addes den.
// Hvis de omvendt har .open, fjernes den
function toggleMenu() {
  const burgerKnap = this;
  const menu = document.querySelector("#mobile_menu");

  burgerKnap.classList.toggle("open");
  menu.classList.toggle("open");
}
