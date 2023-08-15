"use strict";

(() => {
  const menuBtn = document.querySelector("[data-menu-button]");
  const mobileMenu= document.querySelector("[data-mobile-menu]");

  menuBtn.addEventListener("click", () => {
    const expanded =
      menuBtn.getAttribute("aria-expanded") === "true";

    menuBtn.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", !expanded); 
    mobileMenu.classList.toggle("is-open");

    window
    .matchMedia('(min-width: 600px)')
    .addEventListener(
      'change',
      e => e.matches && mobileMenu.classList.remove('is-open'),
    );
  });
})();
