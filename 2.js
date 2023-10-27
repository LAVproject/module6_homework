// Функция проверяет простое ли число
function checkPrimeNumber(number) {
    // Выводим в консоль введенное число
    console.log('number', number)
    if (number > 1000) {
        console.log("Данные неверны. Введите число не больше 1000.");
        return;
    }

    if (number === 0 || number === 1) {
        console.log("Число не является простым.");
        return;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            console.log("Число не является простым.");
            return;
        }
    }

    console.log("Число является простым.");
}

// Вызываем функцию с параметром 3
checkPrimeNumber(3)
// Вызываем функцию с параметром 10
checkPrimeNumber(10)
// Вызываем функцию с параметром 100500
checkPrimeNumber(100500)