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
