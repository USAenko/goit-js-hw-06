
let fontSizeControl = document.querySelector('#font-size-control')
let controlText = document.querySelector('#text')

fontSizeControl.addEventListener('change', inputChange);

function inputChange(action) {
  controlText.style.fontSize = action.currentTarget.value + 'px';
}