
const houseType = document.querySelector('#type');
const priceInput = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const roomNumber = document.querySelector('#room_number');
const guestsNumber = document.querySelector('#capacity');
const roomOptions = roomNumber.querySelectorAll('option');

houseType.addEventListener('change', function () {
  if (houseType.value === 'bungalow') {
    priceInput.placeholder = '0';
    priceInput.setAttribute('min', '0');
  } else if (houseType.value === 'flat') {
    priceInput.placeholder = '1000';
    priceInput.setAttribute('min', '1000');
  } else if (houseType.value === 'house') {
    priceInput.placeholder = '5000';
    priceInput.setAttribute('min', '5000');
  } else if (houseType.value === 'palace') {
    priceInput.placeholder = '10000';
    priceInput.setAttribute('min', '10000');
  }
});

timeIn.addEventListener('change', function () {
  if (timeIn.value === '12:00') {
    timeOut.value = '12:00'
  } else if (timeIn.value === '13:00') {
    timeOut.value = '13:00';
  } else if (timeIn.value === '14:00') {
    timeOut.value = '14:00';
  }
});

timeOut.addEventListener('change', function () {
  if (timeOut.value === '12:00') {
    timeIn.value = '12:00'
  } else if (timeOut.value === '13:00') {
    timeIn.value = '13:00';
  } else if (timeOut.value === '14:00') {
    timeIn.value = '14:00';
  }
});

const getRoomChanges = function () {
  for (let i = 0; i < roomOptions.length; i++) {
    guestsNumber[i].setAttribute('disabled', 'disabled');
  }
  if (roomNumber.value === '1') {
    guestsNumber.value = '1';
    guestsNumber[2].removeAttribute('disabled');
  }
  if (roomNumber.value === '2') {
    guestsNumber.value = '2';
    guestsNumber[1].removeAttribute('disabled');
    guestsNumber[2].removeAttribute('disabled');
  }
  if (roomNumber.value === '3') {
    guestsNumber.value = '3';
    guestsNumber[0].removeAttribute('disabled');
    guestsNumber[1].removeAttribute('disabled');
    guestsNumber[2].removeAttribute('disabled');
  }
  if (roomNumber.value === '100') {
    guestsNumber.value = '0';
    guestsNumber[3].removeAttribute('disabled');
  }
}

roomNumber.addEventListener('change', function () {
  getRoomChanges();
})


getRoomChanges();

export {
  priceInput
};
