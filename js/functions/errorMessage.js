export function displayError(messageType, target) {
  const element = document.querySelector(target);

  element.innerHTML = `<div class="${messageType}">FOOOOOOORE!! Looks like you are out of bounds. Please try again.</div>`;
}
