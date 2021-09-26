const textInputText = document.querySelector('input');

const dataLength = document.querySelector('input[data-length]');

// console.log(dataLength.dataset.length);
textInputText.addEventListener('blur', e => {
  textInputText.classList.add('invalid');
  if (textInputText.value.length === Number(textInputText.dataset.length)) {
    textInputText.classList.replace('invalid', 'valid');
  } else textInputText.classList.replace('valid', 'invalid');
});
