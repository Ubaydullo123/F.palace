var headerButton = document.querySelector(".header__button"),
  headerMenu = document.querySelector(".header__list"),
  menuOpened = !1,
  menuToggle = function () {
    (menuOpened = !menuOpened),
      headerButton.classList.toggle("open"),
      headerMenu.classList.toggle("open");
  };
(headerButton.onclick = menuToggle),
  (window.onclick = function (a) {
    !menuOpened ||
      a.composedPath().includes(headerButton) ||
      a.composedPath().includes(headerMenu) ||
      menuToggle();
  });
