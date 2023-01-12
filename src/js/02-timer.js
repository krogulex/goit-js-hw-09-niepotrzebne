import flatpickr from "flatpickr";

const input = document.querySelector('input[type="text"]')

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };

  const fp = flatpickr(input, options)