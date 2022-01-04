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

let sum = new Sum(1, 2);
console.log(sum.getSum());

//Access Modifiers
