// Написать тесты и разработать функционал для следуюших задач

// 1. Функция принимает число как параметр и должна возвращать следующие значения :
// "Fuzz" если число кратно 2
// "Buzz" если число кратно 3
// "FuzzBuzz" если число кратно и 2 и 3
// * расширить имплементацию функции : добавить возможность задавать параметры кратности;

export function fuzzbuzz(num: number, mul1?: number, mul2?: number) {
    // isFinite перекрывает NaN, Infinity undefined
    // ! но не null
    if (!Number.isFinite(num) || num === null) throw new Error();
    if (mul1 === undefined && mul2 === undefined) {
        if (num % 2 === 0 && num % 3 === 0) return "FuzzBuzz";
        if (num % 2 === 0) return "Fuzz";
        if (num % 3 === 0) return "Buzz";
        return "";
    }
    if (!isFinite(mul1) || mul1 === null) throw new Error();
    if (!isFinite(mul2) || mul2 === null) throw new Error();
    if (num % mul1 === 0 && num % mul2 === 0) return "FuzzBuzz";
    if (num % mul1 === 0) return "Fuzz";
    if (num % mul2 === 0) return "Buzz";
    return "";

}

// 2 Функция прниимает массив Man's и возвращает новый массив [{}, {}, {}],
// где проверяет возраст каждого элемента массива и в ависимости от него
// добавляет новое поле yearsOld со значением из enum в текущий обьект
// в зависимости от текущего значения age в элементе

export enum YearsOldType {
    young = "young", // младше 18
    adult = "adult", // 18-61
    old = "old", // старше 61
}

export interface ManI {
    name: string,
    age: number,
    yearsOld?: YearsOldType,
}

export const startArray: Array<ManI> = [
    {
        name: "vlad",
        age: 87,
    },
    {
        name: "eugene",
        age: 55,
    },
    {
        name: "dima",
        age: 18,
    },
    {
        name: "ira",
        age: 3,
    }
]

export function addOldToObject(peoples: Array<ManI>) {
    return peoples.map(person => {
        if (!isFinite(person.age) || person.age === null || person.age < 0 || person.age >= 130) throw new Error();
        if (person.age < 18) {
            return {...person, yearsOld: YearsOldType.young};
        }
        if (person.age > 60) {
            return {...person, yearsOld: YearsOldType.old};
        }
        return {...person, yearsOld: YearsOldType.adult};
    });
}

// ##################################################################

export enum filterType {
    all = "all",
    done = "done",
    progress = "progress",
}

export interface TaskI {
    title: string,
    isDone: boolean,
    id: string,
}

export interface TodoListI {
    title: string,
    id: string,
    filter: filterType,
    taskList: Array<TaskI>,
}

export interface JournalI {
    title: string,
    id: string,
    todoLists: Array<TodoListI>,
}

export const journal: JournalI = {
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
                    isDone: false,
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
}

// 3. Функция должна вернуть [{task}, {task}] у которых поле isDone = true

export function getDoneTask(journal: JournalI) {

    const allTasks: Array<TaskI> = [];
    journal.todoLists.forEach(todolist => {
        todolist.taskList.forEach(task => {
            if (task.isDone) {
                allTasks.push(task);
            }
        })
    })
    return allTasks;
}

// 4. Функция должна поменять поле isDone в текущей таске по ее id мутируя
// исходный обьект ????

export function changeTaskStatusById(journal: JournalI, todoId: string, taskId: string) {
    journal.todoLists.forEach(list => {
        if(list.id === todoId){
            list.taskList.forEach(task => {
                if(task.id === taskId){
                    task.isDone = !task.isDone;
                }
            })
        }
    })
}

// * повторный вызов getDoneTask должен вернуть другой результат