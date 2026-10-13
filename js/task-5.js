'use strict';

// Function to generate random hex color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Find interactive elements
const colorBtn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

// Change body background color on button click
colorBtn.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});
