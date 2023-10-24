document.addEventListener("DOMContentLoaded", function () {
  let acc = new Accordion(".accordion__list", {
    duration: 300,
    elementClass: "accordion__item",
    triggerClass: "accordion__top",
    panelClass: "accordion__bottom",
    showMultiple: false,
    collapse: true,
    openOnInit: [0],
  });
});

const burgerBtn = document.getElementById("burger");
const burgerMenu = document.getElementById("bugrer-menu");
const body = document.body;
const header = document.querySelector(".header");

function openMenu() {
  burgerBtn.classList.add("active");
  burgerMenu.classList.add("active");
  body.classList.add("stop-scroll");
  header.classList.add("add-gap");
}

function closeMenu() {
  burgerBtn.classList.remove("active");
  burgerMenu.classList.remove("active");
  body.classList.remove("stop-scroll");
  header.classList.remove("add-gap");
}

burgerBtn.addEventListener("click", function () {
  if (burgerBtn.classList.contains("active")) {
    closeMenu();
  } else {
    openMenu();
  }
});

document.querySelectorAll(".header__nav--burger__a").forEach(function (elem) {
  elem.addEventListener("click", function () {
    closeMenu();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hero = document.querySelector(".hero");
  const header = document.querySelector(".header");
  const headerHeight = header.offsetHeight;

  window.addEventListener("scroll", function () {
    if (window.pageYOffset >= (hero.offsetHeight - headerHeight) / 2) {
      header.classList.add("fixed");
      hero.classList.add("cancel_gap");
    } else {
      header.classList.remove("fixed");
      hero.classList.remove("cancel_gap");
    }
  });
});
