const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");

menuButton.onclick = function (event) {
  const classList = menu.classList;

  if (classList.contains("menu-visible")) classList.remove("menu-visible");
  else classList.add("menu-visible");
};
