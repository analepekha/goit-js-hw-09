import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  firstDelay: document.querySelector('input[name="delay"]'),
  delayStep: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  btnSubmit: document.querySelector('button'),
}

refs.form.addEventListener('submit', handleSubmit)

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        // Fulfill
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`)
      } else {
        // Reject
        reject(`❌ Rejected promise ${position} in ${delay}ms`)
      }
    }, delay)
  });
}

function handleSubmit(event) {
  event.preventDefault()
  
  let amount = Number(refs.amount.value);
  let delay = Number(refs.firstDelay.value);
  let step = Number(refs.delayStep.value);


  for (let i = 1; i <= amount; i+=1) {

    createPromise(i, delay)
      .then(data => Notify.success(data))
      .catch(data => Notify.failure(data))
      .finally(() => console.log("Promise settled"));
    
    delay += step;
  }
}