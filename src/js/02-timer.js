import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  timetable: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('button[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
}

refs.btnStart.setAttribute('disabled', 'disabled')

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const deadline = selectedDates[0]
    if (deadline < Date.now()) {
      Notify.failure("Please choose a date in the future")
      return
    }; 
    refs.btnStart.removeAttribute('disabled')
    // console.log(deadline);
    // console.log(refs.timetable.value);

    refs.btnStart.addEventListener('click', onTimer)

    function onTimer() {
      setInterval(() => {
        const deltaTime = deadline - Date.now()
        if (deltaTime <= 0) {
          return;
        }
        convertMs(deltaTime)
      }, 1000)
    }
    return;
  },
};

flatpickr(refs.timetable, options)

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  // return { days, hours, minutes, seconds };
  refs.days.textContent = days
  refs.hours.textContent = hours
  refs.minutes.textContent = minutes
  refs.seconds.textContent = seconds
}

  function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
    // String(value).padStart(2, '0');
  }

