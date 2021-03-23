const createCustomPopup = function (advert) {

  const balloonTemplate = document.querySelector('#card').content.querySelector('.popup');
  const popupElement = balloonTemplate.cloneNode(true);
  const featuresList = popupElement.querySelector('.popup__features');
  const popupPhotos = popupElement.querySelector('.popup__photos');

  if (advert.title) {
    popupElement.querySelector('.popup__title').textContent = advert.title;
  } else {
    popupElement.querySelector('.popup__title').classList.add('hidden')
  }

  if (advert.location.lat && advert.location.lng) {
    popupElement.querySelector('.popup__text--address').textContent = `Координаты: ${advert.location.lat.toFixed(5)}, ${advert.location.lng.toFixed(5)}`;
  } else {
    popupElement.querySelector('.popup__text--address').classList.add('hidden')
  }

  if (advert.offer.price) {
    popupElement.querySelector('.popup__text--price').textContent = advert.offer.price + ' ₽/ночь';
  } else {
    popupElement.querySelector('.popup__text--price').classList.add('hidden');
  }

  if (advert.offer.type) {
    popupElement.querySelector('.popup__type').textContent = advert.offer.type;
  } else {
    popupElement.querySelector('.popup__type').classList.add('hidden');
  }

  if (advert.offer.rooms) {
    popupElement.querySelector('.popup__text--capacity').textContent = advert.offer.rooms + ' комнаты для ' + advert.offer.guests + ' гостей';
    if (advert.offer.rooms === 1) {
      popupElement.querySelector('.popup__text--capacity').textContent = advert.offer.rooms + ' комната для ' + advert.offer.guests + ' гостей';
    } else if (advert.offer.rooms > 1 && advert.offer.rooms < 5) {
      popupElement.querySelector('.popup__text--capacity').textContent = advert.offer.rooms + ' комнаты для ' + advert.offer.guests + ' гостей';
    } else if (advert.offer.rooms === 0 || advert.offer.rooms >= 5) {
      popupElement.querySelector('.popup__text--capacity').textContent = advert.offer.rooms + ' комнат для ' + advert.offer.guests + ' гостей';
    }
  } else {
    popupElement.querySelector('.popup__text--capacity').classList.add('hidden');
  }

  if (advert.offer.checkin && advert.offer.checkout) {
    popupElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + advert.offer.checkin + ', выезд до ' + advert.offer.checkout;
  } else {
    popupElement.querySelector('.popup__text--time').classList.add('hidden');
  }

  if (advert.offer.features) {
    featuresList.textContent = '';

    advert.offer.features.forEach(function (feature) {
      const featuresItem = document.createElement('li');
      featuresItem.className = `popup__feature popup__feature--${feature}`;
      featuresList.appendChild(featuresItem);
    })
  } else {
    featuresList.classList.add('hidden');
  }

  if (advert.offer.description) {
    popupElement.querySelector('.popup__description').textContent = advert.offer.description;
  } else {
    popupElement.querySelector('.popup__description').classList.add('hidden');
  }

  if (advert.offer.photos) {
    popupPhotos.innerHTML = '';

    advert.offer.photos.forEach(function (photo) {
      const photosItem = document.createElement('img');
      photosItem.src = photo;
      photosItem.className = 'popup__photo';
      photosItem.style.width = '45px';
      photosItem.style.height = '40px';
      popupPhotos.appendChild(photosItem);
    });
  } else {
    popupPhotos.classList.add('hidden');
  }
  return popupElement;
};

export {
  createCustomPopup
}
