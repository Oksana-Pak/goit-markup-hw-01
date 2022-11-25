// Реалізуйте клас Student, який успадковуватиметься від класу User. Цей клас повинен мати такі властивості:
// name приватна властивість (ім'я, успадковується від User),
// surname приватна властивість (прізвище, успадковується від User),
// year (рік вступу до вузу).
// Клас повинен мати метод getFullName() (успадковується від User), за допомогою якого можна вивести одночасно ім'я та прізвище студента.
// Також клас повинен мати метод getCourse(), який виводитиме поточний курс студента (від 1 до 5, якщо значення перевищує 5  курс виводити що студент являєтсья випускником).
// Курс обчислюється так: потрібно від поточного року відняти рік вступу до вузу. Поточний рік отримаєте самостійно (читати документацію!!!).
// Приклад ініціалізації екземпляру класа:
// const student = new Student('Петрик', 'Пяточкин', 2019);

// student.getFullName(); //поверне 'Петрик Пяточкин'
// student.getCourse();   //поверне 3 (третій курс)
// =====================================================

// Стоврити функцію яка буде перебирати масив обєктів (films),з кожного обєкта потрібно взяти IDs жанрів фільмів та знайти
// їх в іншому єбєкті який буде містити в собі ID та назву жанру відповідну до цего ID.
// Функція повертає стрінгу з назвами фільмів та жанрами до яких цей фільм входить, якщо кількість жанрів більше двох потрібно
//  вивести назву перших двох жанрів і додати надпис 'Others'.
// В результаті маємо отримати:
//
// Films list:
// 1. 'Interceptor: Action, Thriller, Others.'
// 2. 'Fantastic Beasts: The Secrets of Dumbledore: Fantasy, Adventure, Others.'
// 3. 'Last Seen Alive: Action, Thriller.'
// 4. 'Jurassic World Dominion: Science Fiction, Action, Others.'

const films = [
  {
    title: 'Interceptor',
    genre_ids: [28, 53, 12],
  },
  {
    title: 'Fantastic Beasts: The Secrets of Dumbledore',
    genre_ids: [14, 12, 28],
  },
  {
    title: 'Last Seen Alive',
    genre_ids: [28, 53],
  },
  {
    title: 'Jurassic World Dominion',
    genre_ids: [878, 28, 12, 53],
  },
];

const genres = [
  {
    id: 28,
    name: 'Action',
  },
  {
    id: 12,
    name: 'Adventure',
  },
  {
    id: 14,
    name: 'Fantasy',
  },
  {
    id: 878,
    name: 'Science Fiction',
  },
  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 10752,
    name: 'War',
  },
  {
    id: 37,
    name: 'Western',
  },
];

films.forEach(film => {
  const names = film.genre_ids.map(id => {
    return genres.find(genre => genre.id === id).name;
  });
  //console.log(names);
  film.genreName = names;
  console.log(film);
});

const list = films.reduce((acc, film, idx) => {
  return (
    acc +
    `${idx + 1} ${film.title} : ${
      film.genreName.length < 3
        ? film.genreName.join(', ')
        : `${film.genreName[0]}, ${film.genreName[1]}, Others... \n `
    } `
  );
}, 'film list \n');

console.log(list);

// -----------------------------------------TASK 1------------------------------------------//
// 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультета
// 3 Створити метод об'єкту який буде виводити ім'я факультету в якого більше очків

// const hogvarts = {
//     griffindor: [{
//             name: "Harry",
//             points: 17
//         },
//         {
//             name: "Hermiona",
//             points: 19
//         },
//         {
//             name: "Ron",
//             points: 14
//         },
//     ],
//     sliserin: [{
//             name: "Draco",
//             points: 17
//         },
//         {
//             name: "Goyl",
//             points: 14
//         },
//         {
//             name: "Crabbe",
//             points: 5
//         },
//     ],
// }

// -----------------------------------------TASK 2------------------------------------------//
// Створити функцію яка буде приймати 2 параметра.
// 1 Масив студентів.
// 2 Мову програмування яку потрібно знайти.
// Функція повертає масив імен користувачів які вивчають цю мову.

// const students = [{
//     name: `Lika`,
//     language: `html`

// }, {
//     name: `Anton`,
//     language: `css`

// }, {
//     name: `Andriy`,
//     language: `js`

// }, {
//     name: `Vova`,
//     language: `html`

// }, {
//     name: `Alina`,
//     language: `css`

// }, {
//     name: `Egor`,
//     language: `js`

// }, {
//     name: `Aleksandr`,
//     langunage: `html`

// }, {
//     name: `Taras`,
//     language: `css`

// }, {
//     name: `Ivan`,
//     language: `js`

// }, {
//     name: `Make`,
//     language: `html`

// }, ];

// // Порахувати скільки ззаробив кожен  юзер
// // (функція приймає 2 параметри
// // 1 параметр масив
// // 2 параметр імя робітника
// // Функція повертає скільки він заробив (salary*month) )

// // Порахувати загальну суму заробітку всіх робітників()
// // (функція приймає 1 параметр масив, і повертає загальну суму заробітку всіх робітників);

// // const workers = [{
// //         name: 'Alex',
// //         salary: 3500,
// //         month: 12,
// //     },
// //     {
// //         name: 'Dima',
// //         salary: 2500,
// //         month: 9,
// //     },
// //     {
// //         name: 'Oleg',
// //         salary: 1500,
// //         month: 36,
// //     },
// // ];

// 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є ця книга ("Harry Potter") \\\ "Anna, Oleksii"

// 2 Порахувати вік всіх юзерів у яких є ключ age.

// const friends = [{ name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
//     { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
//     { name: "Alice", books: ["War and peace", "Romeo and Juliet"]},
//     { name: "Oleksii", books: ["Bible","War and peace","Harry Potter",  "Romeo and Juliet"], age: 26},
// ]

// Потрібно створити 4 методи об'єкту
// 1 виводить суму на карті (назву вводимо в prompt())
// 2 додає нову карту (назву вводимо в prompt())
// 3 зняти з карти (назву вводимо в prompt() та суму в prompt())
// 4 додати на карту (назву вводимо в prompt() та суму в prompt())

// const bankSystem = {
//     privat : 1000,
//     mono : 1500,

// }

// -----------------------------------------TASK 6------------------------------------------//
// Створити функцію яка буде шукати нарциса. Головна умова нарциса знають всі, нарцис не знає нікого.

// const people1 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
//     {
//         name: 'Eva',
//         know: ['Alex','Jhon']
//     },
//     {
//         name: 'Jhon',
//         know: [Alex]
//     },
// ] //Not found
// const people2 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Jhon',
//         know: []
//     },
//     {
//         name: 'Eva',
//         know: []
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
// ];// Not found

// const people3 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Jhon',
//         know: []
//     },
//     {
//         name: 'Eva',
//         know: ['Alex', 'Jhon']
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
// ]; // Jhon

// Створити функцію яка приймає 1 параметр масив продуктів і повертає мутований масив
// Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати
// а ті обє'кти в яких айді співпав видалити з масиву.
// (Потрібно мутувати масив, створювати новий не потрібно)

// const products = [{
//     id: 'sku1',
//     qty: 1,
// }, {
//     id: 'sku2',
//     qty: 2,
// }, {
//     id: 'sku3',
//     qty: 3,
// }, {
//     id: 'sku1',
//     qty: 6,
// }, {
//     id: 'sku1',
//     qty: 8,
// }, {
//     id: 'sku2',
//     qty: 19,
// }, {
//     id: 'sku4',
//     qty: 1,
// }]
