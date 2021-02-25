// На основе временных данных для разработки и шаблона #card создайте DOM-элементы,
// соответствующие объявлениям, и заполните их данными:

// Выведите заголовок объявления offer.title в заголовок .popup__title.
// Выведите адрес offer.address в блок .popup__text--address.
// Выведите цену offer.price в блок .popup__text--price строкой вида
// {{offer.price}} ₽/ночь. Например, «5200 ₽/ночь».
// В блок .popup__type выведите тип жилья offer.type, сопоставив с подписями:
// Квартира для flat
// Бунгало для bungalow
// Дом для house
// Дворец для palace
// Выведите количество гостей и комнат offer.rooms и offer.guests
// в блок .popup__text--capacity строкой вида {{offer.rooms}}
// комнаты для {{offer.guests}} гостей. Например, «2 комнаты для 3 гостей».
// Время заезда и выезда offer.checkin и offer.checkout в блок
// .popup__text--time строкой вида Заезд после {{offer.checkin}},
// выезд до {{offer.checkout}}. Например, «Заезд после 14:00, выезд до 14:00».
// В список .popup__features выведите все доступные удобства в объявлении.
// В блок .popup__description выведите описание объекта недвижимости offer.description.
// В блок .popup__photos выведите все фотографии из списка offer.photos.
// Каждая из строк массива photos должна записываться как src соответствующего изображения.
// Замените src у аватарки пользователя — изображения,
// которое записано в .popup__avatar — на значения поля author.avatar отрисовываемого объекта.
// Если данных для заполнения не хватает, соответствующий блок в карточке скрывается.

// Отрисуйте один, например первый,
// из сгенерированных DOM-элементов в блок .map-canvas,
// чтобы проверить, что данные в разметку были вставлены корректно.

// Подключите модуль в проект.
// ГОСПАДЕ Я ХОЧУ ДОМОЙ Я НИХРЕНА НЕ ПОНИМАЮ!
{
  /* <template id="card">
  <article class="popup">
    <img src="img/avatars/user01.png" class="popup__avatar" width="70" height="70" alt="Аватар пользователя">
    <h3 class="popup__title">Уютное гнездышко для молодоженов</h3>
    <p class="popup__text popup__text--address">102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 14−3</p>
    <p class="popup__text popup__text--price">5200 <span>₽/ночь</span></p>
    <h4 class="popup__type">Квартира</h4>
    <p class="popup__text popup__text--capacity">2 комнаты для 3 гостей</p>
    <p class="popup__text popup__text--time">Заезд после 14:00, выезд до 10:00</p>
    <ul class="popup__features">
      <li class="popup__feature popup__feature--wifi"></li>
      <li class="popup__feature popup__feature--dishwasher"></li>
      <li class="popup__feature popup__feature--parking"></li>
      <li class="popup__feature popup__feature--washer"></li>
      <li class="popup__feature popup__feature--elevator"></li>
      <li class="popup__feature popup__feature--conditioner"></li>
    </ul>
    <p class="popup__description">Великолепная квартира-студия в центре Токио. Подходит как туристам, так и
      бизнесменам. Квартира полностью укомплектована и недавно отремонтирована.</p>
    <div class="popup__photos">
      <img src="" class="popup__photo" width="45" height="40" alt="Фотография жилья">
    </div>
  </article>
  </template> */
}

// ЧЕ делать:
// 1) Импортировать переменную similar adverts (которая генерит похожие обьявления) из data.js
// 2) Обьявить переменные с картой и шаблоном карточки обьявления,
// 3) Создать функцию создания элемента с параметром данного массива, который мы будем вставлять аргументом при вызове функции.
// 4) вызвать функцию с циклом (метод forEach, который перебирает каждое объявление)

import {
  similarAdverts
} from './data.js';
import {
  TYPES
} from './data.js';

const mapCanvas = document.querySelector('.map__canvas');
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const makeTemplateElement = function (offer) {
  const newElement = cardTemplate.cloneNode(true);
  newElement.querySelector('.popup__title').textContent = offer.title;
  newElement.querySelector('.popup__text--address').textContent = offer.address;
  newElement.querySelector('.popup__text--price').textContent = offer.offer.price + ' ₽/ночь';
  newElement.querySelector('.popup__type').textContent = TYPES[offer.offer.type];

  newElement.querySelector('.popup__text--capacity').textContent = offer.offer.rooms + ' комнаты для ' + offer.offer.guests + ' гостей';
  if (offer.offer.rooms === 1) {
    newElement.querySelector('.popup__text--capacity').textContent = offer.offer.rooms + ' комната для ' + offer.offer.guests + ' гостей';
  } else if (offer.offer.rooms > 1 && offer.offer.rooms < 5) {
    newElement.querySelector('.popup__text--capacity').textContent = offer.offer.rooms + ' комнаты для ' + offer.offer.guests + ' гостей';
  } else if (offer.offer.rooms >= 5) {
    newElement.querySelector('.popup__text--capacity').textContent = offer.offer.rooms + ' комнат для ' + offer.offer.guests + ' гостей';
  }

  newElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + offer.offer.checkin + ', выезд до ' + offer.offer.checkout;
  const featuresList = newElement.querySelector('.popup__features');
  featuresList.innerHTML = '';

  offer.offer.features.forEach(function () {
    const featuresItem = document.createElement('li');
    featuresList.appendChild(featuresItem);
    featuresItem.classList.add('popup__feature');
  });

  newElement.querySelector('.popup__description').textContent = offer.offer.description;
  const photo = newElement.querySelector('.popup__photos');
  const image = photo.querySelector('.popup__photo');
  image.src = offer.offer.photos;

  mapCanvas.appendChild(newElement);
};

similarAdverts.forEach(function (offer) {
  makeTemplateElement(similarAdverts[0]);
});
