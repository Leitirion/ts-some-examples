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
console.log(personProtected.getFullName()); //protected modifier allows access within the same class and subclasses.

//Readonly
class PersonReadOnly {
    constructor(readonly birthDate: Date, public ssn: string, public firstName: string, public lastName: string) {
        this.birthDate = birthDate;
        this.ssn = ssn;
        this.lastName = lastName;
        this.firstName = firstName;
    }
}

let personReadOnly = new PersonReadOnly(new Date(1990, 11, 12), '12', 'Il', 'Gil');
console.log(personReadOnly.birthDate);
//personReadOnly.birthDate=new Date(1992,10,15); //Cannot assign to 'birthDate' because it is a read-only property.

//Getters and Setters (get and set)
class PersonGetAndSet {
    constructor(private _ssn: string, private _firstName: string, private _lastName: string) {
        this._ssn = _ssn;
        this._firstName = _firstName;
        this._lastName = _lastName;
    }

    public get ssn() {
        return this._ssn;
    }

    public set ssn(theSsn: string) {
        if (!theSsn) {
            throw new Error('Invalid ssn');
        }
        this._ssn = theSsn;
    }

    public get firstName() {
        return this._firstName;
    }

    public set firstName(theFirstName: string) {
        if (!theFirstName) {
            throw new Error('Invalid First Name');
        }
        this._firstName = theFirstName;
    }

    public get lastName() {
        return this._lastName;
    }

    public set lastName(theLastName: string) {
        if (!theLastName) {
            throw new Error('Invalid Last Name');
        }
        this._lastName = theLastName;
    }

    public get fullName() {
        return `${this.firstName.toUpperCase()} ${this.lastName.toUpperCase()}`;
    }

    public set fullName(name: string) {
        let parts = name.split('/ ');
        if (parts.length < 4) {
            throw new Error('Invalid name format: first last');
        }
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

let personGetAndSet = new PersonGetAndSet('sdf', 'il', 'gi');
console.log('personGetAndSet =', personGetAndSet.fullName);//get and set with private

class Division {
    constructor(private a: number, private b: number) {
        this.a = a;
        this.b = b;
    }

    public get division() {
        return this.a / this.b
    }

    public set division(num: number) {
        this.a = num + 2;
    }
}

let division = new Division(2, 2);
division.division = 12;
console.log(division.division);

class Person2 {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    public set fullName(name: string) {
        let parts = name.split(' ');
        if (parts.length != 2) {
            throw new Error('Invalid name format: first last');
        }
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

let person2 = new Person2('asd', 'sad');
person2.fullName = 'John engsa';

console.log(person2.fullName);

//Inheritance
class PersonInh {
    constructor(private firstName: string, private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    describe(): string {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}

class Employee extends PersonInh {
    constructor(firstname: string, lastname: string) {
        super(firstname, lastname);
    }
}

let employee = new Employee('John', 'Eng');
console.log(employee.getFullName());
console.log(employee.describe());

class EmployeeMe extends PersonInh {
    constructor(firstname: string, lastname: string) {
        super(firstname, lastname);
    }

    describe(): string {
        return `I am ${this.getFullName()}.`;
    }
}

let employeeMe = new EmployeeMe('John1', 'Eng1');
console.log(employeeMe.describe());

//Static Methods and Properties
class EmployeeStatic {
    private static headcount: number = 0;

    constructor(
        private firstName: string,
        private lastName: string,
        private jobTitle: string) {

        EmployeeStatic.headcount++;
    }

    public static getHeadcount() {
        return EmployeeStatic.headcount;
    }
}

let john = new EmployeeStatic('John', 'Doe', 'Front-end Developer');
let jane = new EmployeeStatic('Jane', 'Doe', 'Back-end Developer');

console.log('EmployeeStatic head count =', EmployeeStatic.getHeadcount());

//Abstract Classes
abstract class EmployeeAbstract {
    constructor(private firstName: string, private lastName: string) {
    }

    abstract getSalary(): number

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    compensationStatement(): string {
        return `${this.fullName} makes ${this.getSalary()} a month.`;
    }
}

class FullTimeEmployee extends EmployeeAbstract {
    constructor(firstName: string, lastName: string, private salary: number) {
        super(firstName, lastName);
    }

    getSalary(): number {
        return this.salary;
    }
}

class Contractor extends EmployeeAbstract {
    constructor(firstName: string, lastName: string, private rate: number, private hours: number) {
        super(firstName, lastName);
    }

    getSalary(): number {
        return this.rate * this.hours;
    }
}

class MyPayment extends EmployeeAbstract {
    constructor(firstName: string, lastName: string, private rate: number, private days: number) {
        super(firstName, lastName);
    }

    getSalary(): number {
        return this.rate * this.days
    }
}

let john1 = new FullTimeEmployee('John', 'Doe', 12000);
let jane1 = new Contractor('Jane', 'Doe', 100, 160);
let Me = new MyPayment('Il', 'Gi', 2200, 20);

console.log(john1.compensationStatement());
console.log(jane1.compensationStatement());
console.log(Me.compensationStatement());