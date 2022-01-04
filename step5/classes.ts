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

class MultiplicationPrivate {
    private a: number;
    private b: number;

    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    getMultiplicationPrivate() {
        return this.a * this.b;
    }
}

let multiplicationPrivate = new MultiplicationPrivate(a, b);
console.log('multiplication-private =', multiplicationPrivate.getMultiplicationPrivate()); //a,b are private and u can't access them without class Multiplicatipon

class MultiplicationPublic {
    constructor(public a: number, public b: number) {
        this.a = a;
        this.b = b;
    }

    getMultiplicationPublic() {
        return this.a * this.b;
    }
}

let multiplicationPublic = new MultiplicationPublic(a, b);
console.log('multiplication-public =', multiplicationPublic.a); //a,b are public and u can access them without class Multiplicatipon

class PersonProtected {
    constructor(protected ssn: string, private firstName: string, private lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

let personProtected = new PersonProtected('123', 'Iln', 'Gil');
console.log(personProtected.getFullName());
