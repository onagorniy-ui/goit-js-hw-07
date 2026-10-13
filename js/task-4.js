'use strict';

//get form element
const loginForm = document.querySelector('.login-form');

//add event listener to form submit
loginForm.addEventListener('submit', event => {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value.trim();
  const password = event.currentTarget.elements.password.value.trim();

  //check if form fields are filled in
  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }

  //create object with form data
  const formData = { email, password };
  console.log(formData);

  //reset form
  event.currentTarget.reset();
});
