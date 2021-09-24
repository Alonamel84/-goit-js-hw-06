const textInputText = document.querySelector('input');
//  document.querySelector('data-length') = Number;
// const valueLength = document.querySelector('input[dataset]');
const dataLength = document.querySelector('input[data-length]');
dataLength.dataset.length;

textInputText.addEventListener('blur', e => {
  if (textInputText.value.length === Number(dataLength.dataset.length)) {
    return (textInputText.style.borderColor = '.validation - input.valid');
  }

  return (validation-Input.style.borderColor = 'red');
  console.log(validationInput);
});
