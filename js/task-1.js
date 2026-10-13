'use strict';

// find all category items
const allCategories = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${allCategories.length}`);

// iterate over each category and display title and elements count
allCategories.forEach(category => {
  const headerText = category.querySelector('h2').textContent;
  const categoryElements = category.querySelectorAll('ul li');

  console.log(`Category: ${headerText}`);
  console.log(`Elements: ${categoryElements.length}`);
});
