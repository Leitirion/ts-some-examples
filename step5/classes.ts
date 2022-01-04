//Classes
class Person {
    ssn: string;
    firstName: string;
    lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let person = new Person('171-28-0926', 'John', 'Doe');
console.log(person.getFullName());

class DogName {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.lastName = lastName;
        this.firstName = firstName;
    }

    getFullDogName() {
        return `${this.firstName.toUpperCase()} ${this.lastName.toUpperCase()}`;
    }
}

let dogName = new DogName('Marti', 'Gil');
console.log(dogName.getFullDogName());

let a = 1;
let b = 2;

class Sum {
    a: number;
    b: number;

    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    getSum() {
        return this.a + this.b;
    }
}

let sum = new Sum(a, b);
console.log('sum =', sum.getSum());
console.log('a =', sum.a);

//Access Modifiers
// private
// protected
// public

class Multiplication {
    private a: number;
    private b: number;

    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    getMultiplication() {
        return this.a * this.b;
    }
}

let multiplication = new Multiplication(a, b);
console.log('multiplication-private =', multiplication.getMultiplication()); //a,b are private and u can't access them without class Multiplicatipon

class Multiplication1 {
    public a: number; //u don't need to write public
    public b: number; //u don't need to write public

    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    getMultiplication1() {
        return this.a * this.b;
    }
}

let multiplication1 = new Multiplication1(a, b);
console.log('multiplication-public =', multiplication1.a); //a,b are public and u can access them without class Multiplicatipon
