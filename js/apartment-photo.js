// модуль для загрузки фото жилья
import {FILE_TYPES} from './avatar.js';

const photoChooser = document.querySelector('.ad-form__input');
const photoPreview = document.querySelector('.ad-form__photo');

photoChooser.addEventListener('change', function () {
  const file = photoChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some(function(it) {
    return fileName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', function() {
      const apartmentImage = document.createElement('img');
      apartmentImage.src = reader.result;
      apartmentImage.style.width = '70px';
      apartmentImage.style.height = '70px';
      apartmentImage.style.marginRight = '5px';
      photoPreview.style.display = 'flex';
      photoPreview.appendChild(apartmentImage);
    });

    reader.readAsDataURL(file);
  }
});
