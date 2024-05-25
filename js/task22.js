console.log("hello");
/*
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/
function onMouseMove(event) {
  let top = event.pageY;
  let left = event.pageX;
  outerCircleEl.style.top = `${top - 5}px`;
  outerCircleEl.style.left = `${left - 5}px`;
}
const outerCircleEl = document.querySelector(".outerCircle");

outerCircleEl.addEventListener("click", () => {
  console.log("hello");
  if (outerCircleEl.style.position !== "absolute") {
    outerCircleEl.style.position = "absolute";
    window.addEventListener("mousemove", onMouseMove);
  } else {
    // outerCircleEl.style.position = "static";
    window.removeEventListener("mousemove", onMouseMove);
  }
});
