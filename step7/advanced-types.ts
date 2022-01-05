//Advanced-types
//Intersection Types
//type typeAB = typeA & typeB; === typeB & typeA;  - order doesn't matter
//let varName = typeA | typeB; -  union type

interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: number;
}

type Employee = Identity & Contact; //created new type Employee
type Customer = BusinessPartner & Contact; //created new type Customer

let employee: Employee = { //Emlployee type now - let name:type {}
    id: 100,
    name: 'Jey',
    email: '123@mail.com',
    phone: 123456789
}

let customer: Customer = {
    name: 'Il',
    credit: 1232020,
    email: '1234@mail.com',
    phone: 1232342342
}

type EmlpoyeeNew = Identity & Contact & BusinessPartner;

let employeeNew: EmlpoyeeNew = {
    id: 1010,
    name: 'E1', //type of name (string) should be the same as type of another interface name (string)
    credit: 11010,
    email: '123123@mail.com',
    phone: 23293874798
}

//Type Guards
//typeof
type alphanumeric = string | number;

function add(a: alphanumeric, b: alphanumeric) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }

    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }

    throw new Error('Invalid arguments. Both arguments must be either numbers or strings.');
}

console.log(add(1, 2));
console.log('asd', 'bgbg');

type numberAndString = string | number;

function div(a1: numberAndString, b1: numberAndString) {
    if (typeof a1 === "string" && typeof b1 === "string") {
        return a1.toUpperCase().concat(b1);
    }
    if (typeof a1 === "number" && typeof b1 === "number") {
        return a1 / b1;
    }
    throw new Error('Something wrong!');
}

console.log(div(2, 3));
console.log(div('il', 'gi'));

//instanceof
