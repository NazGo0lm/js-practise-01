// Напишіть цикл, який виводить у консоль
// усіх парних чисел від min до max
// За допомогою циклу for складіть усі парні числа від min до max
const max = 50;
const min = 0;
let num = 0;
for (let i = 0; i <= max; i++) {
  if (i % 2 === 0) {
    num += i;
  }
}
console.log(num);
