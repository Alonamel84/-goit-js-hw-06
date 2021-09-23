const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ingredientsList = ingredients.map(item => {
  const li = document.createElement('li');
  li.textContent = item;
  li.classList.add('item');
  return li;
});

document.querySelector('#ingredients').append(...ingredientsList);
console.log(ingredientsList);
