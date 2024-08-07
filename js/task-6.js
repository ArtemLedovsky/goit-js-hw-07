function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesCont = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const input = document.querySelector('input');

createBtn.addEventListener('click', handleCreate);
destroyBtn.addEventListener('click', destroyBoxes);

function handleCreate(){
  const inputValue = input.value;
  if (inputValue >= 1 && inputValue <= 100) {
    createBoxes(inputValue)
      }
}

function createBoxes(amount) {
  boxesCont.innerHTML = '';
  const newBox = [];
  let newBoxSize = 30;
  for (let i = 0; i < amount; i += 1){
    const box = document.createElement('div');
    box.style.width = `${newBoxSize}px`;
    box.style.height = `${newBoxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    newBox.push(box);
    newBoxSize += 10
  }
  boxesCont.append(...newBox)
}
function destroyBoxes(){
    boxesCont.innerHTML = '';
  }
