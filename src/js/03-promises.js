import Notiflix from 'notiflix';

const firstDelay = document.querySelector('input[name=delay]')
const delayStep = document.querySelector('input[name=step]')
const amount = document.querySelector("input[name=amount]")
const form = document.querySelector("form")
const button = document.querySelector("button")


function createPromise(position, delay) {

  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay);
  }); 

  promise.then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${+position + 1} in ${delay}ms`);
  })
  promise.catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${+position + 1} in ${delay}ms`);
  });
}

function formSubmitter (event) {

event.preventDefault()

let delay = +firstDelay.value

  for (let index = 0; index < amount.value; index++) {

    createPromise(index, delay)
    delay = +firstDelay.value + (index + 1) * +delayStep.value
    }
  }

form.addEventListener("submit", formSubmitter)