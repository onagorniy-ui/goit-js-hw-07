'use strict';

// get all DOM-elements
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// add event listener for input
nameInput.addEventListener('input', event => {
  const trimValue = event.target.value.trim();
  // conditional assignment
  trimValue.length > 0 ? (nameOutput.textContent = trimValue) : (nameOutput.textContent = 'Anonymous');
});
