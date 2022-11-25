const refs = {
  button: document.querySelector('.button'),
  sunBtn: document.querySelector('.sun'),
  moonBtn: document.querySelector('.moon'),
};

const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
  document.body.classList.add('dark');
  refs.moonBtn.classList.remove('btn_display');
  refs.sunBtn.classList.add('btn_display');
}

refs.button.addEventListener('click', onBtnClick);

function onBtnClick() {
  document.body.classList.toggle('dark');
  refs.sunBtn.classList.toggle('btn_display');
  refs.moonBtn.classList.toggle('btn_display');

  const theme = localStorage.getItem('theme');
  console.log(theme);
  if (theme === 'dark') {
    localStorage.setItem('theme', 'ligth');
  } else {
    localStorage.setItem('theme', 'dark');
  }
}
