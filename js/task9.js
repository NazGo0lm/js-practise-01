


// *? Зробіть знижку 20% на всі фрукти у масиві
// *? Надайте ід для кожного продукту
const fruits = [
  { name: "apple", price: 200 },
  { name: "orange", price: 300 },
  { name: "grapes", price: 750 },
];

function returnAfterDiscounts(array, discount) {
    const arrayAfterDiscount = [];
    let id = 0;
    for (const item of array) {
        const newItem = { ...item };
        newItem.price -= newItem.price * discount * 0.01;
        newItem.id = id;
        arrayAfterDiscount.push(newItem);
        id++;
    }
    return arrayAfterDiscount;
}

console.log(returnAfterDiscounts(fruits, 20));
console.log(fruits);