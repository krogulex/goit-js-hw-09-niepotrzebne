

const firstDelay = document.querySelector('input[name=delay]')
const delayStep = document.querySelector('input[name=step]')
const amount = document.querySelector("input[name=amount]")
const form = document.querySelector("form")
const button = document.querySelector("button")


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    console.log(`✅ Fulfilled promise ${+position + 1} in ${delay}ms`)
  } else {
    // Reject
    console.log(`❌ Rejected promise ${+position + 1} in ${delay}ms`)
  }
}

function formSubmitter (event) {
event.preventDefault()

setTimeout(() => {

  for (let index = 0; index < amount.value; index++) {

    let delay = +firstDelay.value

    console.log(index)

    if (index === 0) {

      createPromise(index, delay)
    } else {

      console.log('Kiedy')

      setTimeout (() => {
        delay = +firstDelay.value + index * +delayStep.value
        console.log(delayStep.value)
        createPromise(index, delay)
      }, delayStep.value)
    }
  }

}, firstDelay.value)
}

form.addEventListener("submit", formSubmitter)