console.log('lesson 5');

/*const testPromise = new Promise((resolve, reject) => {
    // resolve(50);
    // reject(120);
    // setTimeout(resolve, 1500, 10);
    // setTimeout(reject, 1500, 10);
    // throw new Error();
});*/

/*testPromise
    .then(console.log, console.log);*/


/*const createPromise = (data: string, delay: number, condition: boolean) => {
    return new Promise((res, rej) => {
        setTimeout(condition? res : rej, delay * 1000, data);
    })
}*/

/*createPromise("amazing", 2, false)
    .then(console.log, console.log);*/


/*const test2 = createPromise("test",2, true)
console.log(test2);

test2
    .then(res => console.log(test2));*/

// console.log(testPromise);
// setTimeout(console.log, 9005, testPromise);

/*Promise.resolve("wtf")
    .then(console.log)*/
// Promise.reject();

/*testPromise.then((res) => {
    console.log("Resolve", res)},
    (res) => console.log("Reject", res))*/

/*testPromise
    .then((res: number) => res * 2)
    .then((res) => res - 10)
    .then((res) => res - 100)
    .then((res) => console.log("Resolve", res))
    .catch(res => console.log(res))
    .finally(() => console.log("end"));*/

//Promise.all
//Promise.race
/*const test2 = Promise.race([
    createPromise("test1",4, true),
    createPromise("test2",3, true),
    createPromise("test3",2, false),
])

test2
    .then(console.log).catch(console.log)*/


// Task 1
/*const task1 = new Promise((res, rej) => {
    console.log("Promise is created");
})
console.log(task1)*/

// Task 2
/*Promise.resolve("Promise Data")
    .then (res => console.log(res));*/

//Task 3
/*const test2 = new Promise((resolve,reject) => {
    reject("rejected");
})

test2
    .then(res => console.log(res))
    .catch(res => console.log(res));*/

// Task 4
/*const createPromise = (delay: number) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, delay * 1000, "Promise Data");
    })
}

const test3 = createPromise(3);

test3
    .then(res => console.log(res));*/

// ##########################################
// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

// !!! Tok wot naschet typizacii ???

type customPromiseType = {
    promise: Promise<any> | null,
    resolve: Function | any,
    reject: Function | any,
    onSuccess: (str: string) => void,
    onError: (str: string) => void,
}

const customObj: customPromiseType = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess (paramName) {
        console.log(`Promise is resolved with data: ${paramName}`)
    },
    onError(paramName) {
        console.log(`Promise is rejected with error: ${paramName}`)
    },
}

const createBtn = document.querySelector("#btn-create-promise")
const resolveBtn = document.querySelector("#btn-resolve-promise")
const rejectBtn = document.querySelector("#btn-reject-promise")

createBtn.addEventListener("click", () => {
    customObj.promise = new Promise((resolve, reject) => {
        customObj.resolve = resolve;
        customObj.reject = reject;
    });
    console.log(customObj)
})

resolveBtn.addEventListener("click", () => {
    customObj.resolve("wtf")
    // customObj.promise.then(customObj.onSuccess, customObj.onError);
    customObj.promise
        .then(res => res)
        .then(res => customObj.onSuccess(res))
        .catch(console.log)
})

rejectBtn.addEventListener("click", () => {
    customObj.reject("err")
    customObj.promise
        .then(console.log)
        // .catch(console.log)
        .catch(res => customObj.onError(res));
})

// ##########################################

// Task 7

/*const result  = prompt("insert your name")

const onSuccess = (str: string) => {
        return new Promise((resolve,reject) => {
            if(typeof str !== "string" || str.trim().length === 0){
                reject("smth going wrong")
            } else {
                setTimeout(resolve, 1000, `My name is ${str}`);
            }
        })
}

const test7 = onSuccess(result);

const printStr = (str: Promise<string>) => {
    console.log(str);
}

test7
    // .then(res => printStr(res))
    .catch(console.log)*/

// ####################################################
// Task 08
// Используйте предыдущий код. Добавьте в функци onSuccess генерацию исключения
// Обработайте даное исключение, используя catch. Обратите внимание,
// что метод print при этом не выполняется.





// ####################################################
// Task 09
// Напишите функцию getPromiseData, которая принимает один параметр - промис. Функция получает
// значение промиса и выводит его в консоль
// Объявите объект со свойтвом name и значением Anna.
// Создайте врапер для этого объекта и вызовите для него функцию getPromiseData

/*const test9 = new Promise((res, rej) => {
    res("resolve work");
});

const test10 = new Promise((res, rej) => {
    res({name: "Anna"});
});

const getPromiseData = (data: Promise<any>) => {
    data.then(console.log).catch(console.log)
}

getPromiseData(test9);
getPromiseData(test10);*/

// Task 10, 11

/*const test11 = new Promise((res, rej) => {
    res({name: "Anna"});
});
const test12 = new Promise((res, rej) => {
    res({age: 18});
});
const test13 = new Promise((res, rej) => {
    res({city: "Minsk"});
});

const result = Promise.all([test11, test12, test13]);

result
    .then(res => res.reduce((acc, current) => {
        // @ts-ignore
        return {...acc, ...current}
    }, {}))
    .then(console.log)
    .catch(console.log)*/


// Task 12
// Создайте промис, который перейдет в состояние resolve через 5с и вернет строку
// 'Promise Data'.
// Создайте второй промис, который перейдет в состояние rejected по клику на
// кнопку "Cancel Promise". Добавьте обработчик для кнопки.
// Используя метод race организуйте "отмену промиса".

/*const test1 = new Promise((res, rej) => {
    setTimeout(res, 5000, `Promise Data`);
})
let reject: any;

const test2 = new Promise((res, rej) => {
    console.log("cancel btn");
    reject = rej;
})


const cancelBtn = document.querySelector("#btn-cancel-promise")

cancelBtn.addEventListener("click", () => {
    reject("Error in promise");
})

Promise.race([test1, test2]).then(console.log).catch(console.log);*/











