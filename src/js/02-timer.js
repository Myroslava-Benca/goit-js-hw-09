import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector('.input')
const btn = document.querySelector('button')
const day = document.querySelector('[data-days]')
const hour = document.querySelector('[data-hours]')
const minute = document.querySelector('[data-minutes]')
const second = document.querySelector('[data-seconds]')

let selectedDate = null;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      if (selectedDates[0] - Date.now() < 0) {
      return window.alert('Please choose a date in the future', {
        timeout: 1000,
      });
    } else {
      selectedDate = selectedDates[0];
      btn.removeAttribute('disabled');
    }
  },
};

flatpickr("#datetime-picker", options)
const fp = flatpickr("#datetime-picker", options);
btn.addEventListener('click', onStartTimer)


function onStartTimer() {

  timerId = setInterval(() => {
 
    const now = new Date();
    const result = fp.selectedDates[0] - now;
    if (result <= 0) {
      clearInterval(timerId);
      return;
    }
    const timeRemaining = convertMs(result);

    day.textContent = addZero(timeRemaining.days);
    hour.textContent = addZero(timeRemaining.hours);
    minute.textContent = addZero(timeRemaining.minutes);
    second.textContent = addZero(timeRemaining.seconds);
  }, 1000)
}


function addZero(value) {
  return value.toString().padStart(2, 0);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
} 
