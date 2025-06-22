function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
const body = document.querySelector("body");

changeColor.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
  colorSpan.textContent = newColor;
})





// Styles
const widget = document.querySelector(".widget");
widget.style.maxWidth = "169px";
widget.style.height = "80px";
widget.style.margin = "auto";

const button = document.querySelector(".change-color");
button.style.borderRadius = "8px";
button.style.border = "0";
button.style.padding = "8px 16px";
button.style.minWidth = "148px";
button.style.height = "40px";
button.style.background = "#4e75ff";
button.style.color = "#fff";

button.addEventListener("mouseenter", () => {
  button.style.background = "#6c8cff";
});

button.addEventListener("mouseleave", () => {
  button.style.background = "#4e75ff";
});

