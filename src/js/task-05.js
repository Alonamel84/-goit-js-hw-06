const inputText = document.querySelector('#name-input');
const outPutText = document.querySelector('#name-output');
inputText.addEventListener('input', e => {
  if (inputText.value === '') {
    outPutText.textContent = 'Anonymos';
    return;
  }
  outPutText.textContent = inputText.value;
});
