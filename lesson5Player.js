const contentRef = document.querySelector(`.content`);
const btnRef = document.querySelector(`.btn`);
const formRef = document.querySelector(`form`);
const firstplayerRef = document.querySelector(`.first`);
const secondplayerRef = document.querySelector(`.second`);

let player = localStorage.getItem('currentPlayer') || 'X';
let winIndex = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function createMurkup() {
  let murkup = ``;
  for (let i = 0; i <= 8; i += 1) {
    murkup += `<div class="item" data-id='${i}'></div>`;
  }
  return murkup;
}

contentRef.insertAdjacentHTML(`beforeend`, createMurkup());
contentRef.addEventListener(`click`, onClick);
btnRef.addEventListener(`click`, onReset);
formRef.addEventListener('submit', onSubmit);

let firstValue = [];
let secondValue = [];

function onSubmit(e) {
  e.preventDefault();
  const { first, second } = e.currentTarget.elements;
  firstplayerRef.textContent = first.value;
  secondplayerRef.textContent = second.value;
  e.currentTarget.reset();
}

function onClick(e) {
  if (!e.target.classList.contains(`item`)) {
    return;
  }

  if (!e.target.textContent) {
    e.target.textContent = player;
    if (player === `X`) {
      firstValue.push(+e.target.dataset.id);
      localStorage.setItem('firstValue', JSON.stringify(firstValue));
      if (isWin(firstValue)) {
        setTimeout(() => {
          alert(`Win ${player}`);
          onReset();
        });
        return;
      }
    } else {
      secondValue.push(+e.target.dataset.id);
      localStorage.setItem('secondValue', JSON.stringify(secondValue));
      if (isWin(secondValue)) {
        setTimeout(() => {
          alert(`Win ${player}`);
          onReset();
        });
        return;
      }
    }

    player = player === `X` ? `O` : `X`;
    localStorage.setItem('currentPlayer', player);
  }
}

function onReset() {
  contentRef.innerHTML = createMurkup();
  player = `X`;
  localStorage.removeItem('firstValue');
  localStorage.removeItem('secondValue');
  firstValue = [];
  secondValue = [];
}

function continueGame() {
  const arrX = JSON.parse(localStorage.getItem('firstValue')) || [];
  const arr0 = JSON.parse(localStorage.getItem('secondValue')) || [];
  firstValue = arrX;
  secondValue = arr0;
  for (const el of contentRef.children) {
    if (arrX.includes(el.dataset.id)) {
      el.textContent = 'X';
    }
    if (arr0.includes(el.dataset.id)) {
      el.textContent = 'O';
    }
  }
}
continueGame();

function isWin(arr) {
  return winIndex.some(item => item.every(idx => arr.includes(idx)));
}
