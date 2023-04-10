
const colorBody = document.querySelector('body')
const startBtn = document.querySelector('.btn-start')
const stopBtn = document.querySelector('.btn-stop')

let timerId = null

startBtn.addEventListener("click", onBtnClick);
stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  startBtn.disabled = false
});

function onBtnClick() {
  startBtn.disabled = true;
  timerId = setInterval(() => {
    colorBody.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
 
