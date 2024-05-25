/*
Коло має зникати при наведенні на нього.
При цьому позиція сусідніх кіл має залишатися незмінною.
*/

const ulEl = document.querySelector('.grid');
ulEl.addEventListener('mouseover', (evt) => {
    if (!evt.target.classList.contains('gridItem')) {
return 
    }
    evt.target.style.opacity = 0;
    })
ulEl.addEventListener('mouseout', (evt) => {
    if (!evt.target.classList.contains('gridItem')) {
        return
    }
    evt.target.style.opacity = 1;
})