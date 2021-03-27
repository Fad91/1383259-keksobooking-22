// файл для работы с картой
/* global L:readonly */

import {
  similarAdverts
} from './data.js';
import {
  TYPES
} from './data.js';

const map = L.map('map-canvas');

map.setView({
  lat: 35.6895000,
  lng: 139.6917100,
}, 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const mainPinMarker = L.icon({
  iconUrl: '../img/main-pin.svg',
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

// mainMapMarker.on('moveend', function (evt) {
//   // console.log(evt.target.getLatLng());
// });

const createCustomPopup = function(advert) {
  const balloonTemplate = document.querySelector('#card').content.querySelector('.popup');
  const popupElement = balloonTemplate.cloneNode(true);

  popupElement.querySelector('.popup__title').textContent = advert.title;
  popupElement.querySelector('.popup__text--address').textContent = `Координаты: ${advert.location.y}, ${advert.location.x}`;
  popupElement.querySelector('.popup__text--price').textContent = advert.offer.price + ' ₽/ночь';
  popupElement.querySelector('.popup__type').textContent = TYPES[advert.offer.type];

  popupElement.querySelector('.popup__text--capacity').textContent = advert.offer.rooms + ' комнаты для ' + advert.offer.guests + ' гостей';
  if (advert.offer.rooms === 1) {
    popupElement.querySelector('.popup__text--capacity').textContent = advert.offer.rooms + ' комната для ' + advert.offer.guests + ' гостей';
  } else if (advert.offer.rooms > 1 && advert.offer.rooms < 5) {
    popupElement.querySelector('.popup__text--capacity').textContent = advert.offer.rooms + ' комнаты для ' + advert.offer.guests + ' гостей';
  } else if (advert.offer.rooms >= 5) {
    popupElement.querySelector('.popup__text--capacity').textContent = advert.offer.rooms + ' комнат для ' + advert.offer.guests + ' гостей';
  }

  popupElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + advert.offer.checkin + ', выезд до ' + advert.offer.checkout;
  const featuresList = popupElement.querySelector('.popup__features');
  featuresList.innerHTML = '';

  advert.offer.features.forEach(function () {
    const featuresItem = document.createElement('li');
    featuresList.appendChild(featuresItem);
    featuresItem.classList.add('popup__feature');
  });

  popupElement.querySelector('.popup__description').textContent = advert.offer.description;
  const photo = popupElement.querySelector('.popup__photos');
  const image = photo.querySelector('.popup__photo');
  image.src = advert.offer.photos;
  return popupElement;
};

similarAdverts.forEach(function (advert) {
  const icon = L.icon({
    iconSize: [52, 52],
    iconAnchor: [26, 52],
    iconUrl: '../img/pin.svg',
  });
  const marker = L.marker({
    lat: advert.location.y,
    lng: advert.location.x,
  }, {
    icon: icon,
  });
  marker.addTo(map)
    .bindPopup(
      createCustomPopup(advert),
    );
});
