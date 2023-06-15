const fontSizeRange = document.getElementById('fontSize');

function changeFontSize() {
  const newSize = fontSizeRange.value;
  document.body.style.fontSize = `${newSize}px`;
}

fontSizeRange.addEventListener('input', changeFontSize);