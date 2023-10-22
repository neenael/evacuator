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
