// модуль валидации формы
import {priceInput} from './form.js';

const form = document.querySelector('.ad-form');
const titleInput = form.querySelector('#title');

form.addEventListener('invalid', function () {
  return false;
})

titleInput.addEventListener('invalid', function () {
  if (titleInput.validity.tooShort) {
    titleInput.setCustomValidity('Заголовок должен состоять минимум из 30 символов, приятель');
  } else if (titleInput.validity.valueMissing) {
    titleInput.setCustomValidity('Обязательное поле, кореш');
  } else {
    titleInput.setCustomValidity('');
  }
});

priceInput.value = priceInput.textContent;

priceInput.addEventListener('invalid', function() {
  if (priceInput.validity.tooShort) {
    priceInput.setCustomValidity('Заголовок должен состоять минимум из 30 символов, приятель');
  } else if (priceInput.validity.valueMissing) {
    priceInput.setCustomValidity('Укажи цену, друг');
  } else {
    priceInput.setCustomValidity('');
  }
})

export {form,titleInput};
