//300
// Это ката предназначено для проверки вашей способности расширять функциональность встроенных классов. 
// В этом случае, мы хотим , чтобы вы расширить встроенный Array класс со следующими методами: square(), 
// cube(), average(), sum(), even() и odd().

// Пояснение:

// square() должен возвращать копию массива, содержащую все значения в квадрате
// cube() должен возвращать копию массива, содержащего все значения в кубе
// average() должен возвращать среднее значение всех значений массива; 
// для пустого массива должен возвращать NaN (примечание: пустой массив не тестируется в Ruby!)
// sum() должен возвращать сумму всех значений массива
// even() должен возвращать массив всех четных чисел
// odd() должен возвращать массив всех нечетных чисел
// Примечание: исходный массив не должен быть изменен в любом случае!

// пример
// var numbers = [1, 2, 3, 4, 5];

// numbers.square();  // must return [1, 4, 9, 16, 25]
// numbers.cube();    // must return [1, 8, 27, 64, 125]
// numbers.average(); // must return 3
// numbers.sum();     // must return 15
// numbers.even();    // must return [2, 4]
// numbers.odd();     // must return [1, 3, 5]

let numbers = [1, 2, 3, 4, 5];

    Array.prototype.square = function() {
        return this.map(el => el ** 2);
    }
    Array.prototype.cube = function() {
        return this.map(el => el ** 3);
    }
    Array.prototype.average = function() {
        return this.reduce((acc, el) => acc+el, 0) / this.length;
    }
    Array.prototype.sum = function() {
        return this.reduce((acc, el) => acc+el, 0);
    }
    Array.prototype.even = function() {
        return this.filter(el => el%2 === 0);
    }
    Array.prototype.odd = function() {
        return this.filter(el => el%2 === 1);
    }
    

//console.log(numbers.odd());
