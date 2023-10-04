// CHANGE BG BODY
let black = document.querySelector(
  ".container .part-left .content .fa-gears .black"
);
let red = document.querySelector(
  ".container .part-left .content .fa-gears .red"
);
let yellow = document.querySelector(
  ".container .part-left .content .fa-gears .yellow"
);
let blue = document.querySelector(
  ".container .part-left .content .fa-gears .blue"
);
let green = document.querySelector(
  ".container .part-left .content .fa-gears .green"
);
// Body Element
let body = document.querySelector("body");

// NavBar Element
let nav = document.querySelector("nav");

// a Element
let as = document.querySelectorAll(".container nav ul li a");

// changeColor
let changeColor = document.getElementById("changeColor");

black.addEventListener("click", () => {
    body.style.background = "#222";
    nav.style.background = "#2c2c2c";
    changeColor.innerHTML = "Dark";
});
red.addEventListener('click', () => {
    body.style.background = "#f44336";
    nav.style.background = "#f443";
    changeColor.innerHTML = 'Red';
})
yellow.addEventListener("click", () => {
    body.style.background = "#cddc39";
    nav.style.background = "#f443";
    changeColor.innerHTML = "Yellow";
});
blue.addEventListener("click", () => {
    body.style.background = "#1c8de7";
    nav.style.background = "#f443";
    changeColor.innerHTML = "Blue";
});
green.addEventListener("click", () => {
    body.style.background = "#329f36";
    nav.style.background = "#f443";
    changeColor.innerHTML = "Green";
});


