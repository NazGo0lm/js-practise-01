//  *? Напишіть програму, яка приймає
//   *? число (кількість хвилин) та виведе в консоль
//   *? рядок у форматі годин та хвилин
//  *?      68 === 01:10

function convertTime(timeInMinutes){
const hours = String(Number.parseInt(timeInMinutes / 60)).padStart(2, '0');
    const minutes = String(timeInMinutes % 60).padStart(2, '0');
    return `${hours}:${minutes}`;
}
console.log(convertTime(67));
console.log(convertTime(120));
console.log(convertTime(121));
