//Generics
function getRandomNumberElement(items: number[]): number {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let numbers = [1, 5, 7, 4, 2, 9];
console.log(getRandomNumberElement(numbers));

function getRandomStringElement(items: string[]): string {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let colors = ['red', 'green', 'blue'];
console.log(getRandomStringElement(colors));

function getRandomAnyElement(items: any[]): any {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let numbers1 = [1, 5, 7, 4, 2, 9];
let colors1 = ['red', 'green', 'blue'];

console.log(getRandomAnyElement(numbers1));
console.log(getRandomAnyElement(colors1));

type T = number;

function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let numbers2 = [1, 5, 7, 4, 2, 9];
let randomEle = getRandomElement<number>(numbers2);
console.log(randomEle);

let numbers3 = [1, 5, 7, 4, 2, 9];
let randomEle3 = getRandomElement(numbers3);
console.log(randomEle3);

//Generic functions with multiple types
/** function merge<U, V>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}
 */

function merge<U, V>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}

let result = merge(
    {name: 'John'},
    {jobTitle: 'Frontend Developer'}
);

console.log(result);

function merge1<A, B>(smth1: A, smth2: B) {
    return {
        ...smth1,
        ...smth2
    };
}

let result1 = merge1(
    {a: 1},
    {b: 2}
);
console.log(result1);

//Generic Constraints
function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let str = prop({name: 'John'}, 'name');
console.log(str);

//Generic Classes
/** A generic class has a generic type parameter list in an angle brackets <> that follows the name of the class:

 class className<T>{
    //...
}
 Code language: TypeScript (typescript)
 TypeScript allows you to have multiple generic types in the type parameter list. For example:

 class className<K,T>{
    //...
}
 Code language: TypeScript (typescript)
 The generic constraints are also applied to the generic types in the class:

 class className<T extends TypeA>{
    //...
}
 */
class className<T> {
    //...
}

class Stack<T> {
    private elements: T[] = [];

    constructor(private size: number) {
    }

    isEmpty(): boolean {
        return this.elements.length === 0;
    }

    isFull(): boolean {
        return this.elements.length === this.size;
    }

    push(element: T): void {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);

    }

    pop(): any {
        if (this.elements.length == 0) {
            throw new Error('The stack is empty!');
        }
        return this.elements.pop();
    }
}

let numbers4 = new Stack<number>(5);

function randBetween(low: number, high: number): number {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

let numbers5 = new Stack<number>(5);

while (!numbers5.isFull()) {
    let n = randBetween(1, 10);
    console.log(`Push ${n} into the stack.`)
    numbers5.push(n);
}

//Generic Interfaces
/** Like classes, interfaces also can be generic. A generic interface has generic type parameter list in an angle brackets <> following the name of the interface:

 interface interfaceName<T> {
    // ...
}
 Code language: TypeScript (typescript)
 This make the type parameter T visible to all members of the interface.

 The type parameter list can have one or multiple types. For example:

 interface interfaceName<U,V> {
    // ...
}
 */
interface Pair<K, V> {
    key: K,
    value: V
}

let month: Pair<string, number> = {
    key: 'Jan',
    value: 1
}

console.log(month);

//Generic interfaces that describe methods
interface Collection<T> {
    add(o: T): void;
    remove(o: T): void;
}

class List<T> implements Collection<T>{
    private items: T[] = [];

    add(o: T): void {
        this.items.push(o);
    }
    remove(o: T): void {
        let index = this.items.indexOf(o);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }
}

let list = new List<number>();


for (let i = 0; i < 10; i++) {
    list.add(i);
}

console.log(list);

//Generic interfaces that describe index types
interface Options<T> {
    [name: string]: T
}

let inputOptions: Options<boolean> = {
    'disabled': false,
    'visible': true
};

console.log('inputOptions =',inputOptions);