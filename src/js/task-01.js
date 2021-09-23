const CountCategories = document.querySelectorAll('li.item').length;

console.log(`Number of categories: ${CountCategories}`);

document.querySelectorAll('.item').forEach(item => {
  item.querySelector('h2').textContent;
  console.log('Category:' + item.querySelector('h2').textContent);
  item.querySelectorAll('li').length;
  console.log('Element:' + item.querySelectorAll('li').length);
});
