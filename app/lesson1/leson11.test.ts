import {
    addOldToObject,
    changeTaskStatusById, filterType,
    fuzzbuzz,
    getDoneTask, journal, JournalI,
    ManI,
    startArray,
    TaskI,
    YearsOldType
} from "./lesson11";

describe("homework", () => {
    describe("task1", () => {
        // функция определена
        test("fuzzbuzz should be defined", () => {
            expect(fuzzbuzz).toBeDefined()
        })
        // null, undefined, Infinity, NaN
        test("throw an error if argument not a number", () => {
            expect(() => fuzzbuzz(null)).toThrowError();
            expect(() => fuzzbuzz(undefined)).toThrowError();
            expect(() => fuzzbuzz(NaN)).toThrowError();
            expect(() => fuzzbuzz(Infinity)).toThrowError();
        })
        test('if the argument is divide by 2 then return "Fuzz', () => {
            // to Equal делает глубокое сравнение
            expect(fuzzbuzz(2)).toEqual("Fuzz");
            expect(fuzzbuzz(4)).toEqual("Fuzz");
            expect(fuzzbuzz(8)).toEqual("Fuzz");
            expect(fuzzbuzz(10)).toEqual("Fuzz");
            expect(fuzzbuzz(10, 5, 7)).toEqual("Fuzz");
            expect(fuzzbuzz(30, 10, 9)).toEqual("Fuzz");
        })

        test('if the argument is divide by 3 then return "Buzz', () => {
            // to Equal делает глубокое сравнение
            expect(fuzzbuzz(3)).toEqual("Buzz");
            expect(fuzzbuzz(9)).toEqual("Buzz");
            expect(fuzzbuzz(15)).toEqual("Buzz");
            expect(fuzzbuzz(21)).toEqual("Buzz");
            expect(fuzzbuzz(28, 5, 7)).toEqual("Buzz");
            expect(fuzzbuzz(27, 10, 9)).toEqual("Buzz");

        })

        test('if the argument is divide by 3 and 2 then return "FuzzBuzz', () => {
            // to Equal делает глубокое сравнение
            expect(fuzzbuzz(6)).toEqual("FuzzBuzz");
            expect(fuzzbuzz(12)).toEqual("FuzzBuzz");
            expect(fuzzbuzz(18)).toEqual("FuzzBuzz");
            expect(fuzzbuzz(0)).toEqual("FuzzBuzz");
            expect(fuzzbuzz(30, 5, 6)).toEqual("FuzzBuzz");
            expect(fuzzbuzz(35, 5, 7)).toEqual("FuzzBuzz");
        })

        test('if the argument isn"t divide by 3 and 2 then return ', () => {
            // to Equal делает глубокое сравнение
            expect(fuzzbuzz(7)).toEqual("");
            expect(fuzzbuzz(-1)).toEqual("");
            expect(fuzzbuzz(1)).toEqual("");
            expect(fuzzbuzz(5)).toEqual("");
            expect(fuzzbuzz(5, 2, 7)).toEqual("");
            expect(fuzzbuzz(-7, 3, 8)).toEqual("");
        })
    })


    describe("task2", () => {
        it("addOldToObject should be defined", () => {
            expect(addOldToObject).toBeDefined();
        })

        it("should return new Array not equal to income array", () => {
            // проверка ссылок для сравнения массива/обьекта
            expect(addOldToObject(startArray)).not.toBe(startArray);
        })


        it("if age has invalid data addOldToObject must throw an error", () => {
            const testData: Array<ManI> = [{
                name: "vlad",
                age: undefined,
            },]
            expect(() => addOldToObject(testData)).toThrowError();

            const testData1: Array<ManI> = [{
                name: "vlad",
                age: NaN,
            },]
            expect(() => addOldToObject(testData1)).toThrowError();

            const testData2: Array<ManI> = [{
                name: "vlad",
                age: null,
            },]
            expect(() => addOldToObject(testData2)).toThrowError();

            const testData3: Array<ManI> = [{
                name: "vlad",
                age: Infinity,
            },]
            expect(() => addOldToObject(testData3)).toThrowError();

            const testData4: Array<ManI> = [{
                name: "vlad",
                age: -1,
            },]
            expect(() => addOldToObject(testData4)).toThrowError();

            const testData5: Array<ManI> = [{
                name: "vlad",
                age: 130,
            },]
            expect(() => addOldToObject(testData5)).toThrowError();
        })

        it('if man.years < 18 addOldToObject must add field with value "young"', () => {
            const testData: Array<ManI> = [{
                name: "vlad",
                age: 5,
            },]
            const resultData: Array<ManI> = [{
                name: "vlad",
                age: 5,
                yearsOld: YearsOldType.young,
            }]
            // toContainEqual - обьект с заданными полями есть в массиве
            expect(addOldToObject(testData)).toEqual(resultData);
        })

        it('if man.years > 60 addOldToObject must add field with value "old"', () => {
            const testData: Array<ManI> = [{
                name: "vlad",
                age: 65,
            },]
            const resultData: Array<ManI> = [{
                name: "vlad",
                age: 65,
                yearsOld: YearsOldType.old,
            }]
            // toContainEqual - обьект с заданными полями есть в массиве
            expect(addOldToObject(testData)).toEqual(resultData);
        })

        it('if 17 < age < 61 addOldToObject must add field with value "adult"', () => {
            const testData: Array<ManI> = [{
                name: "vlad",
                age: 18,
            },]
            const resultData: Array<ManI> = [{
                name: "vlad",
                age: 18,
                yearsOld: YearsOldType.adult,
            }]
            // toContainEqual - обьект с заданными полями есть в массиве
            expect(addOldToObject(testData)).toEqual(resultData);

            const testData2: Array<ManI> = [{
                name: "vlad",
                age: 60,
            },]
            const resultData2: Array<ManI> = [{
                name: "vlad",
                age: 60,
                yearsOld: YearsOldType.adult,
            }]
            // toContainEqual - обьект с заданными полями есть в массиве
            expect(addOldToObject(testData2)).toEqual(resultData2);
        })

        it('should work correct addOldToObejct with startArray', () => {
            const resultData: Array<ManI> = [
                {
                    name: "vlad",
                    age: 87,
                    yearsOld: YearsOldType.old,
                },
                {
                    name: "eugene",
                    age: 55,
                    yearsOld: YearsOldType.adult,
                },
                {
                    name: "dima",
                    age: 18,
                    yearsOld: YearsOldType.adult,
                },
                {
                    name: "ira",
                    age: 3,
                    yearsOld: YearsOldType.young,
                }
            ];
            expect(addOldToObject(startArray)).toEqual(resultData);
        })

    })

    describe("task3", () => {
        it("should be defined getDoneTask ", () => {
            expect(getDoneTask).toBeDefined()
        })
        it('should return correct result', () => {
            const resultData:TaskI = {
                id: '2a',
                isDone: true,
                title: 'Learn useEffect',
            };
            expect(getDoneTask(journal)).toEqual([resultData]);
            expect(getDoneTask(journal).length).toEqual(1);
        })

        it('should work correct', () => {
            changeTaskStatusById(journal, "1a", "1a");
            const resultData: Array<TaskI> = [
                {
                    id: "2a",
                    isDone: true,
                    title: "Learn hooks",
                },
                {
                    id: "2a",
                    isDone: true,
                    title: "Learn useEffect",
                }
            ];
            expect(getDoneTask(journal)).toEqual(resultData);
            expect(getDoneTask(journal).length).toEqual(2);
        })
    })


    describe("task4", () => {
        let copy: JournalI;
        beforeEach(() => {
            copy = JSON.parse(JSON.stringify(journal));
        })
        it("changeTaskStatusById should be defined", () => {
            expect(changeTaskStatusById).toBeDefined()
        })

        it('should not be equal', () => {
            changeTaskStatusById(copy, "1a", "1a");
            expect(copy).not.toEqual(journal) ;
        })

        it('should not mutate', () => {
            changeTaskStatusById(copy, "sdfsd", "wewew")
            expect(copy).toEqual(journal) ;
        })

        it('should work correct', () => {
            const result: JournalI = {
                title: "first journal",
                id: "1cvlasd",
                todoLists: [
                    {
                        title: "Learn React",
                        id: "1a",
                        filter: filterType.all,
                        taskList: [
                            {
                                id: '1a',
                                isDone: true,
                                title: 'Learn hooks',
                            },
                            {
                                id: '2a',
                                isDone: true,
                                title: 'Learn useEffect',
                            },
                            {
                                id: '3a',
                                isDone: false,
                                title: 'Learn Redux',
                            }
                        ]

                    }
                ]
            };
            changeTaskStatusById(copy, "1a", "1a")
            expect(copy).toEqual(result) ;
        })
    })
})