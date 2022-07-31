const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

btnStop.setAttribute('disabled', 'disabled')

btnStart.addEventListener('click', onStartClick)

function onStartClick() {
    btnStart.setAttribute("disabled", "disabled");
    btnStop.removeAttribute('disabled');

    if (btnStart.hasAttribute('disabled')) {
    btnStop.removeAttribute('disabled'); 
}
    timerId = setInterval(() => {
         body.style.backgroundColor = getRandomHexColor()
    },1000)
}

btnStop.addEventListener('click', onStopClick)

function onStopClick() {
    btnStop.setAttribute('disabled', 'disabled'); 
    btnStart.removeAttribute('disabled');
    clearInterval(timerId)
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
