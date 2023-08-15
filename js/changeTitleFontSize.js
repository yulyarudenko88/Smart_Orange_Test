"use strict";

  window.addEventListener("load", changeTitleFontSize);
  window.addEventListener("resize", changeTitleFontSize);

  function changeTitleFontSize() {
    const overlayElements = document.querySelectorAll(".overlay");
    overlayElements.forEach((overlay) => {
      const overlayTitle = overlay.querySelector(".overlay-title");
      const overlayWidth = overlay.offsetWidth;
      const fontSize = overlayWidth * 0.1;
      overlayTitle.style.fontSize = `${fontSize}px`;
    });}
  