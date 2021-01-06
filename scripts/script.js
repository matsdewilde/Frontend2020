var button = document.querySelector("header section:nth-of-type(1) #hamburger");
var menu = document.querySelector("header section:nth-of-type(1)");

button.addEventListener("click", klapuit);

function klapuit() {
    menu.classList.toggle("menu")
}