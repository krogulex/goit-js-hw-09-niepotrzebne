const startBtn = document.querySelector("button[data-start]")
const stopBtn = document.querySelector("button[data-stop]")
const body = document.querySelector("body")
let timerId = null;

stopBtn.disabled = true

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

function changeBodyColor () {
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor()
    }, 1000);

    startBtn.disabled = true
    stopBtn.disabled = false

}

function stopChanging () {

    clearInterval(timerId)
    startBtn.disabled = false
    stopBtn.disabled = true
}

startBtn.addEventListener("click", changeBodyColor)


stopBtn.addEventListener("click", stopChanging)