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













