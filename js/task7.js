/**
 *? Напиши скрипт для об'єкта user,
 *? послідовно:
 *? 1 додати поле mood зі значенням 'happy'
 *? 2 замінить hobby на 'skydiving'
 *? 3 замінить значення premium на false
 *? 4 виводить вміст об'єкта users у форматі
 *? ключ: значення використовуючи Object.keys() і for...of
 */

 const user = {
  name: "John",
  age: 20,
  hobby: "tennis",
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;
const result = Object.keys(user);
for (const item of result) {
    console.log(`${item}: ${user[item]}`)
}