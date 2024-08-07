function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector('button.change-color')
const valueOfColor = document.querySelector('span.color')
const bodyEl = document.querySelector('body')


btnChangeColor.addEventListener("click", handleClick)

function handleClick() {
  bodyEl.style.backgroundColor = getRandomHexColor()
  valueOfColor.textContent = getRandomHexColor()
}