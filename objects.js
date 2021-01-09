//200
// Дезоксирибонуклеиновая кислота (ДНК) - это химическое вещество, обнаруженное в ядре клетки и несущее 
// «инструкции» для развития и функционирования живых организмов.

// Если вы хотите узнать больше, http://en.wikipedia.org/wiki/DNA

// В цепочках ДНК символы «A» и «T» дополняют друг друга, как «C» и «G». У вас есть функция с одной 
// стороной ДНК (строка, кроме Haskell); вам нужно получить другую дополнительную сторону. Нить ДНК 
// никогда не бывает пустой или ДНК вообще не бывает (опять же, за исключением Haskell).

// Более похожие упражнения можно найти здесь http://rosalind.info/problems/list-view/ (источник)

// DNAStrand ("ATTGC") // return "TAACG"

// DNAStrand ("GTAT") // return "CATA" 

function DNAStrand(dna){
    let out = '';
    for (let i = 0; i < dna.length; i++) {
        // if (dna[i] === 'A') {
        //     out += 'T';
        // } else if (dna[i] === 'T') {
        //     out += 'A';
        // } else if (dna[i] === 'G') {
        //     out += 'C';
        // } else if (dna[i] === 'C') {
        //     out += 'G';
        // }
        switch (dna[i]) {
            case 'A':
                out += 'T'
                break;
            case 'T':
                out += 'A'
                break;
            case 'G':
                out += 'C'
                break;
            case 'C':
                out += 'G'
                break;
        }
    }
    return out;

//    const pairs = {'A':'T','T':'A','C':'G','G':'C'};
//    return dna.split('').map(v => pairs[v]).join('');
}
//console.log(DNAStrand ("ATTGC"));



//201
// Вы работаете на футбольном стадионе низшей лиги, и вам было поручено автоматизировать табло.
// Рефери назовет счет, вы уже настроили модуль распознавания голоса, который превращает голос судьи в 
// строку, но голосовой счет должен быть преобразован в пару для табло!

// например, "The score is four nil" должен вернуться[4,0]

// Счет любой команды находится в диапазоне от 0 до 9, и судья не будет каждый раз произносить одну и 
// ту же строку, например

// "new score: two three"

// "two two"

// "Arsenal just conceded another goal, two nil"
// Заметка:

// Please return an array

function scoreboard(string) {
    const pairs = {
        nil: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    };
    // let out = [];
    // let str = string.split(' ');
    // for (const key of str) {
    //     if (key in pairs)
    //         out.push(pairs[key]);
    //     }
    
    // return out;

    //[1,26,3,989,1234, 4, 6].filter(number => number > 10);


    return string
        .split(' ') // ['new', 'score:', 'two', 'three']
        .filter(key => key in pairs) // ['two', 'three']]
        .map(key => pairs[key]);
  }
  //console.log(scoreboard("new score: two three"));



//202
// Ваши коллеги смотрели через ваше плечо. Когда вы должны были делать свою скучную настоящую работу, 
// вы использовали рабочие компьютеры, чтобы разгромить бесконечные часы кодовых войн.

// На собрании команды ужасный, ужасный человек заявляет группе, что вы не работаете. Ты в беде. Вы 
// должны быстро оценить ощущения в комнате, чтобы решить, стоит ли вам собрать свои вещи и уйти.

// Учитывая объект (встречу), содержащий имена членов команды в качестве ключей и их рейтинг счастья 
// из 10 в качестве значения, вам необходимо оценить общий рейтинг счастья группы. Если <= 5, 
// вернуть «Get Out Now!». В противном случае верните 'Nice Work Champ!'.

// Рейтинг счастья - это общий балл / количество человек в комнате.

// Обратите внимание, что ваш босс находится в комнате (босс), его оценка стоит в два раза больше 
// номинала (но они по-прежнему всего лишь один человек!).

function outed(meet, boss){
    const arr = Object.values(meet);
    let scoreBoss = meet[boss];
    // for (const key in meet) {
    //     if (key === boss) {
    //         scoreBoss = meet[key];
    //     }
    // }
    const score = arr.reduce((a, e) => a + e, 0);
    const sum = (score+scoreBoss)/arr.length;
    
    return sum <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';

    // let names = Object.keys(meet)
    // let score = names.reduce((s,v) => s + meet[v], 0) + meet[boss]
    // return score / names.length > 5 ? 'Nice Work Champ!' : 'Get Out Now!'

}
//console.log(outed({'tim':2, 'jim':4, 'randy':0, 'sandy':5, 'andy':8, 'katie':6, 'laura':2, 'saajid':2, 'alex':3, 'john':2, 'mr':8}, 'john'));



//203
// У вас есть приложение для группового чата, но кто в сети !?

// Вы хотите показать своим пользователям, кто из их друзей в сети и доступен для общения!

// Учитывая входные данные массива объектов, содержащих имена пользователей, статус и время с момента 
// последнего действия (в минутах), создайте функцию для определения, кто есть online, offline и away.

// Если кто-то есть, online но он lastActivity был более 10 минут назад, они должны быть рассмотрены away.

// Входные данные имеют следующую структуру:

// [{
//   username: 'David',
//   status: 'online',
//   lastActivity: 10
// }, {
//   username: 'Lucy', 
//   status: 'offline',
//   lastActivity: 22
// }, {
//   username: 'Bob', 
//   status: 'online',
//   lastActivity: 104
// }]
// Соответствующий вывод должен выглядеть следующим образом:
// {
//     online: ['David'],
//     offline: ['Lucy'],
//     away: ['Bob']
//   }
//   Если, например, нет пользователей, online вывод должен выглядеть следующим образом:
  
//   {
//     offline: ['Lucy'],
//     away: ['Bob']
//   }
//   имя пользователя всегда будет a string, статус всегда будет либо 'online'или 'offline'
//   (перечисление UserStatus в C #), а lastActivity всегда будет number >= 0.
  
//   Наконец, если у вас нет друзей в вашем приложении чата, входом будет пустой массив []. 
//   В этом случае вы должны вернуть пустой объект {}(пустой словарь в C #).

const whosOnline = (friends) => {
    let out = {};

    const aw = friends
        .filter(e => e.lastActivity > 10 && e.status === 'online')
        .map(x => x.username); //как оставить else пустым или как писать в методах без else?
    const on = friends
        .map(e => e.lastActivity <= 10 && e.status === 'online' ? e.username : null)
        .filter(x => x !== null);
    const off = friends
        .map(e => e.status === 'offline' ? e.username : null)
        .filter(x => x !== null);

    if (on.length !== 0) {
        out.online = on;
    }
    if (off.length !== 0) {
        out.offline = off;
    }
    if (aw.length !== 0) {
        out.away = aw;
    }
    
    return out;
    }

// console.log(whosOnline([{
//     username: 'David',
//     status: 'online',
//     lastActivity: 10
//   }, {
//     username: 'Lucy',
//     status: 'offline',
//     lastActivity: 22
//   }, {
//     username: 'Bob',
//     status: 'online',
//     lastActivity: 104
//   }]));



//204
// Что такое анаграмма? Что ж, два слова являются анаграммами друг друга, если они оба содержат 
// одинаковые буквы. Например:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Напишите функцию, которая найдет все анаграммы слова из списка. Вам будет предоставлено два входа - 
// слово и массив со словами. Вы должны вернуть массив всех анаграмм или пустой массив, если их нет. 
// Например:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

function isAnagram(w1, w2) {
    let obj = {};
    for (const letter of w1) {
        obj[letter] = 0
    }
    for (const letter of w1) {
        obj[letter]++
        
    }
    for (const letter of w2) {
        if (letter in obj) {
            obj[letter]--
        } else {
            return false;
        }
    }

    console.log(obj);
    
    // obj = { a: 6, b: 2, c: 3 }
}

//isAnagrams('aaababccaca', 'aaaaaabbccc');

function anagrams(word, words) {
    return words.filter(el => isAnagrams(word, el));

    // let out = [];
    // let str = word.split("").sort().join("");
    //  for (const e of words) {
    //     if (e.split("").sort().join("") === str) {
    //         out.push(e)
    //     }
    // }
    // return out;

    // const str = word.split("").sort().join("");
    // return words.filter(e => e.split("").sort().join("") === str);

}
const isAnagrams = (w1, w2) => {
    if (w1.length !== w2.length) {
        return false;
    }
    const obj = {};
    for (const letter of w1) {
        if (obj[letter] === undefined) {
            obj[letter] = 1;
        } else {
            obj[letter]++;
        }
    }
    for (const letter of w2) {
        if (obj[letter]) {
            obj[letter]--;
        } else {
            return false;
        }
    }
    
    return true;
}

//console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));




//205
// Учитывая два числа и арифметический оператор (его имя в виде строки), верните результат двух чисел, 
// для которых используется этот оператор.

// a и b оба будут положительными целыми числами и a всегда будут первым числом в операции и b всегда 
// вторым.

// Четыре оператора - это «сложение», «вычитание», «деление», «умножение».

// Несколько примеров:

// arithmetic(5, 2, "add")      => returns 7
// arithmetic(5, 2, "subtract") => returns 3
// arithmetic(5, 2, "multiply") => returns 10
// arithmetic(5, 2, "divide")   => returns 2.5

// ArithmeticFunction.arithmetic(5, 2, "add")      => returns 7
// ArithmeticFunction.arithmetic(5, 2, "subtract") => returns 3
// ArithmeticFunction.arithmetic(5, 2, "multiply") => returns 10
// ArithmeticFunction.arithmetic(5, 2, "divide")   => returns 2

// Попробуйте сделать это без использования операторов if!

function arithmetic(a, b, operator) {
    const sum = {
        add: a+b,
        subtract: a-b,
        multiply: a*b,
        divide: a/b,
    }

    return sum[operator];
}
//console.log(arithmetic(5, 2, "add"));



//206
// Реализуйте функцию, которая принимает последовательность объектов и имя свойства и возвращает 
// последовательность, содержащую указанное свойство каждого объекта.

// Например:
// pluck([{a:1}, {a:2}], 'a')      // -> [1,2]
// pluck([{a:1, b:3}, {a:2}], 'b') // -> [3, undefined]

// Если у объекта отсутствует свойство, вы должны просто оставить его как undefined/None в выходном 
// массиве.

function pluck(objs, name) {

    return objs.map(e => e[name]);
}
//console.log(pluck([{a:1, b:3}, {a:2}], 'b'));



//207
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
    // return Object.keys(obj);

    let str = s.split(' ');
    return [...new Set(str)];
}
//console.log(removeDuplicateWords('альфа бета бета гамма гамма гамма дельта альфа бета бета гамма гамма дельта гамма'))



//208
// Напишите вызываемую функцию, findUnique которая возвращает единственный уникальный номер из массива.

// Все числа в несортированном массиве присутствуют дважды, кроме того, которое вам нужно найти. 
// Числа всегда являются допустимыми целыми числами от 1 до 2147483647, поэтому нет необходимости в проверке 
// типа и ошибок. Массив содержит хотя бы одно число и может содержать миллионы чисел. Поэтому убедитесь, 
// что ваше решение оптимизировано по скорости.

// пример
// Вход:
// [ 1, 8, 4, 4, 6, 1, 8 ]
// Ожидаемый результат:
// 6

function findUnique(numbers) {
    let obj = {};
    for (const t of numbers) {
      obj[t] = 0;
    }
    for (const t of numbers) {
      obj[t]++;
    }
    for (const t of numbers) {
      if (obj[t] === 1) {
        return t;
      }
    }

    //return numbers.reduce((l, r) => l ^ r, 0);
}
//console.log(findUnique([1, 8, 4, 4, 6, 1, 8]));


