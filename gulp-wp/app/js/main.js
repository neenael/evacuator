document.addEventListener("DOMContentLoaded", function () {
  let acc = new Accordion(".accordion__list", {
    duration: 300,
    elementClass: "accordion__item",
    triggerClass: "accordion__top",
    panelClass: "accordion__bottom",
    showMultiple: false,
    collapse: true,
  });
});

const burgerBtn = document.getElementById("burger");
const burgerMenu = document.getElementById("bugrer-menu");
const body = document.body;

function openMenu() {
  burgerBtn.classList.add("active");
  burgerMenu.classList.add("active");
  body.classList.add("stop-scroll");
}

function closeMenu() {
  burgerBtn.classList.remove("active");
  burgerMenu.classList.remove("active");
  body.classList.remove("stop-scroll");
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
