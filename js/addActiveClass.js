const navigation = document.querySelector(".header-nav");
const navLinks = navigation.querySelectorAll(".nav-link");

navigation.querySelector(".nav-link").classList.add("active");

function setActiveLink(e) {
  e.preventDefault();

  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  e.currentTarget.classList.add("active");
}

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    setActiveLink(e);
  });
});
