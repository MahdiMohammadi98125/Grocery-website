// Making mobile navigation works
let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".main-nav-links");
let header = document.querySelector(".bottom-part-header");

menu.addEventListener("click", () => {
  menu.classList.toggle("icon-mobile-nav");
  navbar.classList.toggle("active");
});

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  if (window.scrollY > 150) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};
