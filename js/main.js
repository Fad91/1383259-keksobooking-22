let getRandomInt = function (min, max) {
  let int = min + Math.random() * (max + 1 - min);
  return Math.floor(int);
}

let getAnotherInt = function (min, max, quanity) {
  let num = min + Math.random() * (max + 1 - min);
  return num.toFixed(quanity);
}
