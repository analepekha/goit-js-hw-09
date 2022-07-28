const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

btnStart.addEventListener('click', () => {
    btnStart.setAttribute('disable', true)
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor()
        // btnStart.setAttribute('disable', true)
    }, 1000);

    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
})


btnStop.addEventListener('click', () => {

    clearInterval(timerId)
    console.log('stop');
})

// function clickOnStart() {
//     setInterval(() => {
//         function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
//     },1000)
// body.style.backgroundColor = getRandomHexColor()
// } 

