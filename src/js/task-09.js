function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const spanChange = document.querySelector('.color');

document.querySelector('button').addEventListener('click', e => {
  // console.log(e.target.backgroundColor);
  document.querySelector('body').style.backgroundColor = getRandomHexColor();
  spanChange.textContent = document.querySelector('body').style.backgroundColor;
});
