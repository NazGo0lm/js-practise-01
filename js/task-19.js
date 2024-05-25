/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/
const buttonEl = document.querySelector("#swapButton");
const inpulLeftEl = document.querySelector("#leftSwapInput");
const inpulRightEl = document.querySelector("#rightSwapInput");
buttonEl.addEventListener("click", () => {
  let valueInputR = inpulRightEl.value;
  let valueInputL = inpulLeftEl.value;
  inpulRightEl.value = valueInputL;
  inpulLeftEl.value = valueInputR;
});
