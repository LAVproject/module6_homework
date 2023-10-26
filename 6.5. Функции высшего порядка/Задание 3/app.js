// Функция принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел
function first(x) {
    return function(y) {
        return x + y;
    };
}

let second = first(50);
let result = second(120);

// Выводим результат в консоль
console.log(result);