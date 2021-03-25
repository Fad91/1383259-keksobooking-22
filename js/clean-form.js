// модуль очистки формы
/* global L:readonly */

import {
  titleInput
} from './validate-form.js';
import {
  priceInput
} from './form.js';
import {
  mainMapMarker,
  resetMarkers
} from './map.js';
import {
  houseTypeFilter,
  priceFilter,
  roomsFilter,
  guestsFilter,
  filterElements
} from './filter.js'


const resetButton = document.querySelector('.ad-form__reset');
const descriptionInput = document.querySelector('#description');
const addressInput = document.querySelector('#address');

let resetValues = function () {
  titleInput.value = '';
  priceInput.value = '';
  descriptionInput.value = '';
  addressInput.value = '35.68950, 139.69171';
  mainMapMarker.setLatLng(L.latLng(35.6895020, 139.6917100));
  houseTypeFilter.value = 'any';
  priceFilter.value = 'any';
  roomsFilter.value = 'any';
  guestsFilter.value = 'any';
  filterElements.forEach(function (checkbox) {
    if (checkbox.checked) {
      checkbox.checked = false;
    }
  })
  resetMarkers();
};


resetButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  resetValues();
});

export {
  addressInput,
  resetValues
};
