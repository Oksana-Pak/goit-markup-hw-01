const instruments = [
  {
    id: 1,
    img: 'https://static.dnipro-m.ua/cache/products/1754/catalog_origin_141546.jpg',
    name: 'Молоток',
    price: 150,
  },
  {
    id: 2,
    img: 'https://static.dnipro-m.ua/cache/products/5098/catalog_origin_195568.jpg',
    name: 'Перфоратор',
    price: 3000,
  },
  {
    id: 3,
    img: 'https://static.dnipro-m.ua/cache/products/2023/catalog_origin_200763.jpg',
    name: 'Рівень',
    price: 2000,
  },
];

const listProductRef = document.querySelector(`.list`);
const resultProductRef = document.querySelector(`.result`);
const buttonRef = document.querySelectorAll(`button`);

listProductRef.addEventListener(`click`, findProductEl);
buttonRef[0].addEventListener('click', murkupBasket);
buttonRef[1].addEventListener('click', murkupFavorite);

const basket = [];
const favorite = [];

function markupCards(instruments) {
  const markup = instruments
    .map(({ id, img, name, price }) => {
      return `
    <li data-id="${id}">
    <img src="${img}" width="300px">
    <h2>${name}</h2>
    <p>${price}</p>
    <button class="jsAdd">Купити</button>
    <button class="jsFavorite">Обране</button>
    </li>
    `;
    })
    .join(``);
  listProductRef.innerHTML = markup;
}
markupCards(instruments);

function findProductEl(event) {
  if (event.target.classList.contains(`jsAdd`)) {
    const idx = event.target.closest(`li`).dataset.id;
    const currentProduct = instruments.find(({ id }) => id === Number(idx));

    checkProduct(basket, currentProduct);
    console.log(basket);
  }

  if (event.target.classList.contains(`jsFavorite`)) {
    const idx = event.target.closest(`li`).dataset.id;
    const currentProduct = instruments.find(({ id }) => id === Number(idx));

    checkProduct(favorite, currentProduct);
    console.log(favorite);
  }
}

function checkProduct(array, currentProduct) {
  const findItem = array.find(el => el.id === currentProduct.id);
  if (!findItem) {
    array.push(currentProduct);
    currentProduct.quantity = 1;
  } else {
    findItem.quantity += 1;
  }
}
function murkupBasket() {
  markupCards(basket);
}
function murkupFavorite() {
  markupCards(favorite);
}
// Зробити так, щоб при повторному додаванні продукта в массив не сам продукт повторювався, а його кількість.
// Зробити так, щоб при натисканні кнопки зверху елемент додавався в пустий масси.
// Добавити можливість видаляти всі елементи з кошику, або зменшувати їх кількість.

// ===============================================================================================================

// Change value of isSuccess variable to call resolve or reject
const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve('Success! Value passed to resolve function');
    } else {
      reject('Error! Error passed to reject function');
    }
  }, 2000);
});
console.log(promise);
