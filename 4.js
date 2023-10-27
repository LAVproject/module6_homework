// Функция принимает два числа. Каждую секунду выводит в консоль число, начиная от первого и заканчивая вторым.
function printEveryNumberRange(start, end) {
    // Текущее число
    let current = start;

    // Идентификатор setInterval
    let intervalId = setInterval(function() {
        // Выводим в консоль текущее число
        console.log(current);
        // Очищаем идентификатор, при совпадении текущего числа с конечным
        if (current === end) {
            clearInterval(intervalId);
        }
        // Прибавляем +1 к текущему числу
        current++;
    }, 1000);
}

// Вызываем функцию
printEveryNumberRange(3, 10)