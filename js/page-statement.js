const form = document.querySelector('.ad-form');
const clientAdvert = document.querySelector('.notice');
const clientForms = clientAdvert.querySelectorAll('.ad-form__element');
const mapFilterForm = document.querySelector('.map__filters');
const mapFilterSelectors = mapFilterForm.querySelectorAll('.map__filter');

form.classList.add('ad-form--disabled');
mapFilterForm.classList.add('map__filters--disabled');

mapFilterSelectors.forEach(function (mapFilterSelector) {
  mapFilterSelector.setAttribute('disabled', 'disabled');
})

clientForms.forEach(function (clientForm) {
  clientForm.setAttribute('disabled', 'disabled');
});

