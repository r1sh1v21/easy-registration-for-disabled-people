const inputField = document.getElementById('input-field');
const virtualKeyboard = document.getElementById('virtual-keyboard');

virtualKeyboard.addEventListener('click', (event) => {
  const key = event.target.innerText;
  if (key !== undefined && key !== 'Space') {
    inputField.value += key;
  } else if (key === 'Space') {
    inputField.value += ' ';
  }
});
