import {TITLES, TYPES, CHECKS, FEATURES, DESCRIPTIONS, PHOTOS} from './data.js';

const getRandomInt = function (min, max) {
  if ((min >= 0) & (max >= 0)) {
    let int = min + Math.random() * (max + 1 - min);
    return Math.floor(int);
  } else {
    alert('Введите положительное число!');
  }
};

const getAnotherInt = function (min, max, quanity) {
  if ((min >= 0) & (max >= 0)) {
    let num = min + Math.random() * (max - min);
    return +num.toFixed(quanity);
  } else {
    alert('Введите положительное число!');
  }
};

const createAdvert = function () {

  let x = getRandomInt(1, 8);
  let featuresValue = [];
  for (let i = 0; i < getRandomInt(1, FEATURES.length - 1); i++) {
    featuresValue.push(FEATURES[i]);
  }
  let photosValue = [];
  for (let j = 0; j < getRandomInt(1, PHOTOS.length - 1); j++) {
    photosValue.push(PHOTOS[j]);
  }
  const getRandomArrayElement = function(elements) {
    return elements[getRandomInt(0, elements.length - 1)]
  };

  return {
    author: {
      avatar: 'img/avatars/user0' + x,
    },
    offer: {
      title: getRandomArrayElement(TITLES) + '',
      address: location,
      price: getRandomInt(100, 1000),
      type: getRandomArrayElement(TYPES) + '',
      rooms: getRandomInt(1, 10),
      guests: getRandomInt(1, 10),
      checkin: getRandomArrayElement(CHECKS) + '',
      checkout: getRandomArrayElement(CHECKS) + '',
      features: featuresValue,
      description: getRandomArrayElement(DESCRIPTIONS) + '',
      photos: photosValue,
    },
    location: {
      x: getAnotherInt(35.65000, 35.67000, 5),
      y: getAnotherInt(139.70000, 35.80000, 5),
    },
  };
};

const similarAdverts = new Array(10).fill(null).map(() => createAdvert());
similarAdverts;
