function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  const boxesContainer = document.querySelector('#boxes');
  let size = 30;
  let boxesHTML = '';
  for (let i = 0; i < amount; i++) {
    boxesHTML += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
    size += 10;
  }
  boxesContainer.innerHTML = boxesHTML;
}
function destroyBoxes() {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = '';
}
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
btnCreate.addEventListener('click', function () {
  const amount = parseInt(document.querySelector('input').value);
  createBoxes(amount);
});
btnDestroy.addEventListener('click', destroyBoxes);
