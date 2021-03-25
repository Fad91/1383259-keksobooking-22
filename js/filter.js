
const filterForm = document.querySelector('.map__filters');
const houseTypeFilter = filterForm.querySelector('#housing-type');
const priceFilter = filterForm.querySelector('#housing-price');
const roomsFilter = filterForm.querySelector('#housing-rooms');
const guestsFilter = filterForm.querySelector('#housing-guests');
const featuresFilter = filterForm.querySelector('#housing-features');
const filterElements = featuresFilter.querySelectorAll('input[type=checkbox]');

const compareTypes = function (advert) {
  if (houseTypeFilter.value === 'any' || advert.offer.type === houseTypeFilter.value) {
    return true;
  }
};

const comparePrices = function (advert) {

  if (priceFilter.value === 'any') {
    return true;
  } else if (priceFilter.value === 'low') {
    return advert.offer.price <= 10000;
  } else if (priceFilter.value === 'middle') {
    return advert.offer.price >= 10000 && advert.offer.price < 50000;
  } else if (priceFilter.value === 'high') {
    return advert.offer.price >= 50000;
  } else {
    return false;
  }
};

const compareRooms = function (advert) {
  if (roomsFilter.value === 'any') {
    return advert.offer.rooms
  } else if (roomsFilter.value === '1') {
    return advert.offer.rooms === 1;
  } else if (roomsFilter.value === '2') {
    return advert.offer.rooms === 2;
  } else if (roomsFilter.value === '3') {
    return advert.offer.rooms === 3;
  }
};

const compareGuests = function (advert) {
  if (guestsFilter.value === 'any') {
    return advert.offer.guests;
  } else if (guestsFilter.value === '1') {
    return advert.offer.guests >= 1 && advert.offer.guests <= 3;
  } else if (guestsFilter.value === '2') {
    return advert.offer.guests > 1 && advert.offer.guests <= 2;
  } else if (guestsFilter.value === '0') {
    return false;
  }
};

const compareFeatures = function (advert) {
  const selectedFeatures = featuresFilter.querySelectorAll('input[type=checkbox]:checked');
  return Array.from(selectedFeatures).every(function (element) {
    return advert.offer.features.includes(element.value);
  })
};

const compareValues = function (advert) {
  return compareTypes(advert) &&
    comparePrices(advert) &&
    compareRooms(advert) &&
    compareGuests(advert) &&
    compareFeatures(advert);
}

export {
  filterForm,
  houseTypeFilter,
  priceFilter,
  roomsFilter,
  guestsFilter,
  filterElements,
  compareValues
}
