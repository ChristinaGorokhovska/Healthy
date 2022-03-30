const hamburger = document.querySelector("#hamburger");
const popupMenu = document.querySelector("#popup-menu");
const menu = document.querySelector("#menu__list").cloneNode(1);
const btn = document.querySelector("#btn-download").cloneNode(1);
const body = document.body;

hamburger.addEventListener("click", (e) => {
  e.preventDefault();
  popupMenu.classList.toggle("open");
  hamburger.classList.toggle("active");
  body.classList.toggle("noscroll");
  AddToMenu();
});

function AddToMenu() {
  popupMenu.appendChild(menu);
  popupMenu.appendChild(btn);
}
