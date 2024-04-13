// Дан рядок "javaScript is Awesome"
// Напиши функцію, яка приймає рядок і перевіряє,
// чи є там великі літери, якщо є хочаб одна велика літера, вивести true

const message = "javaScript is Awesome";
function checkMessage(message) {
    for (let i = 0; i < message.length; i++ ){
        console.log(message[i]);
        if (message[i] === message[i].toUpperCase()) {
            return true;
        }
    }
    return false;
}

console.log(checkMessage(message))