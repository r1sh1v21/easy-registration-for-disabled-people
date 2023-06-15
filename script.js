const buttons = document.querySelectorAll('.read-out');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const inputId = button.dataset.inputId;
    const input = document.getElementById(inputId);
    const inputValue = input.name;

    // Use text-to-speech API to read out the input value
    const msg = new SpeechSynthesisUtterance(inputValue);
    window.speechSynthesis.speak(msg);
  });
});

const slider = document.getElementById('color-slider');
const bgd = document.querySelector('.container');
slider.addEventListener('input', () => {
  const value = slider.value;
  const color = `rgb(${value}, ${255 - value}, ${Math.floor(value / 2)})`;
  bgd.style.backgroundColor = color;
});

const slider2 = document.getElementById('font-size-slider');
const label1 = document.getElementById('aa')
const label2 = document.getElementById('aa1')
const label3 = document.getElementById('aa2')
const label4 = document.getElementById('aa3')
slider2.addEventListener('input', () => {
  const value = slider2.value;
  label1.style.fontSize = `${value}px`;
  label2.style.fontSize = `${value}px`;
  label3.style.fontSize = `${value}px`;
  label4.style.fontSize = `${value}px`;
});