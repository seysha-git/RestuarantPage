const removeBtn = document.querySelector('.timerBtn')
const timeMinuts = document.querySelector('#timeMinuts')
const timeSeconds = document.querySelector('#timeSeconds')

let time = localStorage.getItem('time') || 20 * 60;
let defaultTime = 20 * 60
let countdown = () => {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  timeMinuts.innerHTML = minutes < 10 ? "0" + minutes : minutes;
  timeSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds
  time--;

  // Save the time value to localStorage
  localStorage.setItem('time', time);
}

countdown()
timerinterval = setInterval(countdown, 1000);


let exitCountDown = () => {
    removeBtn.addEventListener('click', () => {
        clearInterval(timerinterval)
        timerinterval = null
        time = defaultTime
        countdown()
    })

}

exitCountDown()