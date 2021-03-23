// модуль сообщения об успешной публикации обьявления или ошибке
import {
  form
} from './validate-form.js';
import {
  resetValues
} from './clean-form.js';
import {
  isEscEvent
} from './util.js'
import {
  postData
} from './api.js'

let successMessage = document.querySelector('#success').content.querySelector('.success');
let errorTemplate = document.querySelector('#error').content.querySelector('.error');
let errorMessage = errorTemplate.cloneNode(true);
let errorButton = errorMessage.querySelector('.error__button');
let pageMain = document.querySelector('main');


form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  postData(form);
  if (postData) {
    addSuccessMessage();
  } else {
    addErrorMessage();
  }
});

const addSuccessMessage = function () {
  successMessage.style.zIndex = 100;
  pageMain.appendChild(successMessage);
  setTimeout(function () {
    successMessage.remove();
    resetValues();
  }, 5000);
}

const addErrorMessage = function () {
  errorMessage.style.zIndex = 100;
  pageMain.appendChild(errorMessage);
  setTimeout(function () {
    errorMessage.remove();
  }, 5000);
}

const hideErrorMessage = function () {
  errorMessage.remove();
}

const hideSuccessMessage = function () {
  successMessage.remove();
  resetValues();
}

successMessage.addEventListener('click', function () {
  hideSuccessMessage();
})

errorMessage.addEventListener('click', function () {
  hideErrorMessage();
});

errorButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  hideErrorMessage();
});

document.addEventListener('keydown', function (evt) {
  if (isEscEvent(evt)) {
    if (pageMain.contains(successMessage)) {
      successMessage.remove();
      resetValues();
    }
    if (pageMain.contains(errorMessage)) {
      hideErrorMessage();
    }
  }
});
