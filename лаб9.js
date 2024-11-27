function factorial(n = 0) {
// Перевірка, чи є число цілим
if (!Number.isInteger(n)) {
return 'Факторіал визначено тільки для цілих чисел.';
}
    
// Перевірка на від'ємні числа
if (n < 0) {
return 'Помилка: факторіал від’ємного числа не визначений.';
}
    
// Базовий випадок
if (n === 0) {
return 1;
}

// Рекурсивний випадок
return n * factorial(n - 1);
}

// Тестування
console.log(factorial(5));
console.log(factorial(-3));
console.log(factorial(1.5));
console.log(factorial(0));