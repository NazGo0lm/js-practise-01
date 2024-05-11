/**
 *? З об'єкту concerts потрібно отримати масив
 *? в якому будуть лише імена міст.
 *? З масиву потрібно прибрати міста, в яких концерт уже пройшов і
 *? відсортувати їх у хронологічному порядку.
 *? Результат вивести у консоль.
 *? Очікуваний результат ["Умань", "Харків", "Одеса"]
 */
const concerts = {
    Київ: new Date("2020-04-01"),
    Умань: new Date("2024-11-02"),
    Вінниця: new Date("2020-04-21"),
    Одеса: new Date("2024-11-15"),
    Хмельницький: new Date("2020-04-18"),
    Харків: new Date("2024-11-10"),
};

const today = new Date();
const array = Object.keys(concerts);
// const clearedObj = array.filter(city => concerts[city] > today).toSorted((a, b) => concerts[a] - concerts[b]);
const clearedObj = array
    .filter(city => {
        console.log("23", concerts[city], today);
        return concerts[city] > today;
    })
    .toSorted((a, b) => {
        console.log("27", concerts[a], concerts[b]);
        return concerts[a] - concerts[b];
    });

console.log(clearedObj);
