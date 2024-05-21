function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById('controls');
const input = controls.querySelector('input');
const createButton = controls.querySelector('button[data-create]');
const destroyButton = controls.querySelector('button[data-destroy]');
const boxes = document.getElementById('boxes');


createButton.addEventListener('click', () => {
  const count = Number(input.value)
  if (count > 0 && count <= 100) {
    createBoxes(count);
    input.value = '';
  } else {
    alert('please choose a number from 1 to 100')
  }
})

destroyButton.addEventListener('click', () => {
  destroyBoxes();
});

function createBoxes(value) {
  boxes.innerHTML = '';
  let size = 30;

  for (let i = 0; i < value; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '20px';
    boxes.appendChild(box);
    size += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
}