
console.log('lesson 2');

/*
const arr1: Array<number> = [1, 2, 3, 4, 5];

const arr2: Array<string> = ['vlad','petia','vasia'];
const arr3: Array<number | string> = [...arr1, 14, 10, ...arr2];

console.log(arr3);*/

// const [a, , b, ...rest] = arr1;

// Task 01
// Создать массив. Получить последний элемент массива.
//     1.    Без удаления этого элемента из массива.
//     2.    С удалением этого элемента из массива
//    Выведите массивы в консоль


// Task 02
// Создать массив любых элементов. Добавить элемент в конец массива.
//     1. Модифицировать текущий массив
//     2. Создать новый массив
//     Выведите массивы в консоль

// const enArr: Array<number> =  [1,2,3,4,5]
//
// const arr2 = enArr.push(10);
// const arr3 = [...enArr, 10];


// Task 03
//  Создать массив любых элементов. Вставить новый элемент под индексом 3.
//     1. Модифицировать текущий массив
//     2. Создать новый массив
//     Выведите массивы в консоль

// const enArr: Array<number> = [1, 2, 3, 4, 5];
//
// enArr.splice(3,0, 10);
// console.log(enArr);


// const result: Array<number> = [...enArr.slice(0, 3), 10, ...enArr.slice(3)];
// console.log(result);*!/
//
// Task 04 while, do while, for, for of, for in, forEach
//  Создать массив любых элементов.
//     Обойти элементы массива и вывести их в консоль.
//
// for Each не умеет ходить по empty/ undefined значениям
// for of позволяет ходить по empty/undefined
//
// const enArr = [1,2,3,4,5];
//
// enArr['vlad'] = 'vlad';
// // ходит по всем ключам
// for(const a in enArr){
//     console.log(enArr[a])
// }
// ходит только по итерируемым
// enArr.forEach(e => console.log(e));



// *
//  * Creates an array of integers from the specified start to end (inclusive)
//  *
//  * @param {number} start
//  * @param {number} end
//  * @return {array}
//  *
//  * @example
//  *     1, 5  => [ 1, 2, 3, 4, 5 ]
//  *    -2, 2  => [ -2, -1, 0, 1, 2 ]
//  *     0, 100 => [ 0, 1, 2, ..., 100 ]
//  *     3, 3   => [ 3 ]

// function getRange(start, end) {
//     const result: Array<number> = [];
//     for (let i = start; i <= end; i++) {
//         result.push(i)
//     }
//     return result;
// }
//
// console.log(getRange(1, 10));
//
// function getRange2(start, end, result = []) {
//     if (start > end) return result;
//     result = [...result, start]
//     return getRange2(start += 1, end, result)
// }
//
// console.log(getRange2(1,10))*!/
//
//
// // Task 05
// // Создать массив чисел в диапазоне от 0 до 100.
// //     Подсчитать и вывети сумму тех элементов, которые больше 50.
// const enArr: Array<number> = getRange(0, 100);
//
// function sumRange(enArr, condition = 0) {
//     const baseArr: Array<number> = enArr.slice(condition);
//     // console.log(baseArr);
//     function helper(baseArr, result= 0) {
//         if(!baseArr.length) return result;
//         result = result + baseArr.pop();
//         return helper(baseArr, result);
//     }
// }
//
// sumRange(enArr, 50);

// Task 06
// Создать массив строк. На основе этого массива создать строку –
//     объдинить все элементы массива, используя определенный разделитель.
/*
const str: Array<string> = ['a', 'b', 'c'];
console.log(str.join('-'));*/

// Task 07
// Создать массив чисел от 1 до 20 в случайном порядке.
//     Отcортировать массив по возрастанию. Вывести его в консоль.
//     Получить массив, отсортрованный в обратном порядке, и вывести его в консоль.

/*const enArr: Array<number> = [5, 2, 3, 17, 11, 1, 6, 8];

console.log(enArr.sort((a, b) => a - b))*/

// Task 08
// Создать массив [3, 0, -1, 12, -2, -4, 0, 7, 2]
//     На его основе создать новый массив [-1, -2, -4, 0, 0, 3, 12, 7, 2].
//     первая часть - отрицательные числа в том же порядке
//     вторая часть - нули
//     третья часть - положительные числа в том же порядке.

// const enArr: Array<number> = [3, 0, -1, 12, -2, -4, 0, 7, 2];

/*enArr.sort((a, b) => a - b)
console.log(enArr.sort((a, b) => a - b))*/

/*function mySort(enArr: Array<number>): Array<number> {
    let negative = [];
    let positive= [];
    let zero = [];

    for (let i = 0; i < enArr.length; i++) {
        if(enArr[i] < 0){
            negative.push(enArr[i])
        }
        if(enArr[i] === 0){
            zero.push(enArr[i])
        }
        if(enArr[i] > 0){
            positive.push(enArr[i])
        }
    }
    return [...negative, ...zero,...positive]
}

console.log(mySort(enArr));*/


// *7
//  * Sorts digit names
//  *
//  * @param {array} enArr
//  * @return {array}
//  *
//  * @example
//  *   [] => []
//  *   [ 'nine','one' ]                 => [ 'one', 'nine' ]
//  *   [ 'one','two','three' ]          => [ 'one','two', 'three' ]
//  *   [ 'nine','eight','nine','eight'] => [ 'eight','eight','nine','nine']
//  *   [ 'one','one','one','zero' ]     => [ 'zero','one','one','one' ]
// *
/*

/!*const enArr = ['five', 'one'];

const keys = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
}

const rusKeys = {
    ноль: 0,
    один: 1,
    два: 2,
    три: 3,
    четыре: 4,
    пять: 5,
}

function sortDigits(keys) {
    return function (arr) {
        return arr.sort(a,b => keys[a] - keys[b])
    }
}

console.log(sortDigits(keys)(enArr));*!/


// Task 09
//     1. Создайте массив styles с элементами "Jazz", "Blues".
//     2. Добавьте в конец значение "Rock-n-Roll".
//     3. Замените предпоследнее значение с конца на "Classics".
//     4. Удалите первый элемент из массива и выведите его в консоль.
//     5. Добавьте в начало два элемента со значениями "Rap" и "Reggae".
//     6. Выведите массив в консоль.


/!*
*
 * Returns the number of all falsy value in the specified array
 *
 * @param {array} enArr
 * @return {array}
 *
 * @example
 *  [] => 0
 *  [ 1, '', 3 ] => 1
 *  [ -1, 'false', null, 0 ] => 2
 *  [ null, undefined, NaN, false, 0, '' ]  => 6
*!/


// Task 10
//     Подсчитать в строке "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh"
//     отдельно количество букв r, k, t и вывести в консоль.


const str = "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh";

function getCounterChartInString(keys) {
    return function (str) {
        return str.split('').reduce((acc, char) => {
            if (acc.hasOwnProperty(char)) {
                acc[char] += 1;
                return {...acc, [char]: acc[char] + 1};
            } else {
                return acc
            }
        }, {keys})
    }
}

const res: { r: number, k: number, t: number } = getCounterChartInString({r: 0, k: 0, t: 0})(str);
console.log(res);


// Task 11
//     Получить из строки 'a big brown fox jumps over the lazy dog' массив слов,
//     который содержит элементы, длина которых не больше 3 символа.
//     Вывести массив в консоль.


// Task 12
//     Преобразовать многомерные массив в одномерный.
//     Вывести его в консоль


// * Generates an array of odd numbers of the specified length
// *    1 => [ 1 ]
//!*     2 => [ 1, 3 ]
//!*     5 => [ 1, 3, 5, 7, 9 ]

/!*
*1
 * Returns the doubled array - elements of the specified array are repeated twice using original order
 *
 * @param {array} enArr
 * @return {array}
 *
 * @example
 *    ['Ace', 10, true]  => ['Ace', 10, true,   'Ace', 10, true]
 *    [0, 1, 2, 3, 4, 5] => [0, 1, 2, 3, 4, 5,   0, 1, 2, 3, 4, 5]
 *    [] => []

*2
 * Returns an array of positive numbers from the specified array in original order
 *
 * @param {array} enArr
 * @return {array}
 *
 * @example
 *    [ 0, 1, 2, 3, 4, 5 ] => [ 1, 2, 3, 4, 5 ]
 *    [-1, 2, -5, -4, 0] => [ 2 ]
 *    [] => []

*3
 * Returns the array with strings only in the specified array (in original order)
 *
 * @param {array} enArr
 * @return {array}
 *
 * @example
 *    [ 0, 1, 'cat', 3, true, 'dog' ] => [ 'cat', 'dog' ]
 *    [ 1, 2, 3, 4, 5 ] => []
 *    [ 'cat, 'dog', 'raccon' ] => [ 'cat', 'dog', 'racoon' ]

*4
 * Removes falsy values from the specified array
 * Falsy values: false, null, 0, "", undefined, and NaN.
 *
 * @param {array} enArr
 * @return {array}
 *
 * @example
 *    [ 0, false, 'cat', NaN, true, '' ] => [ 'cat', true ]
 *    [ 1, 2, 3, 4, 5, 'false' ]         => [ 1, 2, 3, 4, 5, 'false' ]
 *    [ false, 0, NaN, '', undefined ]   => [ ]

*5
 * Transforms the numeric array to the according moving sum array:
 *     f[n] = x[0] + x[1] + x[2] +...+ x[n]
 *  or f[n] = f[n-1] + x[n]
 *
 * @param {array} enArr
 * @return {array}
 *
 * Example :
 *   [ 1, 1, 1, 1, 1 ]        => [ 1, 2, 3, 4, 5 ]
 *   [ 10, -10, 10, -10, 10 ] => [ 10, 0, 10, 0, 10 ]
 *   [ 0, 0, 0, 0, 0]         => [ 0, 0, 0, 0, 0]
 *   [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 1, 3, 6, 10, 15, 21, 28, 36, 45, 55 ]

*6
 * Returns the 3 largest numbers from the specified array
 *
 * @param {array} enArr
 * @return {array}
 *
 * @example
 *   [] => []
 *   [ 1, 2 ] => [ 2, 1 ]
 *   [ 1, 2, 3 ] => [ 3, 2, 1 ]
 *   [ 1,2,3,4,5,6,7,8,9,10 ] => [ 10, 9, 8 ]
 *   [ 10, 10, 10, 10 ] => [ 10, 10, 10 ]

*!/
*!/
*/
