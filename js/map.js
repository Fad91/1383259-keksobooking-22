// файл для работы с картой
/* global L:readonly */
/* global _:readonly */

import {
  form,
  clientForms,
  mapFilterForm,
  mapFilterSelectors
} from './page-statement.js';
import {
  addressInput
} from './clean-form.js';
import {
  getAdverts
} from './api.js';
import {
  filterForm,
  compareValues
} from './filter.js';
import {
  createCustomPopup
} from './create-popup.js';
import {
  showAlert
} from './util.js';

const RERENDER_DELAY = 500;
let oldMarkers = [];

const map = L.map('map-canvas')
  .on('load', function () {
    form.classList.remove('ad-form--disabled');
    mapFilterForm.classList.remove('map__filters--disabled');

    mapFilterSelectors.forEach(function (mapFilterSelector) {
      mapFilterSelector.removeAttribute('disabled', 'disabled');
    })

    clientForms.forEach(function (clientForm) {
      clientForm.removeAttribute('disabled', 'disabled');
    });
  })

map.setView({
  lat: 35.6895000,
  lng: 139.6917100,
}, 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const generateMarkers = function (adverts) {
  oldMarkers = [];
  let values = [];
  adverts
    .some(function (advert) {
      if (compareValues(advert)) {
        values.push(advert);
        return false;
      }
      if (values.length === 10) {
        return true;
      }
    });
  values.forEach(function (advert) {
    const icon = L.icon({
      iconSize: [52, 52],
      iconAnchor: [26, 52],
      iconUrl: 'img/pin.svg',
    });
    const marker = L.marker({
      lat: advert.location.lat,
      lng: advert.location.lng,
    }, {
      icon: icon,
    });
    oldMarkers.push(marker);
    marker.addTo(map)
      .bindPopup(
        createCustomPopup(advert),
      );
  });
  return oldMarkers;
}

const deleteMarkers = function () {
  oldMarkers.forEach(function (marker) {
    map.removeLayer(marker)
  })
}

const changeValue = function (adverts) {
  const rerenderMarkers = function () {
    deleteMarkers();
    generateMarkers(adverts)
  }
  filterForm.addEventListener('change', _.debounce(rerenderMarkers, RERENDER_DELAY))
}

const resetMarkers = function() {
  getAdverts(onSuccess)
}

const onSuccess = function (adverts) {
  generateMarkers(adverts);
  changeValue(adverts)
};

const onError = function () {
  showAlert('Произошла ошибка загрузки, попробуйте еще раз');
}


const mainPinMarker = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
})

const mainMapMarker = L.marker({
  lat: 35.6895020,
  lng: 139.6917100,
}, {
  draggable: true,
  icon: mainPinMarker,
});

mainMapMarker.addTo(map);

mainMapMarker.on('moveend', function (evt) {
  const cords = evt.target.getLatLng();
  addressInput.value = cords.lat.toFixed(5) + ', ' + cords.lng.toFixed(5) + '';
});

getAdverts(onSuccess, onError);

export {
  generateMarkers,
  onSuccess,
  onError,
  mainMapMarker,
  resetMarkers
};
