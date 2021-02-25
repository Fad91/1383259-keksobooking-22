import {
  getRandomInt,
  getAnotherInt
} from './util.js';

const TITLES = [
  'Отличные апартаменты!',
  'Комфортное жилье за малые деньги',
  '10 из 10!',
  'Ля какая хата!',
  'Жилье топ!',
];

const TYPES = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
};

const CHECKS = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTIONS = [
  'Уютное бунгало на берегу',
  'Отличные апартаменты с БлекДжеком и ...',
  'Двухкомнатная квартира(хрущевка) с посуточной оплатой',
  'Коттедж (и этим все сказано)',
  'Коробка от холодильника Indesit (непромокаемая)',
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const createAdvert = function () {


  let x = getRandomInt(1, 8);

  let featuresValue = [];
  for (let i = 0; i < getRandomInt(1, FEATURES.length - 1); i++) {
    featuresValue.push(FEATURES[i]);
  }
  let photosValue = [];
  for (let j = 0; j < getRandomInt(0, PHOTOS.length - 1); j++) {
    photosValue.push(PHOTOS[j]);
  }
  const getRandomArrayElement = function (elements) {
    return elements[getRandomInt(0, elements.length - 1)]
  };

  return {
    author: {
      avatar: 'img/avatars/user0' + x,
    },
    offer: {
      title: getRandomArrayElement(TITLES) + '',
      address: '35.65000, 139.70000',
      price: getRandomInt(100, 1000),
      type: getRandomArrayElement(Object.keys(TYPES)),
      rooms: getRandomInt(1, 10),
      guests: getRandomInt(1, 10),
      checkin: getRandomArrayElement(CHECKS) + '',
      checkout: getRandomArrayElement(CHECKS) + '',
      features: featuresValue,
      description: getRandomArrayElement(DESCRIPTIONS) + '',
      photos: getRandomArrayElement(PHOTOS),
    },
    location: {
      x: getAnotherInt(35.65000, 35.67000, 5),
      y: getAnotherInt(139.70000, 35.80000, 5),
    },
  };
};


const similarAdverts = new Array(getRandomInt(1, 10)).fill(null).map(() => createAdvert());


export {
  similarAdverts
};
export {
  TITLES,
  TYPES,
  CHECKS,
  FEATURES,
  DESCRIPTIONS,
  PHOTOS
};
