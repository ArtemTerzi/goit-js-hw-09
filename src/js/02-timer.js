import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  startBtn: document.querySelector('[data-start]'),
  timerThumb: document.querySelector('.timer'),
  daysField: document.querySelector('[data-days]'),
  hoursField: document.querySelector('[data-hours]'),
  minutesField: document.querySelector('[data-minutes]'),
  secondsField: document.querySelector('[data-seconds]'),
  input: document.querySelector('#datetime-picker'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (Date.now() > selectedDates[0]) {
      refs.startBtn.disabled = true;
      window.alert('Please choose a date in the future');
    } else {
      refs.startBtn.disabled = false;
      // return (deltaTime = convertMs(selectedDates[0] - Date.now()));
    }
  },
};

let intervalId = null;

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

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

flatpickr('#datetime-picker', options);

refs.startBtn.addEventListener('click', e => {
  intervalId = setInterval(() => {
    const ms = new Date(`${refs.input.value}`) - Date.now();
    const deltaTime = convertMs(ms);
    const { days, hours, minutes, seconds } = deltaTime;

    if (ms < 1000) {
      clearInterval(intervalId);
    }

    refs.daysField.innerHTML = `${addLeadingZero(days)}`;
    refs.hoursField.innerHTML = `${addLeadingZero(hours)}`;
    refs.minutesField.innerHTML = `${addLeadingZero(minutes)}`;
    refs.secondsField.innerHTML = `${addLeadingZero(seconds)}`;
  }, 1000);
});
