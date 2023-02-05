import { Notify } from 'notiflix';

const refs = {
  delayInput: document.querySelector('[name="delay"]'),
  stepInput: document.querySelector('[name="step"]'),
  amountInput: document.querySelector('[name="amount"]'),
  inputs: document.querySelectorAll('[type="number"]'),
  form: document.querySelector('.form'),
  submitBtn: document.querySelector('[type="submit"]'),
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  const delay = Number(refs.delayInput.value);
  const step = Number(refs.stepInput.value);
  const amount = Number(refs.amountInput.value);

  for (let i = 1; i <= amount; i++) {
    let timer = delay + step * (i - 1);
    createPromise(i, timer)
      .then(({ position, delay }) => {
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`, {
          fontSize: '16px',
          width: '360px',
          svgSize: '120px',
          borderRadius: '8px',
          clickToClose: true,
        });
      })
      .catch(({ position, delay }) => {
        Notify.failure(`Rejected promise ${position} in ${delay}ms`, {
          fontSize: '16px',
          width: '360px',
          svgSize: '120px',
          borderRadius: '8px',
          clickToClose: true,
        });
      });
  }
});
