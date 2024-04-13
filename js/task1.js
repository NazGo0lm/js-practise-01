/**
 *? Використовуючи функцію if...else,
 *? напишіть код, який запитуватиме:
 *? "Яка офіційна назва JavaScript?"
 *? Якщо користувач вводить "ECMAScript",
 *? то показати через alert: "Вірно!"
 *? інакше відобразити:"Не знаєте? ECMAScript!"
 */
const answer = prompt("Яка офіційна назва JavaScript?").trim();
const CHECK = "ECMAScript";
if (answer === CHECK) {
    alert("Вірно!");
} else {
    alert("Не знаєте? ECMAScript!");
}
console.log(answer);
