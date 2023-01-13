import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';

const input = document.querySelector('input[type="text"]');
const startBtn = document.querySelector('button[data-start]');
const dataDays = document.querySelector('span[data-days]');
const dataHours = document.querySelector('span[data-hours]');
const dataMinutes = document.querySelector('span[data-minutes]');
const dataSeconds = document.querySelector('span[data-seconds]');

let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] > options.defaultDate) {
      startBtn.disabled = false;
    } else {
      startBtn.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
    }
  },
};

const fp = flatpickr(input, options);

function addLeadingZero(value) {
  if (value < 10) {
    return value.toString().padStart(2, '0');
  } else {
    return value;
  }
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function timer() {
  timerId = setInterval(() => {
    const x = fp.selectedDates[0].getTime();
    const now = new Date().getTime();
    const difference = x - now;
    const result = convertMs(difference);

    //if (difference <= 0) {
    //   clearInterval(timerId)
    //}
    // Dlaczego to niepoprwne? Pojawiają się -1 -1 -1 -1 po skończeniu odliczania?

    if (
      result.days <= 0 &&
      result.hours <= 0 &&
      result.minutes <= 0 &&
      result.seconds <= 0
    ) {
      clearInterval(timerId);
      result.days = 0;
      result.hours = 0;
      result.minutes = 0;
      result.seconds = 0;
    }

    dataDays.innerHTML = addLeadingZero(result.days);
    dataHours.innerHTML = addLeadingZero(result.hours);
    dataMinutes.innerHTML = addLeadingZero(result.minutes);
    dataSeconds.innerHTML = addLeadingZero(result.seconds);
  }, 1000);
}

startBtn.addEventListener('click', timer);
