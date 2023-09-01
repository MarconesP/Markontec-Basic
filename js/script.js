const sousMenuService = document.getElementById("service");
const navigation = document.querySelector("nav");

sousMenuService.addEventListener("click", toggleNav);

function toggleNav() {
  sousMenuService.classList.toggle("items-sous-menu");
  sousMenuService.classList.toggle("items-sous-menu");
}
