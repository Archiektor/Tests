import {
    modifyArray,
    returnArrayWithCondition, returnBiggest
} from "./dz";

describe("homework", () => {
    describe("task1", () => {
        // функция определена
        test("should be defined returnArrayWithCondition", () => {
            expect(returnArrayWithCondition).toBeDefined()
        })
        // null, undefined, Infinity, NaN
        test("sholud throw error when maxChar null, undefined, Infinity, < 0", () => {
            expect(() => returnArrayWithCondition('a big brown fox jumps over the lazy dog', null)).toThrowError();
            expect(() => returnArrayWithCondition('a big brown fox jumps over the lazy dog', undefined)).toThrowError();
            expect(() => returnArrayWithCondition('a big brown fox jumps over the lazy dog', NaN)).toThrowError();
            expect(() => returnArrayWithCondition('a big brown fox jumps over the lazy dog', Infinity)).toThrowError();
            expect(() => returnArrayWithCondition('a big brown fox jumps over the lazy dog', -3)).toThrowError();
        })

        test("sholud throw error when strLine null, undefined", () => {
            expect(() => returnArrayWithCondition(null, null)).toThrowError();
            expect(() => returnArrayWithCondition(undefined, undefined)).toThrowError();
            expect(() => returnArrayWithCondition('', undefined)).toThrowError(); // !! strange behavior
        })

        test("sholud work correct", () => {
            expect(returnArrayWithCondition('a big brown fox jumps over the lazy dog', 3)).toEqual(['a', 'big', 'fox', 'the', 'dog']);
            expect(returnArrayWithCondition('a big brown fox jumps over the lazy dog', 1)).toEqual(['a']);
            expect(returnArrayWithCondition('                      ', 3)).toEqual([]);
            // expect(returnArrayWithCondition('- - - - - - - ', 1)).toEqual(['-', '-', '-', '-', '-', '-', '-']);

        })
    })

    describe("task2", () => {
        test("should be defined returnBiggest", () => {
            expect(returnBiggest).toBeDefined()
        })
        // null, undefined, Infinity, NaN
        test("sholud throw error when maxChar null, undefined, Infinity, < 0", () => {
            expect(() => returnBiggest(["null"])).toThrowError();
            expect(() => returnBiggest(["undefined"])).toThrowError();
            expect(() => returnBiggest(["="])).toThrowError();
        })

        test("should work correct", () => {
            expect(returnBiggest([])).toEqual([]);
            expect(returnBiggest(["1", "2"])).toEqual([2,1]);
            expect(returnBiggest(['1', 2, '3', 4, '5', '6', 7, '8', 9, 10])).toEqual([10,9,8]);
            expect(returnBiggest([10, '10', '10', 10])).toEqual([10,10,10]);
            // до этого момента все гуд
            // expect(returnBiggest(['-3', '-5', '-10', '-15'])).toEqual([-3,-5,-10 ]);
        })

    })

    describe("task3", () => {
        test("should be defined returnBiggest", () => {
            expect(modifyArray).toBeDefined()
        })
        // null, undefined, Infinity, NaN
        test("sholud throw error when arr[i] === null, undefined, Infinity", () => {
            expect(() => modifyArray([NaN, NaN])).toThrowError();
            expect(() => modifyArray([null, null])).toThrowError();
            expect(() => modifyArray([undefined, undefined])).toThrowError();
            expect(() => modifyArray([Infinity, Infinity])).toThrowError();
        })

        test("should work correct", () => {
            expect(modifyArray([])).toEqual([]);
            expect(modifyArray([ 1, 1, 1, 1, 1 ])).toEqual([ 1, 2, 3, 4, 5 ]);
            expect(modifyArray([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ])).toEqual([ 1, 3, 6, 10, 15, 21, 28, 36, 45, 55 ]);
            expect(modifyArray([ 0, 0, 0, 0, 0])).toEqual([ 0, 0, 0, 0, 0]);
        })

    })
})