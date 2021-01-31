let getRandomInt = function (min, max) {
  let int = min + Math.random() * (max + 1 - min);
  return Math.floor(int);
}

getRandomInt(2, 7);

let getAnotherInt = function (min, max, quanity) {
  let num = min + Math.random() * (max - min);
  return +num.toFixed(quanity);
}

getAnotherInt(5, 10, 4);
