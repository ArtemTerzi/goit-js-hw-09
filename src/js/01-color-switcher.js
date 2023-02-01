const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
  isActive: false,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.stopBtn.disabled = true;
let intervalId = null;

refs.startBtn.addEventListener('click', () => {
  if (refs.isActive === false) {
    refs.isActive = true;
    refs.stopBtn.disabled = false;
    refs.startBtn.disabled = true;
  }

  intervalId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

refs.stopBtn.addEventListener('click', () => {
  if (refs.isActive) {
    refs.isActive = false;
    refs.stopBtn.disabled = true;
    refs.startBtn.disabled = false;
  }
  clearInterval(intervalId);
});
