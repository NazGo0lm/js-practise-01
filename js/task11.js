/**
 *? Напишіть ф-цію calcTotalPrice(stones, stonesName), яка приймає масив об'єктів та рядок під назвою каменю.
 *? Функція рахує та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю з об'єкта
 */
const stones = [
    {name: "Смарагд", price: 1300, quantity: 4},
    {name: "Діамант", price: 2700, quantity: 6},
    {name: "Сапфір", price: 400, quantity: 7},
    {name: "Щебінь", price: 150, quantity: 100},
];

function calcTotalPrice(stones, stonesName) {
    for (const stone of stones) {
        if (stone.name === stonesName) {
            console.log(stone.name);
            return stone.price * stone.quantity;
        }
    }
    return `Такого каменю ${stonesName} не існує`;
}

console.log(calcTotalPrice(stones, "Смарагд"));
console.log(calcTotalPrice(stones, "Сапфір"));
console.log(calcTotalPrice(stones, "Щебінь"));
console.log(calcTotalPrice(stones, "Кварц"));
