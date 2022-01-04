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

