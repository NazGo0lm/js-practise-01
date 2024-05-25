/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/

    
const buttonEl = document.querySelector('#alertButton');
const inputEl = document.querySelector('#alertInput');

buttonEl.addEventListener('click', () => {
  console.log(inputEl.value);
})
    