"use strict";

const submitButton = document.querySelector(".form .button-secondary");
const checkbox = document.querySelector(".form .checkbox-input");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", "disabled");
  }
});