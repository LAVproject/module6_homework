// Массив
const array = [3, 7, true, 0, 7, 6, 4, 10, null, 5, 7, 0, 5, 2, 9, 2, undefined];

// Функция получает и выводит в консоль четность элементов в массиве
function getParityNumberArrayElements(array) {
    // Четных элементов
    let evenCount = 0;
    // Нечетный элементов
    let oddCount = 0;
    // Нулевых элементов
    let zeroCount = 0;

    // Считаем сколько элементов четных/нечетных/нулевых
    array.forEach((element) => {
        // Проверка на число
        if (typeof element === "number" && !isNaN(element)) {
            // Проверка на нулевой элемент
            if (element === 0) {
                zeroCount++;
            }
            // Проверка на четный элемент
            else if (element % 2 === 0) {
                evenCount++;
            }
            // Нечетный элемент
            else {
                oddCount++;
            }
        }
    })

    // Выводим количество четных элементов
    console.log('evenCount', evenCount)
    // Выводим количество нечетных элементов
    console.log('oddCount', oddCount)
    // Выводим количество нулевых элементов
    console.log('zeroCount', zeroCount)
}

// Вызываем функцию
getParityNumberArrayElements(array)