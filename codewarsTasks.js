// class Phone {
//   constructor(brand, price, discount) {
//     this.brand = brand;
//     this.price = price;
//     this.discount = discount;
//   }

//   // Класичний метод класа
//   showInfo() {
//     console.log(this.brand, this.price, this.discount);
//   }

//   showInfo = () => {
//     console.log(this);
//     // console.log(this.brand, this.price, this.discount);
//   };

//   getDiscountPrice() {
//     console.log(this);
//     // const price = (this.price * (100 - this.discount)) / 100;
//     // console.log(price);
//   }
// }

// const lg = new Phone('LG', 500, 10);
// // console.log(lg);
// lg.showInfo();
// lg.getDiscountPrice();
// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE) {
//       this.#price = newPrice;
//     }
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000, car: 'audi' });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// console.log(audi);
// ===============================================

// =========================================
// draw a square
// =========================================
// function generateShape(integer) {
//   const string = '+'.repeat(integer);
//   const array = [];
//   for (let i = 0; i < integer; i += 1) {
//     array.push(string);
//   }

//   return array.join('\n');
// }
// console.log(generateShape(3));

// const generateShape = integer => ('+'.repeat(integer) + '\n').repeat(integer).trim();
// =========================================

// const DNAtoRNA = dna => dna.replaceAll('T', 'U');
// console.log(DNAtoRNA('TTTT'));
// // ("GCAT"), "GCAU")
// =========================================
// const min = (arr, toReturn) =>
//   toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr));
// console.log(min([1, 2, 3, 4, 5], 'index'));
// =========================================

// A wolf in sheep's clothing

// function warnTheSheep(queue) {
//   const indexSheep = queue.length - queue.findIndex(el => el === 'wolf') - 1;
//   return queue[queue.length - 1] === 'wolf'
//     ? 'Pls go away and stop eating my sheep'
//     : `Oi! Sheep number ${indexSheep}! You are about to be eaten by a wolf!`;
// }
// ============
// function warnTheSheep(queue) {
//   const position = queue.reverse().indexOf('wolf');
//   return position === 0
//     ? 'Pls go away and stop eating my sheep'
//     : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
// }
// console.log(warnTheSheep(['wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep']));
// ========================================
// function firstNonConsecutive(arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i + 1] - arr[i] !== 1) {
//       return arr[i + 1];
//     }
//   }
//   return null;
// }

// function firstNonConsecutive(arr) {
//   for (let i = 0; i < arr.length - 1; ++i) {
//     if (arr[i] + 1 !== arr[i + 1]) {
//       return arr[i + 1];
//     }
//   }
//   return null;
// }
// console.log(firstNonConsecutive([1, 2, 3, 4, 5, 6, 7, 8]));
// ===============================================
// for...in - вибрати ключі та значення довжина яких більше 5

// function giveMeFive(obj) {
//   const newArr = [];
//   for (const key in obj) {
//     if (key.length === 5) {
//       newArr.push(key);
//     }
//     if (obj[key].length === 5) {
//       newArr.push(obj[key]);
//     }
//   }
//   return newArr;
// }

// console.log(giveMeFive({ Our: 'earth', is: 'a', beautyful: 'world' }));
// {Our:"earth",is:"a",beautyful:"world"}),["earth","world"]

// =================================================

// function buildFun(n) {
//   var res = [];

//   function createFunction(index) {
//     return function () {
//       return index;
//     };
//   }

//   for (var i = 0; i < n; i++) {
//     res.push(createFunction(i));
//   }

//   return res;
// }
// console.log(buildFun(5));

// class Animal {
//   constructor(name, age, legs, species, status) {
//     this.name = name;
//     this.age = age;
//     this.legs = legs;
//     this.species = species;
//     this.status = status;
//   }
//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//   }
// }

// class Shark extends Animal {
//   constructor(name, age, status) {
//     super(name, age, 0, 'shark', status);
//   }
// }

// class Cat extends Animal {
//   constructor(name, age, status) {
//     super(name, age, 4, 'cat', status);
//   }
//   introduce() {
//     return super.introduce() + '  Meow meow!';
//   }
// }

// class Dog extends Animal {
//   constructor(name, age, status, master) {
//     super(name, age, 4, 'dog', status);
//     this.master = master;
//   }
//   greetMaster() {
//     return `Hello ${this.master}`;
//   }
// }

// const user = {
//     name: 'User',
//     currentThis: this,
//     getThis() {
//         console.log('getThis',this);
//         const testThis = () => {
//             console.log('testThis',this);
//         }
//         testThis()
//         function getThisIn(){
//             console.log('getThisIn',this);
//         }
//         getThisIn()
//     },
//     getArrowThis:  () => {
//         console.log('getArrowThis',this);
//     }
// }
// user.getThis()
// // user.getArrowThis()

// const gamer = {
//     name: 'Gamer',
//     thisInGamer : user.getThis
// }

// gamer.thisInGamer()
