// // 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списко імен учнів факультету
// // 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультета
// // 3 Створити метод об'єкту який буде виводити ім'я факультету в якого більше очків

// const hogvarts = {
//   griffindor: [
//     {
//       name: 'Harry',
//       points: 17,
//     },
//     {
//       name: 'Hermiona',
//       points: 19,
//     },
//     {
//       name: 'Ron',
//       points: 14,
//     },
//   ],
//   sliserin: [
//     {
//       name: 'Draco',
//       points: 17,
//     },
//     {
//       name: 'Goyl',
//       points: 14,
//     },
//     {
//       name: 'Crabbe',
//       points: 5,
//     },
//   ],
//   getStudents(faculty) {
//     return this[faculty].map(({ name }) => {
//       name;
//     });
//     // const currentFaculty = this[faculty];
//     // const studentList = currentFaculty.map(({ name }) => name);
//     // console.log(studentList);
//   },
//   getPoints(faculty) {
//     return this[faculty].reduce((total, student) => (total += student.points), 0);
//     // const currentFaculty = this[faculty];
//     // const studentList = currentFaculty.map(({ name }) => name);
//     // console.log(studentList);
//   },
// };
// hogvarts.getStudents('griffindor');
// hogvarts.getPoints('griffindor');

// Створити функцію яка буде приймати 2 параметра.
// 1 Масив студентів.
// 2 Мову програмування яку потрібно знайти.
// Функція повертає масив імен користувачів які вивчають цю мову.

// const students = [
//   {
//     name: `Lika`,
//     langunage: `html`,
//   },
//   {
//     name: `Anton`,
//     langunage: `css`,
//   },
//   {
//     name: `Andriy`,
//     langunage: `js`,
//   },
//   {
//     name: `Vova`,
//     langunage: `html`,
//   },
//   {
//     name: `Alina`,
//     langunage: `css`,
//   },
//   {
//     name: `Egor`,
//     langunage: `js`,
//   },
//   {
//     name: `Aleksandr`,
//     langunage: `html`,
//   },
//   {
//     name: `Taras`,
//     langunage: `css`,
//   },
//   {
//     name: `Ivan`,
//     langunage: `js`,
//   },
//   {
//     name: `Make`,
//     langunage: `html`,
//   },
// ];

// function getDtudents(students, langunage) {
//   return students.filter(student => student.langunage === langunage).map(student => student.name);
// }
// console.log(getDtudents(students, `css`));

// const workers = [
//   {
//     name: 'Alex',
//     salary: 3500,
//     month: 12,
//   },
//   {
//     name: 'Dima',
//     salary: 2500,
//     month: 9,
//   },
//   {
//     name: 'Oleg',
//     salary: 1500,
//     month: 36,
//   },
// ];

// function getSalary(arr, name) {
//   const worker = arr.find(({ name: workerName }) => workerName === name);
//   console.log(worker);
//   return worker.salary * worker.month;
// }

// function totalSalary(arr) {
//   return arr.reduce((acc, { name }) => acc + getSalary(arr, name), 0);
// }

// console.log(getSalary(workers, 'Alex'));
// console.log(totalSalary(workers));

// const d = [1, 3, 5, 8, 0];
// const f = [3, 8];

// function ade(a, b) {
//   const newArr = [];
//   for (const el of a) {
//     if (!b.includes(el)) {
//       newArr.push(el);
//     }
//   }
//   return newArr;
// }
// console.log(ade(d, f));

// function array_diff(a, b) {
//   return a.filter(e => !b.includes(e));
// }

// const friends = [
//   {
//     name: 'Alex',
//     books: ['sss', 'ooo', 'fgfg'],
//     age: 21,
//   },
//   {
//     name: 'Dima',
//     books: ['bbb', 'mmm'],
//     age: 21,
//   },
//   {
//     name: 'Oleg',
//     books: ['bbb', 'mmm'],
//   },
//   {
//     name: 'Oleksiy',
//     books: ['uyu', 'ooo', 'fdfd'],
//     age: 21,
//   },
// ];
// function getAddSalary(array, book) {
//   return array
//     .filter(friend => friend.books.includes(book))
//     .map(({ name }) => name)
//     .join(', ');
// }

// function getAddSalary(array, book) {
//   return array
//     .filter(friend => friend.books.includes(book))
//     .reduce((string, { name }) => string + ' ' + name, '');
// }

// console.log(getAddSalary(friends, 'ooo'));

// function countAge(array) {
//   const total = array.reduce((totalAge, user) => {
//     if (user.hasOwnProperty('age')) {
//       totalAge += user.age;
//     }
//     return totalAge;
//   }, 0);
//   console.log(total);
// }

// console.log(countAge(friends));

// const bankSystem = {
//   privat: 1000,
//   mono: 1500,
// getCart() {
//   const card = prompt('Your card');
//   if (this.hasOwnProperty(card)) {
//     return this[card];
//   }
//   console.log('You dont have such card');
// },
// addNewCard() {
//   const newCard = prompt('Enter your card');
//   if (!this.hasOwnProperty(newCard)) {
//     this[newCard] = 0;
//     return 'You have new card';
//   }
//   console.log('This card j.....');
// },
//   getSum() {
//     const card = prompt('');
//
//     if (this.hasOwnProperty(card)) {
// const sum = prompt('');
//       if (this[card] >= sum) {
//         return (this[card] -= sum);
//       } else {
//         return 'No money';
//       }
//     } else {
//       return 'Wrong card';
//     }
//   },
// };
//   addSum() {
//     const card = prompt('');
//     const sum = prompt('');
//     if (!this.hasOwnProperty(card)) {
//       return (this[card] = sum);
//     } else {
//       return (this[card] += +sum);
//     }
//   },
// };
// console.log(bankSystem.getCart());
// console.log(bankSystem.addNewCard());
// console.log(bankSystem.getSum());
// console.log(bankSystem.addSum());
// console.log(bankSystem);

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction', 'mysticism'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism', 'adventure'],
//   },
// ];

// const allGenres = books.flatMap(({ genres }) => genres);
// const uniqueGenres = allGenres.filter(
//   (genres, index, allGenres) => allGenres.indexOf(genres) === index
// );
// console.log(uniqueGenres);

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
//   .filter(({ rating }) => rating > MIN_BOOK_RATING)
//   .map(({ author }) => author)
//   .sort((firstName, secondName) => firstName.localeCompare(secondName));

// console.log(names);

// const getNamesSortedByFriendCount = users =>
//   users
//     .sort((firstUser, secondUser) => firstUser.friends.length - secondUser.friends.length)
//     .map(({ name }) => name);

// const getSortedFriends = users =>
//   [...users]
//     .flatMap(({ friends }) => friends)
//     .filter((friend, index, friends) => friends.indexOf(friend) === index)
//     .sort((firstFriend, secondFriend) => firstFriend.localeCompare(secondFriend));

// const getTotalBalanceByGender = (users, gender) =>
//   users
//     .filter(({ gender }) => gender === gender)
//     .reduce((balance, user) => (balance += user.balance), 0);

// console.log(getTotalBalanceByGender(users, 'female'));

// CONSTRUCTOR

// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//   }
//   padEnd(str) {
//     this.value += str;
//   }
//   padStart(str) {
//     this.value = str + this.value;
//   }

//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// }

// const builder = new StringBuilder('.');

// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="
