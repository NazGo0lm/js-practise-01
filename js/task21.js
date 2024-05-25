/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
*/
    // <!-- ЗАДАЧА 4 -->
    // <div>
    //   <p class="taskTitle">ЗАДАЧА 4</p>
    //   <div id="box"></div>
    //   <button id="decrease">Зменшити</button>
    //   <button id="increase">Збільшити</button>
// </div>
    
const decreaseBtnEl = document.querySelector("#decrease");
const increaseBtnEl = document.querySelector("#increase");
const divEl = document.querySelector('#box');


let width = parseInt(getComputedStyle(divEl).width);
let height = parseInt(getComputedStyle(divEl).height);
increaseBtnEl.addEventListener('click', () => {
    width += 10;
    height += 10;
    divEl.style.width = `${width}px`;
    divEl.style.height = `${height}px`;
   
});
decreaseBtnEl.addEventListener('click', () => {
    width -= 10;
    height -= 10;
    divEl.style.width = `${width}px`;
    divEl.style.height = `${height}px`;
});