// *? Зробіть знижку 20% на всі фрукти у масиві
// *? Надайте ід для кожного продукту
const fruits = [
  { name: "apple", price: 200 },
  { name: "orange", price: 300 },
  { name: "grapes", price: 750 },
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
