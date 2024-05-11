// Угруповання об'єктів за якістю
// Створіть масив об'єктів, що являють собою різних студентів. Кожен об'єкт повинен містити властивості ім'я, вік та курс. Використовуйте цикл for...of, щоб згрупувати студентів за курсами.
// Результатом буде об'єкт, де ключами будуть назви курсів, а значення – масиви об'єктів студентів, що належать до відповідного курсу.
// Очікуванний результат:
// const groupedStudents = {
//   Java: [
//     { name: "Алиса", age: 20, course: "Java" },
//     { name: "Карл", age: 21, course: "Java" },
//   ],
//   Python: [{ name: "Боб", age: 22, course: "Python" }],
//   JavaScript: [{ name: "Джон", age: 23, course: "JavaScript" }],
// };
// const students = [
//   { name: "Алиса", age: 20, course: "Java" },
//   { name: "Боб", age: 22, course: "Python" },
//   { name: "Карл", age: 21, course: "Java" },
//   { name: "Джон", age: 23, course: "JavaScript" },
// ];
// function createCourse(allStudents) {
//   const groupedStudents = {};
//   for (const student of allStudents) {
//     if (!groupedStudents[student.course]) {
//       groupedStudents[student.course] = [];
//     }
//     groupedStudents[student.course].push(student);
//   }
//   return groupedStudents;
// }
// console.log(createCourse(students));

// *? Зробіть знижку 20% на всі фрукти у масиві
// *? Надайте ід для кожного продукту
const fruits = [
    {name: "apple", price: 200},
    {name: "orange", price: 300},
    {name: "grapes", price: 750},
];
// const returnArray = fruits.map((fruit, index) => {
//   const newFruit = { ...fruit };
//   newFruit.price = newFruit.price * 0.8;
//   newFruit.id = index;
//     return newFruit;
// });
const returnArray = (array, discount) =>
    array.map((fruit, index) => ({
        ...fruit,
        price: fruit.price * discount,
        id: index,
    }));
console.log(returnArray(fruits, 0.8));
console.log(fruits);
