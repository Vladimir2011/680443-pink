var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var pageHeaderWrapper = document.querySelector(".page-header__logo-wrapper");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
    pageHeaderWrapper.classList.add("page-header__logo-wrapper--open");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
    pageHeaderWrapper.classList.remove("page-header__logo-wrapper--open");
  }
});
