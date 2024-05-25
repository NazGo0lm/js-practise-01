    // <!-- ЗАДАЧА 3 -->
    // <div>
    //   <p class="taskTitle">ЗАДАЧА 3</p>
    //   <input id="passwordInput" type="text" />
    //   <button id="passwordButton">Приховати</button>
    // </div>
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

const btnEl = document.querySelector('#passwordButton');
const inputEl = document.querySelector('#passwordInput');
btnEl.addEventListener('click', () => {
    if (inputEl.type === "text") {
        // console.log(inputEl.type)
        inputEl.type = "password";
        btnEl.textContent = 'Розкрити';
    } else {
        inputEl.type = "text";
        btnEl.textContent = 'Приховати';
    }
}    
);

