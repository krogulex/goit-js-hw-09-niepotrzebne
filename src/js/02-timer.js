import flatpickr from "flatpickr";

const input = document.querySelector('input[type="text"]')
const startBtn = document.querySelector("button[data-start]")

let timerId = null
let x = null

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0].getTime());
      x = selectedDates[0].getTime()
      if (selectedDates[0] > options.defaultDate) {
        startBtn.disabled = false
      } else {
        startBtn.disabled = true
        window.alert("Please choose a date in the future")
      }
    },
  };

const fp = flatpickr(input, options)

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
    
    const now = new Date().getTime()
    const difference = x - now
    console.log(difference)}, 1000)
}

startBtn.addEventListener('click', timer)