const getAdverts = function (onSuccess, onError) {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then(function (response) {
      return response.json()
    })
    .then(function (adverts) {
      onSuccess(adverts);
    })
    .catch(function () {
      onError();
    })
}


const postData = function (ifSuccess, ifError, body) {
  let url = 'https://22.javascript.pages.academy/keksobooking';
  fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    body,
  })
    .then(function (response) {
      if (response.ok) {
        ifSuccess();
      } else {
        ifError();
      }
    })
};

export {
  postData,
  getAdverts
}
