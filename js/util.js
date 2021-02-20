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

export{getRandomInt, getAnotherInt};
