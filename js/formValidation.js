"use strict";

const formInputs = document.querySelectorAll(".form-input");

formInputs.forEach((input) => {
  input.addEventListener("input", () => {
    const label = input.nextElementSibling;
    if (!label) {
      return;
    }

    if (!input.checkValidity() || input.value.trim() === "") {
      input.classList.add("invalid-input");
    } else {
      input.classList.remove("invalid-input");
    }

    if (input.value.trim() === "") {
      label.classList.remove("label-hidden");
    } else {
      label.classList.add("label-hidden");
    }
  });
});