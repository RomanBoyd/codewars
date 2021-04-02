
//https://www.codewars.com/kata/find-the-smallest-integer-in-the-array
// Учитывая массив целых чисел, ваше решение должно найти наименьшее целое число.
// Например:
// Учитывая [34, 15, 88, 2]ваше решение вернется 2
// Учитывая [34, -345, -1, 100]ваше решение вернется-345
// Для целей этого ката вы можете предположить, что предоставленный массив не будет пустым.

function small(arr) {
    //return Math.min(...arr);
    // return arr.sort((a, b) => a - b)[0];
  
  
    let currentMin = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < currentMin) {
        currentMin = arr[i];
      }
    }
    return currentMin;
    }
  //console.log(small([78,56,232,12,18]));
  
  
  
  
  //https://www.codewars.com/kata/find-the-missing-element-between-two-arrays/train/javascript
  // Учитывая два целочисленных массива, где второй массив является перетасованной копией первого массива с 
  // одним отсутствующим элементом, найдите отсутствующий элемент.
  
  // Обратите внимание, что в массивах могут быть дубликаты, поэтому проверка наличия числового значения в одном, 
  // а не в другом, не является допустимым решением.
  
  // find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
  // find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8
  // В первом массиве всегда будет хотя бы один элемент.
  function findMissing(arr1, arr2) {
  
  //return arr1.reduce( (s, el) => s + el, 0) - arr2.reduce( (s, el) => s + el, 0);
  
  // let index;
  // for (let i = 0; i < arr1.length; i++) {
  //   index = arr2.indexOf(arr1[i]);
  //   if (index > -1) {
  //     arr2.splice(index, 1);
  //   } else {
  //     return arr1[i];
  //   }
  // }
  
    // let a1 = arr1.sort();
    // let a2 = arr2.sort();
    // for (let i = 0; i < a1.length; i++) {
    //   if (a1[i] !== a2[i]) {
    //     return a1[i];
    //   }
    // }
  
    return arr1.filter(e => !arr2.includes(e))[0];
   }
  //console.log(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]));
  //console.log(findMissing([1, 2, 2, 3], [1, 2, 3]));
  
  


  //https://www.codewars.com/kata/get-the-mean-of-an-array/train/javascript
  
  // Конец учебного года, судьбоносный момент вашей школьной успеваемости. Средние должны быть 
  // рассчитаны. Все студенты подходят к вам и умоляют посчитать для них их средний балл. Легко ! 
  // Вам просто нужно написать сценарий.
  
  // Возвращение в среднем данного массива округляется вниз до ближайшего целого числа.
  
  // Массив никогда не будет пустым.
  
  function getAverage(marks){
  //return Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length);
  
  let out = 0;
  for (const average of marks) {
    out += average;
  }
  return Math.floor(out / marks.length);
  }
  //console.log(getAverage([1,2,3,4,5,]));
  
  
  

  //https://www.codewars.com/kata/reversed-sequence/javascript
  
  // Создайте функцию, которая возвращает массив целых чисел от n до 1 где n>0.
  
  // Пример: n = 5 >> [5,4,3,2,1]
  
  const reverseSeq = n => {
    let out = [];
    for (let i = n; i > 0; i--) {
        out.push(i);
    }
  return out;
  
  //return Array(n).fill(0).map((_, i) => n - i );
  }
  //console.log(reverseSeq(5));
  
  
  

  // https://www.codewars.com/kata/students-final-grade/javascript
  // Создайте функцию finalGrade, которая вычисляет итоговую оценку студента в зависимости от двух параметров: 
  // оценки за экзамен и количества выполненных проектов.
  
  // Эта функция должна принимать два аргумента: экзамен - оценка за экзамен (от 0 до 100); проекты - количество 
  // реализованных проектов (от 0 и выше);
  
  // Эта функция должна возвращать число (итоговая оценка). Есть четыре типа итоговых оценок:
  
  // 100, если оценка за экзамен больше 90 или количество выполненных проектов больше 10.
  // 90, если оценка за экзамен больше 75 и количество выполненных проектов не менее 5.
  // 75, если оценка за экзамен больше 50 и количество выполненных проектов не менее 2.
  // 0, в остальных случаях
  // Примеры:
  
  // finalGrade(100, 12);  // 100
  // finalGrade(99, 0);    // 100
  // finalGrade(10, 15);   // 100
  
  // finalGrade(85, 5);    // 90
  
  // finalGrade(55, 3);    // 75
  
  // finalGrade(55, 0);    // 0
  // finalGrade(20, 2);    // 0
  // * Используйте операторы сравнения и логические операторы.
  
  function finalGrade(exam, projects) {
    if (exam > 90 || projects > 10) {
      return 100;
    } else if (exam > 75 && projects >= 5) {
      return 90;
    } else if (exam > 50 && projects >= 2) {
      return 75;
    } else {
      return 0;
    }
  }
  //console.log(finalGrade(99, 0));
  //console.log(finalGrade(20, 2));
  
  
  

  // https://www.codewars.com/kata/print-a-rectangle-using-asterisks/train/javascript
  // Напишите метод, который с двумя аргументами width и height возвращает строку, представляющую прямоугольник 
  // с этими размерами.
  
  // Прямоугольник должен быть заполнен пробелами, а его границы должны состоять из звездочек ( *).
  
  // Например, такой звонок:
  
  // getRectangleString(3, 3);
  // Должен вернуть следующую строку:
  
  // ***
  // * *
  // ***
  // Завершите каждую строку строки (включая последнюю) комбинацией возврата каретки и перевода строки.
  
  // Примечание: вы можете предположить, что ширина и высота всегда будут больше нуля.
  
  function getRectangleString(w, h) {
    let hole = '';
  
    for (let i = 2; i < h; i++) {
      if (w > 1) {
        hole += `*${' '.repeat(w - 2)}*\r\n`;
      }
    }
    if (h > 1) {
      return `${'*'.repeat(w)}\r\n` + hole + `${'*'.repeat(w)}\r\n`;
    } else {
      return `*\r\n`;
    }
  }
  //console.log(getRectangleString(1, 1))
  
  
  

  // https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e
  // Ваша задача - просуммировать различия между последовательными парами в массиве в порядке убывания.
  // Например: sumOfDifferences([2, 1, 10]) возврат 9
  // В порядке убывания: [10, 2, 1]
  // Сумма: (10 - 2) + (2 - 1) = 8 + 1 = 9
  // Если массив пуст или в массиве только один элемент, результат должен быть 0(Ничего в Haskell).
  
  function sumOfDifferences(arr) {
    // let sum = 0;
    // const sorted = arr.sort((a, b) => b - a);
    // for (let i = 1; i < sorted.length; i++) {
    //   sum += sorted[i-1] - sorted[i];
    // }
    // return sum;
  
    return arr.sort((a, b) => b - a).map((e, i) => e - arr[i + 1] || 0).reduce((a, b) => a + b, 0);
  }
  //console.log(sumOfDifferences([2, 1, 10]));
  
  
  

  // https://www.codewars.com/kata/5583090cbe83f4fd8c000051
  // Преобразование числа в перевернутый массив цифр
  // Учитывая случайное неотрицательное число, вы должны вернуть цифры этого числа в массиве в обратном порядке.
  
  // Пример:
  // 348597 => [7,9,5,8,4,3]
  
  function digitize(n) {
    return n.toString().split('').map(Number).reverse();
  }
  //console.log(digitize(35231));
  
  

  
  // https://www.codewars.com/kata/576bb71bbbcf0951d5000044
  // Дан массив целых чисел.
  // Вернуть массив, где первый элемент - это количество положительных чисел, а второй элемент - сумма отрицательных чисел.
  // Если входной массив пуст или равен нулю, вернуть пустой массив.
  // пример
  // Для ввода [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]вы должны вернуться [10, -65].
  
  function countPositivesSumNegatives(input) {
  
    if (input == null || input.length == 0) {
      return [];
    } 
    
    const positive = input.filter(e => e > 0).length;
    const negative = input.filter(e => e < 0).reduce((a, b) => a + b, 0);
    
    return [positive, negative];
  }
  //console.log(countPositivesSumNegatives([0]));
  
  
  
  
  // https://www.codewars.com/kata/filter-out-the-geese/javascript
  // Напишите функцию gooseFilter/ goose-filter/ goose_filter/ GooseFilter, которая принимает в качестве аргумента массив 
  // строк и возвращает отфильтрованный массив, содержащий те же элементы, но с удаленными «гусями».
  
  // Гуси - это любые строки в следующем массиве, который предварительно заполняется в вашем решении:
  
  // geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
  // Например, если этот массив был передан в качестве аргумента:
  
  // ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
  // Ваша функция вернет следующий массив:
  
  // ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
  // Элементы в возвращаемом массиве должны быть в том же порядке, что и в исходном массиве, переданном в вашу функцию, хотя 
  // и без «гусей». Обратите внимание, что все строки будут в том же регистре, что и предоставленные, и некоторые элементы 
  // могут повторяться.
  
  function gooseFilter (birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
    //return birds.filter(e => !geese.includes(e));
  
    let obj = {};
    for (const t of geese) {
      obj[t] = 0;
    }
    for (const t of geese) {
      obj[t]++;
    }
    return birds.filter(e => !obj[e]);
  }
  //console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));
  
  
  
  
  // https://www.codewars.com/kata/to-square-root-or-not-to-square-root/javascript
  // # В квадрат (корень) или не в квадрат (корень)
  
  // Напишите метод, который получит в качестве параметра целочисленный массив и будет обрабатывать каждое число из 
  // этого массива.
  // Верните новый массив с обработкой каждого числа входного массива следующим образом:
  
  // Если число имеет целочисленный квадратный корень, возьмите его, иначе возведите это число в квадрат.
  
  // [4,3,9,7,2,1] -> [2,9,3,49,4,1]
  // Входной массив всегда будет содержать только положительные числа и никогда не будет пустым или нулевым.
  
  // Входной массив изменять нельзя!
  
  // Получайте удовольствие от написания кода и, пожалуйста, не забудьте проголосовать и оценить это ката! :-)
  
  // Я также создал другие ката. Посмотрите, понравилось ли вам это ката!
  
  function squareOrSquareRoot(array) {
    const arr = [];
    for (const sq of array) {
      if (Number.isInteger(Math.sqrt(sq))) {
        arr.push(Math.sqrt(sq))
      } else {
        arr.push(sq**2)
      }
    }
  return arr;
    //return array.map(e => Number.isInteger(Math.sqrt(e)) ? Math.sqrt(e) : e ** 2);
  
  }
  //console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));
  
  
  
  
  // https://www.codewars.com/kata/count-by-x/javascript
  // Создайте функцию с двумя аргументами, которая вернет массив первых (n) кратных (x).
  
  // Предположим, что и данное число, и количество раз, которое нужно подсчитать, будут положительными 
  // числами больше 0.
  
  // Возвращает результаты в виде массива (или списка в Python, Haskell или Elixir).
  
  // Примеры:
  
  // countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
  // countBy(2,5) === [2,4,6,8,10]
  
  function multiples (n, x) {
    // const res = [];
    // for (let i = 1; i <= x; i++) {
    //   res.push(i * n)
    // }
    // return res;
  
    return Array(x).fill(0).map((_, i) => (i + 1) * n)
  }
  //console.log(multiples(2, 5));
  //console.log(multiples(1, 10));
  
  
  
  
  // https://www.codewars.com/kata/mumbling/train/javascript
  // На этот раз ни рассказа, ни теории. В приведенных ниже примерах показано, как писать функцию accum:
  
  // Примеры:
  
  // accum("abcd") -> "A-Bb-Ccc-Dddd"
  // accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
  // accum("cwAt") -> "C-Ww-Aaa-Tttt"
  // Параметр аккумулятора - это строка, состоящая только из букв от a..z и A..Z.
  
  function accum(s) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
      result += s[i].toUpperCase() + s[i].toLowerCase().repeat(i);
      if (i < s.length - 1) {
        result += '-'
      }
    }
    return result;
  
    //return s.split('').map((e, i) => e.toUpperCase() + e.toLowerCase().repeat(i)).join('-');
  }
  //console.log(accum("cwAt"));
  
  
  
  
  // https://www.codewars.com/kata/5545f109004975ea66000086?utm_source=newsletter
  // Создайте функцию , которая проверяет , является ли число n делится на два номера x И y . Все входные данные 
  // представляют собой положительные ненулевые цифры.
  // Examples:
  // 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
  // 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
  // 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
  // 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5
  
  function divisible(n, x, y) {
    // if (Number.isInteger(n/x) && Number.isInteger(n/y)) {
    //   return true;
    // } else {
    //   return false;
    // }
    return n % x === 0 && n % y === 0;
  }
  //console.log(divisible(3, 1, 3));
  //console.log(divisible(100, 5, 3));
  
  
  
  
  // https://www.codewars.com/kata/57faa6ff9610ce181b000028
  // Вы наткнулись на божественное удовольствие, которое дает владение собакой и садом. А теперь пора забрать все кр @ р! : D
  
  // Имея двумерный массив для представления вашего сада, вы должны найти и собрать все собачьи cr @ p - представленные 
  // символом '@'.
  
  // Вам также будет указано количество сумок, к которым у вас есть доступ (сумки), и вместимость сумки (крышка). Если нет 
  // сумок, вы не можете ничего забрать, поэтому можете не обращать внимания на кепку.
  
  // Вам нужно выяснить, достаточно ли у вас мощности, чтобы собрать все cr@p и снова очистить свой сад.
  
  // Если вы это сделаете, верните «Clean», иначе верните «Cr @ p».
  
  // Однако будьте осторожны - если ваша собака там ('D'), она становится очень обидчивой, когда за ней наблюдают. 
  // Если он там, вам нужно вернуть «Собака !!».
  
  // Например:
  // x =
  // [[_, _, _, _, _, _]
  // [_, _, _, _, @, _]
  // [@, _, _, _, _, _]]
  
  // мешки = 2, колпачок = 2
  // возврат -> «Чистый»
  
  function crap(x, bags, cap){
    // let count = 0;
    // for (const r of x) {
    //   for (const k of r) {
    //     if (k === "D") return "Dog!!";
    //     if (k === "@") count++;
    //   }
    // }
    // return count <= bags * cap ? "Clean" : "Cr@p";
  
    //const arr = [].concat(...x);
    const arr = x.flat();
    const crp = arr.filter(e => e === '@').length
    if (arr.includes('D')) {
      return "Dog!!";
    }
    return crp <= bags * cap ? "Clean" : "Cr@p";
    // if (crp > 0 && crp > bags * cap) {
    //   return "Cr@p";
    // }
    // if (crp <= bags * cap) {
    //   return "Clean";
    // }
  }
  //console.log(crap([['_','@','_','@'], ['_','@','@','@'], ['@','_','@', '_']], 3, 6));
  //console.log(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 1, 1));
  //console.log(crap([['_','_','_']], 0, 6));
  
  
  
  
  // https://www.codewars.com/kata/reverse-every-other-word-in-the-string/javascript
  // Переверните каждое второе слово в данной строке, затем вернуть строку. Отбросьте все начальные или конечные 
  // пробелы, убедившись, что между каждым словом есть ровно один пробел. Знаки препинания следует рассматривать 
  // так, как будто они являются частью слова в этом ката.
  
  function reverse(str){
    // const res = [];
    // const arr = str.trim().replace(/\s+/g, ' ').split(' ');
    // for (let i = 0; i < arr.length; i++) {
    //   if (i % 2 === 1) {
    //     res.push(arr[i].split('').reverse().join(''));
    //   } else {
    //     res.push(arr[i]);
    //   }
    // }
    // return res.join(' ');
  
    return str.trim().split(' ').map((e, i) => i % 2 ? e.split('').reverse().join('') : e).join(' ');
  }
  //console.log(reverse("I really don't like reversing strings!"));
  
  
  
  
  // https://www.codewars.com/kata/59fca81a5712f9fa4700159a
  // Учитывая неотрицательное целое число n, напишите функцию toBinary/, ToBinary которая возвращает это число в 
  // двоичном формате.
  
  // to_binary(1)  /* should return 1 */
  // to_binary(5)  /* should return 101 */
  // to_binary(11) /* should return 1011 */
  
  function toBinary(n){
    return +n.toString(2);
  }
  //console.log(toBinary(5));
  
  
  
  
  // https://www.codewars.com/kata/fake-binary/javascript
  // Учитывая строку цифр, вы должны заменить любую цифру ниже 5 на «0», а любую цифру от 5 и выше на «1». 
  // Верните полученную строку.
  
  function fakeBin(x){
    let result = '';
    for (let i = 0; i < x.length; i++) {
      result += x[i] < 5 ? 0 : 1;
    }
    return result;
  }
  //console.log(fakeBin('45385593107843568'));
  
  
  
  
  // https://www.codewars.com/kata/bit-counting/javascript
  // Напишите функцию, которая принимает на вход целое число и возвращает количество битов, равных единице в двоичном 
  // представлении этого числа. Вы можете гарантировать, что ввод неотрицательный.
  
  // Пример : двоичное представление 1234 is 10011010010, поэтому функция должна возвращать 5 в этом случае
  
  let countBits = function(n) {
    // let result = 0;
    // let binary = n.toString(2);
    // for (let i = 0; i < binary.length; i++) {
    //   if (binary[i] === '1') {
    //     result += +binary[i]
    //   }
    // }
    // return result;
  
    return n.toString(2).split('').reduce((a, b) => Number(a) + Number(b), 0);
  }
  //console.log(countBits(7));//3
  
  
  
  
  // https://www.codewars.com/kata/fix-string-case/javascript
  // В этом Кате вам будет предоставлена ​​строка, которая может содержать смешанные прописные и строчные буквы, 
  // и ваша задача - преобразовать эту строку либо только в нижний регистр, либо только в верхний регистр, на основе:
  
  // сделайте как можно меньше изменений.
  // если строка содержит равное количество прописных и строчных букв, преобразовать строку в строчные.
  // Например:
  
  // solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
  // solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
  // solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
  
  function solve(s){
    // let upp = '';
    // let low = '';
    // for (let i = 0; i < s.length; i++) {
    //   s[i] === s[i].toUpperCase() ? upp += s[i] : low += s[i]
    // }
    // return upp.length > low.length ? s.toUpperCase() : s.toLowerCase();
  
  
    let upp = 0;
    let low = 0;
    s.split('').map(e => e === e.toUpperCase() ? upp++ : low++);
    return upp > low ? s.toUpperCase() : s.toLowerCase();
  }
  //console.log(solve("CODe"));
  
  
  
  
  // https://www.codewars.com/kata/rgb-to-hex-conversion/javascript
  // Функция rgb не завершена. Завершите его так, чтобы передача десятичных значений RGB приводила к возврату шестнадцатеричного 
  // представления. Допустимые десятичные значения для RGB: 0 - 255. Любые значения, выходящие за пределы этого диапазона, должны 
  // быть округлены до ближайшего допустимого значения.
  
  // Примечание. Ваш ответ всегда должен состоять из 6 символов, сокращение с 3 здесь не работает.
  
  // Ниже приведены примеры ожидаемых выходных значений:
  
  // rgb(255, 255, 255) // returns FFFFFF
  // rgb(255, 255, 300) // returns FFFFFF
  // rgb(0,0,0) // returns 000000
  // rgb(148, 0, 211) // returns 9400D3
  
  function rgb(r, g, b) {
    const res = [];
    for (const item of Array.of(r, g, b)) {
      if (item <= 0) {
        res.push(0, 0)
      }
      if (item > 255) {
        res.push(255)
      }
      if (item < 16 && item > 0) {
        res.push(0, item)
      }
      else if (item > 0 && item <= 255) {
        res.push(item);
      }
    }
    return res.map(e => e.toString(16)).join('').toUpperCase();
  }
  //console.log(rgb(15,234,79));
  //console.log(rgb(0, 0, -20));
  
  
  
  
  // https://www.codewars.com/kata/5b76a34ff71e5de9db0000f2
  // В этом ката вам будет дана серия раз, когда срабатывает будильник. Ваша задача будет заключаться в определении 
  // максимального временного интервала между сигналами тревоги. Каждый будильник начинает звонить в начале 
  // соответствующей минуты и звонит ровно одну минуту. Время в массиве не в хронологическом порядке. Игнорируйте 
  // дублирование раз, если таковое имеется.
  
  // Например:
  // решить (["14:51"]) = "23:59". Если будильник сработает сейчас, он не сработает еще 23 часа 59 минут.
  // решить (["23:00", "04:22", "18:05", "06:24"]) == "11:40". Максимальный интервал, в течение которого 
  // будильник не сработает, составляет 11 часов 40 минут.
  // Во втором примере будильник срабатывает 4 раза в день.
  
  
  
  
  //Array
  
  // https://www.codewars.com/kata/calculate-average/train/javascript
  // Напишите функцию, которая вычисляет среднее значение чисел в данном списке.
  
  function find_average(array) {
    return array.reduce((acc, curr) => acc + curr / array.length, 0);
  }
  //console.log(find_average([1,2,3]));
  
  
  
  // https://www.codewars.com/kata/5768a693a3205e1cc100071f
  // У некоторых людей просто имя; у некоторых людей есть имя и фамилия, а у некоторых есть имя, отчество и фамилия.
  // Ваша задача - инициализировать отчество (если оно есть).
  // Примеры
  // 'Jack Ryan'                   => 'Jack Ryan'
  // 'Lois Mary Lane'              => 'Lois M. Lane'
  // 'Dimitri'                     => 'Dimitri'
  // 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
  
  function initializeNames(name){
    return name
      .split(' ')
      .map((e, i, arr) => arr.length > 2 && i > 0 && arr.length - 1 > i ? `${e[0]}.` : e)
      .join(' ')
  }
  //console.log(initializeNames('Alice Betty Catherine Davis'));
  //console.log(initializeNames('Jack Ryan'));
  //console.log(initializeNames('Lois Mary Lane'));
  
  
  
  
  // https://www.codewars.com/kata/57cc975ed542d3148f00015b
  // Вам будет предоставлен массив a и значение x. Все, что вам нужно сделать, это проверить, содержит ли 
  // предоставленный массив значение.
  // Массив может содержать числа или строки. X может быть любым.
  // Вернуть, true если массив содержит значение, false если нет.
  
  function check(a, x) {
    return a.includes(x)
  }
  //console.log(check([66, 101], 66));
  
  
  

  // https://www.codewars.com/kata/5594463eaf1701909c0000d4
  // Вам дан массив значений.
  // Просуммируйте каждое числовое значение в массиве и любые вложенные массивы (до любой глубины).
  // Игнорируйте все другие типы значений.
  
  function arraySum(arr) {
    let sum = 0;
      for(let i = 0; i < arr.length; i++){
          if(typeof arr[i] === "number"){
              sum += arr[i];
          }else if(Array.isArray(arr[i])){
              sum += arraySum(arr[i]);
          }
      }
      return sum;
  
    //return [].concat(...arr).filter(e => typeof e === 'number').reduce((prev, curr) => prev + curr, 0);
  }
  //console.log(arraySum([1, 2, [1, 2]]));
  
  
  
  
  // https://www.codewars.com/kata/59bd5dc270a3b7350c00008b
  // Мужчина с Запада пытается найти золото в реке. Для этого он пропускает ведро через почву реки, а затем проверяет, 
  // нет ли в ней золота. Однако он мог бы быть более продуктивным, если бы написал алгоритм, который сделает эту 
  // работу за него.
  // Итак, вам нужно проверить, есть ли в ведре золото, и если да, вернуть True/ true. Если нет, верните False/ false.
  
  function checkTheBucket(bucket){
    return bucket.includes('gold');
  }
  //console.log(checkTheBucket(["gold", "stone", "stone", "stone", "stone"]));
  
  
  
  
  // https://www.codewars.com/kata/525c1a07bb6dda6944000031
  // Это простой поворот к примеру ката (предоставлен Codewars, когда вы учитесь создавать свои собственные ката).
  // Добавьте в массив значение «codewars» websites/ Websites1000 раз.
  // var websites = []
  
  // var websites = [];
  
  // for (let i = 0; i < 1000; i++) {
  //   websites.push('codewars');
  // }
  // console.log(websites)
  
  
  
  
  
  // https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad
  // Для данного набора чисел верните аддитивное обратное для каждого числа. Каждый позитив становится негативом, 
  // а негатив становится позитивом.
  
  // invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
  // invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
  // invert([]) == []
  // Вы можете считать, что все значения целые. Не изменяйте входной массив / список.
  
  function invert(array) {
    return array.map(e => -e);
    //return array.map(e => Math.sign(e) === 1 ? -e : -e);
  }
  //console.log(invert([1, -2, 3, -4, 5]));
  //console.log(invert([0]));
  
  
  
  
  // https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118
  // Определите функцию, которая удаляет дубликаты из массива чисел и возвращает их в результате.
  // Порядок следования должен оставаться неизменным.
  
  function distinct(a) {
    return [...new Set(a)];
  }
  //console.log(distinct([1,1,2]));
  
  
  
  
  // https://www.codewars.com/kata/56c22cdbe0c0f7cae2001789
  // Учитывая массив целых чисел, вычислите Среднее значение этих чисел.
  // Основная задача - написать для него самую короткую и компактную функцию.
  // Например: var a = [0, 1, 2];
  // avg (a) // вывод должен быть 1
  // Вывод функции также будет проверяться в тестах, однако самое важное - написать как можно более короткую функцию 
  // (длина кода <100). Ввод всегда будет действителен.
  
  function avg(a){
  return a.reduce((ac, e) => ac + e, 0) / a.length;
  }
  //console.log(avg([0, 1, 2, 3, 4]));
  
  
  
  
  // https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
  // У вас есть массив чисел.
  // Ваша задача - отсортировать нечетные числа по возрастанию, но четные числа должны быть на своих местах.
  // Ноль не является нечетным числом, и вам не нужно его перемещать. Если у вас есть пустой массив, вам нужно его вернуть.
  // пример
  // sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
  
  function sortArray(array) {
    const odd = array.filter(e => e % 2 === 1).sort((a, b) => a - b);
    return array.map(e => e % 2 === 1 ? odd.shift() : e);
  }
  //console.log(sortArray([5, 3, 2, 8, 1, 4]));
  
  
  
  
  // https://www.codewars.com/kata/array-array-array/train/javascript
  // Вам дан исходный массив из двух значений (x). Вы будете использовать это для подсчета очков.
  
  // Если оба значения в (x) являются числами, оценка является суммой двух. Если только один - это число, оценка 
  // будет этим числом. Если ни один из них не является числом, верните «Void!».
  
  // Как только у вас будет счет, вы должны вернуть массив массивов. Каждый подмассив будет таким же, как (x), 
  // а количество подмассивов должно быть равно баллу.
  
  // Например:
  
  // if (x) == ['a', 3] вы должны вернуть [['a', 3], ['a', 3], ['a', 3]].
  
  function explode(x){
    if (x.every(e => typeof e === 'string')) {
      return 'Void!';
    }
    if (x.every(e => typeof e === 'number')) {
      return Array(x.reduce((acc, curr) => acc + curr, 0)).fill(x);
    }
    return Array(x.reduce((acc, curr) => typeof curr === 'number' ? curr : acc)).fill(x);
  
    // const n = x.filter(Number).reduce((s, e) => s + e, 0);
    // return n ? Array(n).fill(x) : 'Void!';
  }
  //console.log(explode(['a', 3]));
  
  
  
  
  // https://www.codewars.com/kata/create-four-letter-birding-codes-from-bird-names/javascript
  // В мире птицеводства существуют четырехбуквенные коды общепринятых названий птиц. Эти коды создаются по 
  // нескольким простым правилам:
  
  // Если в названии птицы есть только одно слово, код берет первые четыре буквы этого слова.
  // Если имя состоит из двух слов, код принимает первые две буквы каждого слова.
  // Если имя состоит из трех слов, код создается путем взятия первой буквы из первых двух слов и первых двух букв 
  // из третьего слова.
  // Если имя состоит из четырех слов, в коде используется первая буква из всех слов.
  // (Есть и другие способы создания кодов, но это Ката будет использовать только четыре правила, перечисленные выше)
  
  // Завершите функцию, которая принимает массив строк общих имен птиц из Северной Америки, и создайте коды для этих 
  // имен на основе правил выше. Функция должна возвращать массив кодов в том же порядке, в котором были представлены 
  // имена входов.
  
  // Дополнительные соображения:
  
  // Четырехбуквенные коды в возвращаемом массиве должны быть ПРОПИСНЫМИ.
  // Если в общем имени есть дефис / тире, его следует рассматривать как пробел.
  // пример
  // Если входной массив: ["Black-Capped Chickadee", "Common Tern"]
  
  // Возвращаемый массив будет: ["BCCH", "COTE"]
  
  function birdCode(arr){
  
    const array = arr.map(e => e.replace(/-/g, ' ').split(' '));
  return array.map(e => {
    if (e.length === 1) {
      return (e[0].slice(0, 4)).toUpperCase();
    }
    if (e.length === 2) {
      return (e[0].slice(0, 2) + e[1].slice(0, 2)).toUpperCase();
    }
    if (e.length === 3) {
      return (e[0].slice(0, 1) + e[1].slice(0, 1) + e[2].slice(0, 2)).toUpperCase();
    }
    if (e.length === 4) {
      return (e[0].slice(0, 1) + e[1].slice(0, 1) + e[2].slice(0, 1) + e[3].slice(0, 1)).toUpperCase();
    }
  })
  }
  //console.log(birdCode(["Red-Bellied Woodpecker", "Dark-Eyed-Junco"]));
  
  
  
  
  // https://www.codewars.com/kata/string-reordering/javascript
  // На входе будет массив словарей.
  // Возвращает значения в виде предложения, разделенного строками, в порядке их целочисленного эквивалента 
  // (в порядке возрастания).
  // Ключи не повторяются, а их диапазон равен -999 < key < 999. Ключи и значения словарей всегда будут строками 
  // и всегда не будут пустыми.
  // пример
  // Input:
  // List = [
  //         {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
  //         {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
  //        ]
  
  // Output:
  // 'Vatsan took his dog for a spin'
  
  function sentence(List) {
    // return List
    //   .sort((a, b) => Object.keys(a)[0] - Object.keys(b)[0])
    //   .map(e => Object.values(e)[0])
    //   .join(' ')
  
    return List
      .map(e => Object.entries(e)[0])
      .sort((a, b) => a[0] - b[0])
      .map(e => e[1])
      .join(' ');
  }
  //console.log(sentence([{'4': 'dog' }, {'2': 'took'}, {'3': 'his'}, {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}]));
  
  
  
  
  // https://www.codewars.com/kata/arrays-similar/javascript
  // Напишите функцию, которая определяет, похожи ли переданные массивы. Подобные означает, что они содержат 
  // одинаковые элементы и одинаковое количество вхождений элементов.
  
  // var arr1 = [1, 2, 2, 3, 4],
  //     arr2 = [2, 1, 2, 4, 3],
  //     arr3 = [1, 2, 3, 4],
  //     arr4 = [1, 2, 3, "4"]
  
  // arraysSimilar(arr1, arr2); // Should equal true
  // arraysSimilar(arr2, arr3); // Should equal false
  // arraysSimilar(arr3, arr4); // Should equal false
  
  function arraysSimilar(arr1, arr2) {
    if (arr1.length === arr2.length) {
      return arr1.sort((a, b) => a - b).every((e, i) => e === arr2.sort((a, b) => a - b)[i]);
    } else {
      return false;
    }
  }
  //console.log(arraysSimilar([1, 2, 2, 3, 4], [2, 1, 2, 4, 3]));
  //console.log(arraysSimilar([2, 1, 2, 4, 3], [1, 2, 3, 4]));
  //console.log(arraysSimilar([1, 2, 3, 4], [1, 2, 3, "4"]));
  
  
  
  
  // https://www.codewars.com/kata/a-gift-well-spent/javascript
  // Примечание. Это ката было вдохновлено « Кредитом магазина» GCJ 2010 , где также необходимо проанализировать 
  // фактический ввод. Если вы решили это ката, попробуйте и это. Обратите внимание, что в версии GCJ всегда есть 
  // решение, а в этой ката - нет.
  
  // Сказка
  // У вас есть подарочная карта для местного магазина. У него есть кредит, который вы можете использовать для покупки 
  // вещей, но его можно использовать только для двух предметов, и любой кредит, который вы не используете, теряется. 
  // Вы хотите что-то для себя и друга. Следовательно, вы хотите купить два предмета, которые в сумме составляют полную 
  // стоимость подарочной карты.
  
  // Задача
  // Вы получите стоимость подарочной карты C и конечный список значений предметов. Вы должны вернуть пару индексов, 
  // которые соответствуют значениям, которые в сумме составляют C:
  
  // buy(2,[1,1])       = [0,1]
  // buy(3,[1,1])       = null
  // buy(5,[5,2,3,4,5]) = [1,2]
  // Индексы начинаются с 0. Первый индекс всегда должен быть меньше второго. Если существует несколько решений, 
  // верните минимум (лексикографически):
  
  // buy(5,[1,2,3,4,5]) = [0,3] // the values at [1,2] also adds up to five, but [0,3] < [1,2]
  
  var buy = function(x, arr){
  let res = null;
  const array = [];
  for (let i = 0; i < arr.length; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[i] + arr[k] === x) {
        array.push([i, k]);
        res = array[0]
      } 
    }
  }
  return res;
  
  // for (let i = 0; i < arr.length; i++) {
  //   for (let k = i + 1; k < arr.length; k++) {
  //     if (arr[i] + arr[k] === x) {
  //       return [i, k]
  //     } 
  //   }
  // }
  // return null;
  };
  //console.log(buy(5, [1,2,3,4,5]));
  
  
  
  
  // https://www.codewars.com/kata/5aa1bcda373c2eb596000112
  // Задача
  // Учитывая в массив / список [] из п целых чисел , найти максимальную сумму триплетную в массиве без дупликации .
  // Ноты :
  // Размер массива / списка не менее 3 .
  // Номера массивов / списков могут быть смесью положительных, отрицательных и нулей .
  // Повторение чисел в массиве / списке могло произойти , Итак (дубликаты не учитываются при суммировании) .
  
  // Примеры ввода >> вывода
  // 1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)
  // Пояснение :
  // Как тройка, которая максимизирует сумму {6,8,3} по порядку, их сумма равна (17)
  
  // Примечание : повторы не учитывается при подведении , (т.е.) число добавляется только один раз .
  
  // 2- maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)
  // Пояснение :
  // Как тройка, которая максимизирует сумму {8, 6, 4} по порядку, их сумма равна (18) ,
  // Примечание : повторы не учитывается при подведении , (т.е.) число добавляется только один раз .
  // 3- maxTriSum ({-7,12,-7,29,-5,0,-7,0,0,29}) ==> return (41)
  // Пояснение :
  // Как тройка, которая максимизирует сумму {12, 29, 0} по порядку, их сумма равна (41) ,
  // Примечание : повторы не учитывается при подведении , (т.е.) число добавляется только один раз .
  
  function maxTriSum(numbers){
    return [...new Set(numbers)].sort((a, b) => b - a).reduce((acc, curr, i) => i < 3 ? acc + curr : acc, 0);
  }
  //console.log(maxTriSum([3,2,6,8,2,3]));
  
  
  
  
  // https://www.codewars.com/kata/abbreviate-a-two-word-name/javascript
  // Напишите функцию для преобразования имени в инициалы. Это ката состоит из двух слов с одним пробелом между ними.
  // На выходе должны быть две заглавные буквы с точкой, разделяющей их.
  // Должно получиться так:
  // Sam Harris => S.H
  // Patrick Feeney => P.F
  
  function abbrevName(name){
    return name.split(' ').map(e => e[0]).join('.').toUpperCase();
  }
  //console.log(abbrevName("Patrick Feenan"));
  
  
  
  
  // https://www.codewars.com/kata/a-needle-in-the-haystack/javascript
  // Вы можете найти иголку в стоге сена?
  // Напишите функцию, findNeedle()которая принимает array полный мусор, но содержит один"needle"
  // После того, как ваша функция найдет иглу, она должна вернуть сообщение (в виде строки), в котором говорится:
  
  // "found the needle at position "плюс index он нашел иглу, так что:
  
  // findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
  // должен вернуться "found the needle at position 5"
  
  function findNeedle(haystack) {
    const num = haystack.indexOf('needle');
    return "found the needle at position "+`${num}`;
  }
  //console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]));
  
  
  
  
  // https://www.codewars.com/kata/sort-and-star/train/javascript
  // Вам будет дан вектор строк. Вы должны отсортировать его в алфавитном порядке (с учетом регистра и на основе 
  //   значений ASCII символов), а затем вернуть первое значение.
  
  // Возвращаемое значение должно быть строкой и содержать "***"каждую букву.
  
  // Вы не должны удалять или добавлять элементы из / в массив.
  
  function twoSort(s) {
    // let res = '';
    // const first = s.sort()[0];
    // for (let i = 0; i < first.length; i++) {
    //   res += first[i] + '***'
    // }
    // return res;
  
    return s.sort()[0].split('').join('***')
  }
  //console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])); //'b***i***t***c***o***i***n' 
  
  
  
  
  // https://www.codewars.com/kata/are-the-numbers-in-order/javascript
  // Цифры в порядке?
  // В этом Ката ваша функция получает в качестве входных данных массив целых чисел. Ваша задача определить, 
  // расположены ли числа в порядке возрастания. Говорят, что массив находится в порядке возрастания, если нет 
  // двух соседних целых чисел, где левое целое число превышает правое целое число по значению.
  
  // Для целей этого Ката вы можете предположить, что все входные данные действительны, то есть непустые массивы, 
  // содержащие только целые числа.
  
  // Обратите внимание, что массив из 1 целого числа автоматически считается отсортированным в порядке возрастания, 
  // поскольку все (ноль) смежные пары целых чисел удовлетворяют условию, что левое целое число не превышает значение 
  // правого целого числа. Пустой список считается вырожденным случаем и поэтому не будет тестироваться в этом Ката - 
  // не стесняйтесь поднимать проблему, если вы видите, что такой список тестируется.
  
  // Например:
  
  // inAscOrder([1,2,4,7,19]); // returns true
  // inAscOrder([1,2,3,4,5]); // returns true
  // inAscOrder([1,6,10,18,2,4,20]); // returns false
  // inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order
  // NB. Если ваше решение проходит все фиксированные тесты, но не проходит случайные тесты, убедитесь, что вы не 
  // изменяете входной массив.
  
  function inAscOrder(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let k = i + 1; k < arr.length; k++) {
         if (arr[i] > arr[k]) {
           return false;
         } 
      }
    }
    return true;
  }
  //console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]));
  
  
  
  
  // https://www.codewars.com/kata/5a5915b8d39ec5aa18000030
  // Учитывая два целочисленных массива, где второй массив является перетасованной копией первого массива с одним 
  // отсутствующим элементом, найдите отсутствующий элемент.
  
  // Обратите внимание, что в массивах могут быть дубликаты, поэтому проверка наличия числового значения в одном, 
  // а не в другом, не является допустимым решением.
  
  // find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
  // find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8
  // В первом массиве всегда будет хотя бы один элемент.
  
  function findMissing(arr1, arr2) {
    // let a1 = arr1.sort();
    // let a2 = arr2.sort();
    // for (let i = 0; i < a1.length; i++) {
    //   if (a1[i] !== a2[i]) {
    //     return a1[i];
    //   }
    // }
  
    return arr1.reduce((a, b) => a + b, 0) - arr2.reduce((a, b) => a + b, 0);
  }
  //console.log(findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4]));
  //console.log(findMissing([1, 2, 3], [1, 3]));
  
  
  
  
  //https://www.codewars.com/kata/5b39e3772ae7545f650000fc/train/javascript
  // Ваша задача - удалить все повторяющиеся слова из строки, оставив только отдельные (первые) записи слов.
  
  // Пример:
  // Вход:
  // 'альфа бета бета гамма гамма гамма дельта альфа бета бета гамма гамма дельта гамма'
  
  // Выход:
  // 'альфа-бета-гамма-дельта'
  
  function removeDuplicateWords(s) {
    // let str = s.split(' ');
    // let obj = {};
    // for (const t of str) {
    //   obj[t] = 0;
    // }
    // return Object.keys(obj).join(' ');
  
    let str = s.split(' ');
    return [...new Set(str)].join(' ');
  }
  //console.log(removeDuplicateWords('альфа бета бета гамма гамма гамма дельта альфа бета бета гамма гамма дельта гамма'))
  
  
  
  
  // https://www.codewars.com/kata/5601409514fc93442500010b
  // В вашем классе был тест, и вы его прошли. Поздравляю!
  // Но вы амбициозный человек. Вы хотите знать, лучше ли вы среднего ученика в вашем классе.
  // Вы получаете массив с результатами тестов ваших сверстников. Теперь посчитайте среднее значение и сравните свой 
  // результат!
  // Возвращайся, True если тебе лучше, иначе False!
  // Заметка:
  // Ваши баллы не входят в массив баллов вашего класса. Для вычисления среднего балла вы можете добавить свою точку к 
  // заданному массиву!
  
  function betterThanAverage(classPoints, yourPoints) {
    return classPoints.reduce((acc, curr) => acc + curr, 0) / classPoints.length < yourPoints;
  }
  //console.log(betterThanAverage([2, 8], 5));
  
  
  
  
  // https://www.codewars.com/kata/5899642f6e1b25935d000161
  // Вам даны два отсортированных массива, которые содержат только целые числа. Ваша задача найти способ объединить 
  // их в одно, отсортированное по возрастанию . Завершите функцию mergeArrays(arr1, arr2), где arr1и arr2- исходные 
  // отсортированные массивы.
  
  // Вам не нужно беспокоиться о проверке, поскольку arr1и arr2должны быть массивами с 0 или более целыми числами. Если 
  // оба arr1 и arr2 пусты, просто верните пустой массив.
  
  // Примечание: arr1 и arr2могут быть отсортированы в разном порядке. Также arr1и arr2могут иметь одинаковые целые числа. 
  // Удалите дубликаты в возвращенном результате.
  
  // Примеры
  // arr1 = [1, 2, 3, 4, 5];
  // arr2 = [6, 7, 8, 9, 10];
  // mergeArrays(arr1, arr2);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
  // arr3 = [1, 3, 5, 7, 9];
  // arr4 = [10, 8, 6, 4, 2];
  // mergeArrays(arr3, arr4);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
  // arr5 = [1, 3, 5, 7, 9, 11, 12];
  // arr6 = [1, 2, 3, 4, 5, 10, 12];
  // mergeArrays(arr5, arr6);  // [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
  // Удачного кодирования!
  
  function mergeArrays(arr1, arr2) {
    const arr = arr1.concat(arr2).sort((a, b) => a - b);
    return Array.from(new Set(arr));
  }
  //console.log(mergeArrays([1,3,5,7,9], [10,8,6,4,2]));
  
  
  
  //Math
  
  
  // https://www.codewars.com/kata/558f9f51e85b46e9fa000025
  // Найдите разницу между суммой квадратов первых n натуральных чисел (1 <= n <= 100)и квадратом их суммы.
  // пример
  // Например, когда n = 10:
  
  // Квадрат суммы чисел равен:
  
  // (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10) 2 = 55 2 = 3025
  
  // Сумма квадратов чисел равна:
  
  // 1 2 + 2 2 + 3 2 + 4 2 + 5 2 + 6 2 + 7 2 + 8 2 + 9 2 + 10 2 = 385
  
  // Следовательно, разница между квадратом суммы первых десяти натуральных чисел и суммой квадратов этих чисел 
  // составляет: 3025 - 385 = 2640
  
  function differenceOfSquares(n){
    let s1 = 0;
    let s2 = 0;
    for (let i = 1; i <= n; i++) {
        s1 += i;
        s2 += i**2;
    }
    return s1**2 - s2;
  }
  //console.log(differenceOfSquares(10));
  
  
  
  
  // https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
  // Создайте функцию (или напишите сценарий в Shell), которая принимает целое число в качестве аргумента и 
  // возвращает «Четный» для четных чисел или «Нечетный» для нечетных чисел.
  
  function even_or_odd(number) {
    if (number%2) {
      return 'Odd';
    }
    return 'Even';
  }
  //console.log(even_or_odd(2));
  //console.log(even_or_odd(3));
  
  
  
  
  // https://www.codewars.com/kata/55685cd7ad70877c23000102
  // В этом простом задании вам дается число, и вы должны сделать его отрицательным. Но, может быть, число уже 
  // отрицательное?
  
  // Пример:
  
  // makeNegative(1); // return -1
  // makeNegative(-5); // return -5
  // makeNegative(0); // return 0
  // makeNegative(0.12); // return -0.12
  // Ноты:
  
  // Число уже может быть отрицательным, и в этом случае никаких изменений не требуется.
  // Ноль (0) не проверяется для какого-либо конкретного знака. Отрицательные нули не имеют математического смысла.
  
  function makeNegative(num) {
    return Math.sign(num) === -1 ? num : -num;
  
    //return num > 0 ? -num : num;
  }
  //console.log(makeNegative(42));
  
  
  
  
  // https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
  // Первые пролеты века от года 1 до и включая 100 года , второй - от года до 101 включительно 200 года , и т.д.
  
  // Задача:
  // Учитывая год, верните век, в котором он находится.
  
  // Примеры ввода, вывода:
  // centuryFromYear(1705)  returns (18)
  // centuryFromYear(1900)  returns (19)
  // centuryFromYear(1601)  returns (17)
  // centuryFromYear(2000)  returns (20)
  
  function century(year) {
    return Math.ceil(year/100);
  }
  //console.log(century(2000));
  
  
  
  
  // https://www.codewars.com/kata/5a023c426975981341000014
  // Вам даны два внутренних угла (в градусах) треугольника.
  
  // Напишите функцию для возврата 3-го числа.
  
  // Примечание: будут проверяться только положительные целые числа.
  
  function otherAngle(a, b) {
    return 180 - (a + b);
  }
  //console.log(otherAngle(60, 60));
  
  
  
  
  // https://www.codewars.com/kata/5a3dd29055519e23ec000074
  // Первый входной массив - это ключ к правильным ответам на экзамен, например ["a", "a", "b", "d"]. Второй содержит 
  // отправленные студентом ответы.
  // Два массива не пусты и имеют одинаковую длину. Верните балл для этого массива ответов, дав +4 за каждый правильный 
  // ответ, -1 за каждый неправильный ответ и +0 за каждый пустой ответ, представленный как пустая строка (в C используется 
  //   пробел).
  // Если оценка < 0, вернуть 0.
  // Например:
  // checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
  // checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
  // checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
  // checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
  
  function checkExam(array1, array2) {
    const res = array1.map((e, i) => {
      if (e === array2[i]) {
        return 4;
      } else if (array2[i] === '') {
        return 0;
      }
      return -1;
    }).reduce((acc, curr) => acc + curr, 0);
  
    return res < 0 ? 0 : res;
  
    // const arr = array2.map((el,i)=> array1[i] === el ? 4 : el === '' ? 0 : -1)
    // return arr.reduce((a,b)=> a+b, 0) > 0 ? arr.reduce((a,b)=> a+b, 0) : 0
  
    // let result = arr2.reduce((c, el, i) => el.length ? (el == arr1[i] ? c+4 : c-1) : c, 0);
    // return result < 0 ? 0 : result;
   }
   //console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]));
  
  
  
  
  //  https://www.codewars.com/kata/552564a82142d701f5001228
  //  Нам нужно написать код, чтобы вернуть исходную цену продукта, возвращаемый тип должен быть десятичного типа, 
  //  а число должно быть округлено до двух десятичных знаков.
  // Нам сообщат продажную цену (цена со скидкой) и процент продажи, наша задача - выяснить первоначальную цену.
  // Например:
  // Учитывая, что товар продается по цене 75 долларов после применения скидки 25%, функция должна вернуть исходную цену 
  // этого товара до применения процента продажи, который, конечно же, (100 долларов США) округляется до двух десятичных 
  // знаков.
  // DiscoverOriginalPrice (75, 25) => 100.00M, где 75 - цена продажи (цена со скидкой), 25 - процент продажи, 
  // а 100 - исходная цена.
  
  function discoverOriginalPrice(discountedPrice, salePercentage){
    return Math.round((discountedPrice/((100 - salePercentage)/100))*100)/100;
  }
  //console.log(discoverOriginalPrice(75.75, 25));
  
  
  
  
  // https://www.codewars.com/kata/59752e1f064d1261cb0000ec
  // Из-за отсутствия обслуживания минутная стрелка упала с циферблата ратуши.
  
  // А поскольку местный совет потерял большую часть наших налоговых денег из-за мошенничества с электронной 
  // почтой в Нигерии, нет средств, чтобы правильно починить часы.
  
  // Вместо этого они просят программистов-добровольцев написать код, который определяет время, глядя только 
  // на оставшуюся часовую стрелку!
  
  // Что за сборище скряги!
  
  // Ты можешь сделать это?
  
  // Ката
  // Учитывая угол(в градусах) часовую стрелку, верните время в формате ЧЧ: ММ. Круглый вниз до ближайшей минуты.
  
  // Примеры
  // 12:00 = 0 градусов
  // 03:00 = 90 градусов
  // 06:00 = 180 градусов
  // 09:00 = 270 градусов
  // 12:00 = 360 градусов
  // Ноты
  // 0 <= угол <= 360
  
  var whatTimeIsIt = function(angle) {
    const h = Math.floor(angle/(360/12));
    const m = Math.floor(angle%(360/12)*2);
    const hh = (h < 10 ? '0' : '') + h === '00' ? 12 : (h < 10 ? '0' : '') + h;
    const mm = (m < 10 ? '0' : '') + m;
    return `${hh}:${mm}`;
  
    //[angle / 30 | 0 || 12, angle % 30 * 2 | 0].map(x => (x < 10 ? '0' : 0) + x).join(':');
  }
  //console.log(whatTimeIsIt(40));
  
  
  
  
  // https://www.codewars.com/kata/56b29582461215098d00000f
  // #Issue Похоже, какой-то хулиган-водопроводчик и его брат снова бегают вокруг и разрушают ваши сцены.
  // В pipesстадии подключающегося вашего уровня вместе должны быть исправлены до того как вы получите больше никаких жалоб. 
  // Каждая труба должна быть соединительной, поскольку уровни восходят, вы можете предположить, что каждое число в 
  // последовательности после первого индекса будет больше предыдущего и что дубликатов не будет.
  
  // #Task Учитывая список numbers, вернуть список таким образом, чтобы значения увеличивались на 1 для каждого индекса до 
  // максимального значения.
  // #Пример:
  // Input: 1,3,5,6,7,8
  
  // Output: 1,2,3,4,5,6,7,8
  
  function pipeFix(numbers){
    // let res = [];
    // let num = numbers.pop();
    // for (let i = numbers[0]; i <= num; i++) {
    //   res.push(i)
    // }
    // return res;
  
    return Array(numbers.pop() - numbers[0] + 1).fill().map((_, i) => numbers[0] + i);
  }
  //console.log(pipeFix([6,9]));
  
  
  
  
  // https://www.codewars.com/kata/57241e0f440cd279b5000829
  // Твоя работа
  // Найдите сумму всех кратных n ниже m
  
  // Иметь ввиду
  // n и m являются натуральными числами (положительными целыми числами)
  // m будет исключен из мультипликаторов
  // Примеры
  // sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
  // sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
  // sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
  // sumMul(4, -7)  ==> "INVALID"
  
  function sumMul(n, m){
    let res = [];
    if (m <= 0) {
      return 'INVALID';
    }
    for (let i = 1; i < m; i++) {
      res.push(i);
    }
    return res.filter(e => e % n === 0).reduce((acc, curr) => acc + curr, 0);
  
    // for(let i = 0; i < m; i+= n){
    //   res += i;}
    // return res;
    }
  //console.log(sumMul(2,9));
  //console.log(sumMul(0,0));
  
  
  
  
  // https://www.codewars.com/kata/59706036f6e5d1e22d000016
  // Если　a = 1, b = 2, c = 3 ... z = 26
  
  // потом l + o + v + e = 54
  
  // и f + r + i + e + n + d + s + h + i + p = 108
  
  // Так friendship вдвое сильнее love:-)
  
  // Ввод всегда будет в нижнем регистре и никогда не будет пустым.
  
  function wordsToMarks(string){
    // let al = {
    //   'a':1, 'b':2, 'c':3, 'd':4, 'e':5, 'f':6, 'g':7, 'h':8, 'i':9, 'j':10, 'k':11, 'l':12, 'm':13, 'n':14, 'o':15, 'p':16, 'q':17, 'r':18, 's':19, 't':20, 'u':21, 'v':22, 'w':23, 'x':24, 'y':25, 'z':26,
    // }
    // return string.split('').map(el => al[el]).reduce((acc, curr) => acc+curr, 0);
  
    // let sum = 0;
    // for (let i = 0; i < string.length; i++)
    //   sum += string.charCodeAt(i) - 96;
    // return sum;
  
    return string.split('').reduce((acc, curr) => acc+curr.charCodeAt()-96, 0);
  }
  //console.log(wordsToMarks("love"));
  
  
  
  
  // https://www.codewars.com/kata/sum-of-digits-slash-digital-root/javascript
  // Цифровой корень - это рекурсивная сумма всех цифр числа.
  
  // Учитывая n, возьмите сумму цифр n. Если это значение состоит из более чем одной цифры, продолжайте уменьшать 
  // таким образом, пока не будет получено однозначное число. Ввод будет неотрицательным целым числом.
  
  // Примеры
  //     16  -->  1 + 6 = 7
  //    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
  // 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
  // 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
  
  function digital_root(n) {
   const num = n.toString().split('').map(Number).reduce((acc, curr) => acc + curr, 0);
   return num < 10 ? num : digital_root(num);
  }
  //console.log(digital_root(942));
  
  
  
  
  // https://www.codewars.com/kata/55c211cce1ef691d9b000061
  // Вы пишете функцию, которая принимает два набора аргументов произвольной длины. Возвращаемое значение будет суммой 
  // значений всех аргументов.
  
  // Функция должна содержать как минимум 1 аргумент на набор.
  
  // calculate (1) (1) // должен вернуть 2
  // calculate (1,1) (1) // должен вернуть 3
  // calculate (1,1) (1, -1) // должен вернуть 2
  // Calculate (2,4) (3,7,1) // должен вернуть 17
  
  function calculate(...a) {
    return function (...b) {
      return [].concat(a, b).reduce((acc, el) => acc + el);
    }
  }
  //console.log(calculate(1,1) (1));
  
  
  
  
  // https://www.codewars.com/kata/56b71b1dbd06e6d88100092a
  // Это простое упражнение, чтобы понять функцию языка javascript, которая называется замыканием.
  
  // Функция buildFun вернет массив функций. Единственный параметр, принимаемый buildFun, - это количество элементов N 
  // возвращаемого массива.
  
  // Желаемый результат состоит в том, что при выполнении всех функций в массиве должно быть возвращено число от 0 до N.
  
  function buildFun(n){
    return Array(n).fill(n).map((_, i) => () => i);
  }
  
  
  
  
  // https://www.codewars.com/kata/586909e4c66d18dd1800009b
  // Чтобы выполнить это Ката, вам нужно создать функцию multiplyAll/, multiply_allкоторая принимает в качестве аргумента 
  // массив целых чисел. Эта функция должна возвращать другую функцию, которая принимает в качестве аргумента одно целое 
  // число и возвращает новый массив.
  
  // Возвращаемый массив должен состоять из каждого элемента из первого массива, умноженного на целое число.
  
  // Пример:
  
  // multiplyAll([1, 2, 3])(2) = [2, 4, 6];
  // Вы не должны изменять исходный массив.
  
  function multiplyAll(arr) {
    return function (num) {
      return arr.map(e => e*num);
    }
  }
  //console.log(multiplyAll([1, 2, 3])(1));
  
  
  
  
  // https://www.codewars.com/kata/5546ea9bddfc5c0c38000026
  // Кодируйте так быстро, как только можете!
  
  // Вам нужно создать функцию-конструктор с двумя методами (и только этими двумя) для возврата и увеличения счетчика, 
  // но счетчик не должен быть доступен напрямую извне функции.
  
  class Counter {
    constructor(){
    this.count=0;
    }
    increment(){
    return this.count+=1
    }
    check(){
    return this.count
    }
  };
  
  
  
  
  // https://www.codewars.com/kata/589e4d646642d144a90000d8
  // Создайте функцию, runningAverage()которая возвращает вызываемый объект функции. Обновите серию каждым 
  // заданным значением и вычислите текущее среднее значение.
  
  // rAvg = runningAverage();
  // rAvg(10) = 10.0;
  // rAvg(11) = 10.5;
  // rAvg(12) = 11;
  
  function runningAverage() {
    let res = [];
    return function(a) {
      res.push(a);
      return Math.round((res.reduce((acc, el) => acc+el, 0)/res.length)*100)/100;
    }
  }
  
  
  
  
  // https://www.codewars.com/kata/putting-the-flatmap-into-the-js/train/javascript
  // Метод flatMap () сначала отображает каждый элемент с помощью функции сопоставления, а затем сводит результат 
  // в новый массив. Он идентичен карте, за которой следует сглаживание глубины 1, но flatMap довольно часто бывает 
  // полезен, и объединение обоих в один метод немного более эффективно.
  
  // например: у нас есть массив arr = [0,1,2], у нас есть функция отображения (x => [x, x + 1]). мы ожидаем: 
  // arr.flatMap (x => [x, x + 1]) = [0, 1, 1, 2, 2, 3]
  
  Array.prototype.flatMap = (f) => {
    return this.reduce((acc, el) => acc.concat(f(el)), []);
  }
  //console.log([1].flatMap(x => [x, x-1, x+2]));
  

  // https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/javascript
  // Factorial
  function factorial(n){
    // if (n === 0) {
    //   return 1;
    // }
    // return n*factorial(n-1);

    //return n ? n*factorial(n-1) : 1;
    
    sum = 1;
    for (let i = 1; i <= n; i++) {
      sum*= i;
    }
    return sum;
  }
  //console.log(factorial(5));




  //https://www.codewars.com/kata/569512b7707bc1b88200002f
  //Fibonacci

  const fibonacci = n => {
    // if (n < 2) {
    //   return n;
    // }
    // return fibonacci(n - 1) + fibonacci(n - 2);

    return n < 2 ? n : fibonacci(n-1) + fibonacci(n-2);
  }
  //console.log(fibonacci(3))