// Для всех задач должны быть написаны тесты с учетом пограничных случаев.

// Task 1
// Реализовать функцию, которая принимает 2 параметра:
// 1. - строка произвольной длинны с набором произвольных слов;
// 'a big brown fox jumps over the lazy dog'
// 2. максимальное кол-во симоволов в слове.
// Функция должна вернуть массив из слов, которые не привышают заданную длинну либо [].??

export const returnArrayWithCondition = (strLine: string, maxChar: number) : Array<string> => {
    if (!isFinite(maxChar) || maxChar === null || maxChar < 0) throw new Error();
    if (strLine.length === undefined || strLine === null) throw new Error();
    let newStrLine = strLine.split(" ").map(word => word.trim().replace(" ", '').replace("-", ''));
    return newStrLine.filter(word => {
        if (word.length !== 0) {
            return word.length <= maxChar;
        }
    });
}

// Task 2
//  Функция должна вернуть массив из 3 самых больших чисел из входящего массива.
//  Пример
//      [] => []
//      [ '1', '2' ] => [ 2, 1 ]
//      [ '1', 2, '3' ] => [ 3, 2, 1 ]
//      [ '1',2,'3',4,'5','6',7,'8',9,10 ] => [ 10, 9, 8 ]
//      [ 10, '10', '10', 10 ] => [ 10, 10, 10 ]

export const returnBiggest = (arr: Array<any>) : Array<number> | [] => {
    for (const value of arr) {
        if (!(parseInt(value) > 0 && parseInt(value) < 100)) throw new Error();
    }
    if (arr.length === 0) return [];
    if (arr.length < 3) return arr.map(num => parseInt(num)).sort((a, b) => b - a);
    return arr.map(num => parseInt(num)).sort((a, b) => b - a).slice(0, 3);
}

// Task 3
//  Функция принимает массив чисел и преобразует его в массив сумм согласно примеру ниже:
//  f[n] = x[0] + x[1] + x[2] +...+ x[n]
//  or f[n] = f[n-1] + x[n]
//  Примеры :
//      [ 1, 1, 1, 1, 1 ]        => [ 1, 2, 3, 4, 5 ]
//      [ 10, -10, 10, -10, 10 ] => [ 10, 0, 10, 0, 10 ]
//      [ 0, 0, 0, 0, 0]         => [ 0, 0, 0, 0, 0]
//      [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 1, 3, 6, 10, 15, 21, 28, 36, 45, 55 ]

export const modifyArray = (arr: Array<number>): Array<number> => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!isFinite(arr[i]) || arr[i] === null) throw new Error();
        newArr.push(arr[i] + arr.slice(0, i).reduce((acc, number) => acc + number, 0))
    }
    return newArr;
}
// Task 4
// Реализовать Фукнцию, которая принимает массив разной вложенности и
// возвращает одномерный(плоский, одного уровня) массив элементов.
// [1,[1,2,[3,[4,5,[6],10]],8],9] => [1,1,2,3,4,5,6,10,8,9]
// Вывести его в консоль

// export const flatArray = (arr: Array<number>) : Array<number> => arr.flat(Infinity);

export const flatten = (arr: Array<number>): Array<number> => {
    return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}
