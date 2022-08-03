const refs = {
btnStart: document.querySelector('button[data-start]'),
btnStop: document.querySelector('button[data-stop]'),
body: document.querySelector('body')
}

refs.btnStop.setAttribute('disabled', 'disabled')

refs.btnStart.addEventListener('click', onStartClick)

function onStartClick() {
    refs.btnStart.setAttribute("disabled", "disabled");
    refs.btnStop.removeAttribute('disabled');

    if (refs.btnStart.hasAttribute('disabled')) {
    refs.btnStop.removeAttribute('disabled'); 
}
    timerId = setInterval(() => {
         refs.body.style.backgroundColor = getRandomHexColor()
    },1000)
}

refs.btnStop.addEventListener('click', onStopClick)

function onStopClick() {
    refs.btnStop.setAttribute('disabled', 'disabled'); 
    refs.btnStart.removeAttribute('disabled');
    clearInterval(timerId)
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
