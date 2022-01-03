//functions
let a = 1;
let b = 2;

function add(a: number, b: number) {
    return a + b;
}

console.log(add(a, b));

function echo(message: string): void {
    console.log(message.toUpperCase());
}

let message = 'marti';

function echo1(message: string): string {
    return message.toUpperCase();
}

console.log(echo1(message));

//Function Types
let add2: (a: number, b: number) => number =
    function (x: number, y: number) {
        return x + y;
    };
console.log(add2(a, b));

let add3: (a: number, b: number) => number;
add3 = function (x: number, y: number) {
    return y - x;
}
console.log(add3(a, b));

let nameOfDog: (message: string) => string =
    function (message) {
        return message.toUpperCase();
    }
console.log(nameOfDog(message));

//Optional Parameters
let name1 = message;
let name2 = 'gil';
//let name2=undefined;
let dogName: (name1: string, name2?: string) => string =
    function (name1, name2) {
        if (typeof name2 !== "undefined") {
            return name2.toUpperCase();
        }
        return name1.toUpperCase();
    }
console.log('Dog Name =', dogName(name1, name2));

//Default Parameters
function applyDiscount(price: number, discount = 0.05) {
    return price * (1 - discount);
}

console.log(applyDiscount(10));

//Rest Parameters (array)
function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}

console.log(getTotal(10, 20));

function add5(...c: number[]): number {
    let c1 = 0;
    c.forEach((num) => c1 += num);
    return c1;
}

console.log(add5(a, b));

//Function Overloadings
function add6(a: number, b: number): number;
function add6(a: string, b: string): string;
function add6(a: any, b: any): any {
    return a + b;
}
console.log(add6(10,10));

function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;
function sum(a: number, b: number, c?: number): number {
    if (c) return a+b+c;
    return a + b;

}
console.log(sum(a,b));

class Counter {
    private current: number = 0;
    count(): number; //only for empty function target (resul=1) - 1 variant
    count(target: number): number[]; //only for array (result from 0 to target) - 2 variant
    count(target?: number): number | number[] { //overload that we can use 1 or 2 variant
        if (target) {
            let values = [];
            for (let start = this.current; start <= target; start++) {
                values.push(start);
            }
            this.current = target;
            return values;
        }
        return ++this.current;
    }
}
let counter=new Counter;
console.log(counter.count(5));