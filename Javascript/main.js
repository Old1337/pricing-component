"use strict";

const rangeBar = document.querySelector(".pricing-component_range-bar");
const priceEl = document.querySelectorAll(".price");
const durationEl = document.querySelectorAll(".duration");

const toggleBtn = document.querySelector('input[type="checkbox"]');

rangeBar.addEventListener("input", () => {
  priceEl.forEach((el) => (el.textContent = `$${rangeBar.value}`));

  if (rangeBar.dataset.yearly === "true") {
    priceEl.forEach((el) => (el.textContent = `$${rangeBar.value * 2}`));
  }

  console.log(rangeBar.min);
  rangeBar.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${
    (rangeBar.value / 32) * 100
  }%, hsl(224, 65%, 95%) ${
    (rangeBar.value / 32) * 100
  }%, hsl(224, 65%, 95%) 100%)`;
});

toggleBtn.addEventListener("click", () => {
  if (rangeBar.dataset.yearly === "false") {
    priceEl.forEach((el) => (el.textContent = `$${rangeBar.value * 2}`));
    rangeBar.dataset.yearly = "true";
  } else {
    rangeBar.dataset.yearly = "false";

    priceEl.forEach((el) => (el.textContent = `$${rangeBar.value}`));
  }
});
