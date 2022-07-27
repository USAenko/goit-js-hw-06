function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');
const pEl = document.querySelector('.widget p')

buttonEl.addEventListener('click', colorChanger);

function colorChanger() {
  pEl.style.color = getRandomHexColor();
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  console.log(color)  
  spanEl.textContent = color;
  
}