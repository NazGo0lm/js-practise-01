// Створіть об'єкт calculator із трьома методами
// read(a, b) - приймає два аргументи та зберігає їх
// як властивості об'єкта
// sum() повертає суму збережених значень
// multiply() перемножує збережені значення та повертає результат
// const calculator = {
//   read(a, b) {},
//   sum() {},
//   mult() {},
// };


const calculator = {

    read(a, b) {
        this.value1 = a;
        this.value2 = b;
   },
    sum() {
        return this.value1 + this.value2
    },
    mult() {
        return this.value1 * this.value2
    },
 };

calculator.read(9,6);
console.log(calculator.sum());
console.log(calculator.mult());
console.log(calculator);


//

/* 
const students = [
  { name: "Алиса", age: 20, course: "Java" },
  { name: "Боб", age: 22, course: "Python" },
  { name: "Карл", age: 21, course: "Java" },
  { name: "Джон", age: 23, course: "JavaScript" },
];


function theCourse(somestaff) {
  const groupedStudents = {};
  for (const student of somestaff) {
  
  if (!groupedStudents[student.course]) {
    groupedStudents[student.course] = [];
  }
  groupedStudents[student.course].push(student);
  }
  return groupedStudents
}


console.log(theCourse(students));

 */

/* 
const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players.reduce((acc, theplaytime) => {
  return acc + (theplaytime.playtime / theplaytime.gamesPlayed) ;

},0);

console.log(totalAveragePlaytimePerGame)


 */
/* 
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;

const names = books
  .filter(name => name.rating >= MIN_BOOK_RATING)
  .map(name => name.author)
  .toSorted((a,b) => a.localeCompare(b))
  ;
 
  console.log(names) */