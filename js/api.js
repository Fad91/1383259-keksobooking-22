
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


const postData = function (form) {
  let data = new FormData(form);
  let url = 'https://22.javascript.pages.academy/keksobooking';
  fetch(url, {
    method: 'post',
    credentials: 'same-origin',
    body: data,
  })
  .then(function (response) {
    return response.status;
  })
}

export {
  postData,
  getAdverts
}
