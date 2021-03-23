// модуль работы с загрузкой аватара
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const avatarChooser = document.querySelector('.ad-form__field input[type=file]');
const avatarPreview = document.querySelector('.ad-form-header__preview img')

avatarChooser.addEventListener('change', function () {
  const file = avatarChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some(function(it) {
    return fileName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', function() {
      avatarPreview.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
});

export{FILE_TYPES}
