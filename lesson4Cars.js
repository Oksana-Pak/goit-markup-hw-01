const cars = [
  {
    car: 'Honda',
    type: 'Civic',
    price: 12000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
  },
  {
    car: 'Audi',
    type: 'Q7',
    price: 40000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
  },
  {
    car: 'BMW',
    type: '5 siries',
    price: 9000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
  },
  {
    car: 'Honda',
    type: 'Accord',
    price: 20000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
  },

  {
    car: 'Volvo',
    type: 'XC60',
    price: 7000,
    img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
  },
  {
    car: 'Honda',
    type: 'Accord',
    price: 20000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
  },
  {
    car: 'Volvo',
    type: 'XC60',
    price: 7000,
    img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
  },
];

const ulRef = document.querySelector('.list');
const formRef = document.querySelector('.form');
console.log(formRef);

formRef.addEventListener('submit', searchCar);

function cardsMarkup(array) {
  const markup = array
    .map(({ car, type, price, img }) => {
      return `<li><img src=${img} width='300px'/><h2>${car}</h2><h3>${type}</h3><p>${price}</p></li> `;
    })
    .join('');
  ulRef.innerHTML = markup;
}

cardsMarkup(cars);

function searchCar(e) {
  e.preventDefault();

  const inputRef = e.currentTarget.elements.input.value;
  const selectRef = e.currentTarget.elements.select.value;

  const filteredCars = cars.filter(
    item => item[selectRef].toLowerCase() === inputRef.toLowerCase()
  );
  cardsMarkup(filteredCars);
}
