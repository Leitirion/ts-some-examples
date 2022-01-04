//Interface
function getFullName(person: {
    firstName: string;
    lastName: string
}) {
    return `${person.firstName} ${person.lastName}`;
}

let person = {
    firstName: 'John',
    lastName: 'Doe'
};
console.log(getFullName(person));

function add2(sum: {
    a1: number;
    b1: number;
}) {
    return sum.a1 + sum.b1;
}

let sum = {
    a1: 1,
    b1: 2
};

console.log(add2(sum));

//with interface
interface Sum1 {
    a: number;
    b: number;
    c: number;
}

function add1(sum1: Sum1) {
    return sum1.a * sum1.b - sum1.c
}

let sum3 = {
    a: 2,
    b: 3,
    c: 1
};

console.log(add1(sum3));

//c - optional
interface Sum2 {
    a: number;
    b: number;
    c?: number;
}

function add3(sum4: Sum2) {
    return sum4.a * sum4.b
}

console.log(add3(sum3));

//Function types
interface StringFormat {
    (str: string, isUpper: boolean): string
}

let format: StringFormat;

format = function (str: string, isUpper: boolean) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};

console.log(format('hi', true));

interface Div {
    (a: number, b: number): number
}

let div: Div;

div = function (a: number, c: number) { //functions and parameters don't need to be the same (c=b=4)
    return a / c;
}

console.log(div(10, 4));

let div2: Div;
div2 = function (d: number) { //functions and parameters don't need to be the same (d=a-10, and we don't have b)
    return d / 10;
}
console.log(div2(10, 4));

//Classes
interface Json1 {
    toJson(): string
}

class PersonIntr implements Json1 {
    constructor(private firstName: string,
                private lastName: string) {
    }

    toJson(): string {
        return JSON.stringify(this);
    }
}


let personIntr = new PersonIntr('John', 'Doe');
console.log(personIntr.toJson());

interface Json {
    toJson1(): string
}

class SumIntr implements Json {
    constructor(private a2: string, private b2: string) {
    }

    toJson1(): string {
        return JSON.stringify(this);
    }
}

let sumIntr = new SumIntr('asd', 'dvf');
console.log(sumIntr.toJson1());

//How to Extend Interfaces
//Interfaces extending one interface
interface Mailable extends FutureMailable {
    send(email: string, after: number): boolean

    queue(email: string): boolean
}

interface FutureMailable {
    later(email: string, after: number): boolean
}

class Mail implements Mailable {
    later(email: string, after: number): boolean {
        console.log(`Send email to ${email} in ${after} ms.`);
        return true;
    }

    send(email: string, after: number): boolean {
        console.log(`Sent email to ${email} after ${after} ms.`);
        return true;
    }

    queue(email: string): boolean {
        console.log(`Queue an email to ${email}.`);
        return true;
    }
}

// interface A {
//     a(): void
// }
//
// interface B extends A {
//     b(): void
// }

//Interfaces extending multiple interfaces
// interface C {
//     c(): void
// }
//
// interface D extends B, C {
//     d(): void
// }
//So D has all the methods of B and C interfaces, which are a(), b(), and c() methods.

//interface extends class
// class Control {
//     private state: boolean;
// }
//
// interface StatefulControl extends Control {
//     enable(): void
// }
//
// class Button extends Control implements StatefulControl {
//     enable() {
//     }
// }
//
// class TextBox extends Control implements StatefulControl {
//     enable() {
//     }
// }
//
// class Label extends Control {
// }

//extend (продлевает и делает как-бы единый код
//implements позволяет реализовывать код из двух и более кусков из extend и без него
interface A {
    a10(a2: number): number;
}

interface B extends A {
    b10(b20: number): number;
}

class C implements B {
    a10(a20: number): number {
        console.log(a20);
        return this.a10(1);
    }

    b10(b20: number): number {
        console.log(b20);
        return this.b10(2);
    }
}

//interface A сам по себе с методом a1, interface B продлевает и делает как-бы единый код с interface A, class C позволяет реализовывать код
// из interface A и interface B c обоими методами.