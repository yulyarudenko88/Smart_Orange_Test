const slides = document.querySelectorAll(".slide");
const nextSlide = document.querySelector(".btn-next");
const prevSlide = document.querySelector(".btn-prev");
const paginationItems = document.querySelectorAll(".pagination-item");

let curSlide = 0;
let maxSlide = slides.length - 1;

slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});

nextSlide.addEventListener("click", () => {
  curSlide += 1;

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
  });

  updateButtonState();
  updateActivePagination();
});

prevSlide.addEventListener("click", () => {
  curSlide -= 1;

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
  });

  updateButtonState();
  updateActivePagination();
});

function updateButtonState() {
  if (curSlide === maxSlide) {
    nextSlide.disabled = true;
  } else {
    nextSlide.disabled = false;
  }

  if (curSlide === 0) {
    prevSlide.disabled = true;
  } else {
    prevSlide.disabled = false;
  }
}

function updateActivePagination() {
  paginationItems.forEach((item, index) => {
    if (index === curSlide) {
      item.classList.add("pagination-item--active");
    } else {
      item.classList.remove("pagination-item--active");
    }
  });
}

updateActivePagination();
