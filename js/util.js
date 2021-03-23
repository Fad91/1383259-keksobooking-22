const showAlert = function (message) {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 300;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = '20px ';
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 5000);
}

const isEscEvent = function (evt) {
  return evt.key === ('Escape' || 'Esc');
}

export {
  showAlert,
  isEscEvent
};
