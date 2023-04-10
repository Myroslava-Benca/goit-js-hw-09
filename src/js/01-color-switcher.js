
const colorBody = document.querySelector('body')
const startBtn = document.querySelector('.button-start')
const stopBtn = document.querySelector('.button-stop')

// let timerId = null

startBtn.addEventListener("click", onBtnClick);
stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
});

function onBtnClick() {
  timerId = setInterval(() => {
    colorBody.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
 
