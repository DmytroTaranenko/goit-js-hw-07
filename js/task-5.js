function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const body = document.body
const colorValue = document.querySelector('.color')
const changeColor = document.querySelector('.change-color-btn')

changeColor.addEventListener('click', (event) => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor
  colorValue.textContent = randomColor;
});
