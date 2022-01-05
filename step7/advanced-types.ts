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
class Customer1 {
    isCreditAllowed(): boolean {
        return true;
    }
}

class Supplier1 {
    isInShortList(): boolean {
        return false;
    }
}

type BusinessPartner1 = Customer1 | Supplier1;

function signContract(partner: BusinessPartner1): string {
    let message: string;
    if (partner instanceof Customer1) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    } else {
        // must be Supplier
        message = partner.isInShortList() ? 'Sign a new contract with the supplier' : 'Need to evaluate further';
    }
    return message;
}

let customer1 = new Customer1();
console.log(customer1.isCreditAllowed());
let supplier1 = new Supplier1();
console.log(supplier1.isInShortList());

//in operator carries a safe check for the existence of a property on an object.
class Customer2 {
    isCreditAllowed(): boolean {
        return true;
    }
}

class Supplier2 {
    isInShortList(): boolean {
        return false;
    }
}

type BusinessPartner2 = Customer2 | Supplier2;

function signContract1(partner1: BusinessPartner2): string {
    let message1: string;
    if ('isCreditAllowed' in partner1) {
        message1 = partner1.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    } else {
        // must be Supplier
        message1 = partner1.isInShortList() ? 'Sign a new contract the supplier ' : 'Need to evaluate further';
    }
    return message1;
}

let customer2 = new Customer2();
console.log('customer2 =', customer2.isCreditAllowed());
let supplier2 = new Supplier2();
console.log('supplier2 =', supplier2.isInShortList());

//User-defined Type Guards
class Customer3 {
    isCreditAllowed(): boolean {
        return true;
    }
}

class Supplier3 {
    isInShortList(): boolean {
        return false;
    }
}

type BusinessPartner3 = Customer3 | Supplier3;

function isCustomer3(partner3: any): partner3 is Customer3 {
    return partner3 instanceof Customer3;
}

function signContract2(partner3: BusinessPartner3): string {
    let message3: string;
    if (isCustomer3(partner3)) {
        message3 = partner3.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    } else {
        message3 = partner3.isInShortList() ? 'Sign a new contract the supplier ' : 'Need to evaluate further';
    }
    return message3;
}

let customer3 = new Customer3();
console.log('customer3 =', customer3.isCreditAllowed());
let supplier3 = new Supplier3();
console.log('supplier3 =', supplier3.isInShortList());

//Casting
/** let input = document.querySelector('input[type="text"]') as HTMLInputElement;
 console.log(input.value);

 let enteredText = (input as HTMLInputElement).value;

 let el: HTMLElement;
 el = new HTMLInputElement();

 let a: typeA;
 let b = a as typeB;

 //Besides the as keyword, you can use the <> operator to carry a type casting.
 let input1 = <HTMLInputElement>document.querySelector('input[type="text"]');
 console.log(input1.value);

 let a1: typeA;
 let b1 = <typeB>a1;
 */

//Assertions
/** Type assertions instruct the TypeScript compiler to treat a value as a specified type. It uses the as keyword to do so:
 expression as targetType
 */
function getNetPrice(price: number, discount: number, format: boolean): number | string {
    let netPrice = price * (1 - discount);
    return format ? `$${netPrice}` : netPrice;
}

let netPriceString = getNetPrice(100, 0.05, true) as string;
console.log(netPriceString);

let netPriceNumber = getNetPrice(100, 0.05, false) as number;
console.log(netPriceNumber);

/** Note that a type assertion does not carry any type casting. It only tells the compiler
 * which type it should apply to a value for the type checking purposes.
 */

/** You can also uses the angle bracket syntax <> to assert a type, like this:
 <targetType> value
 */

let netPriceString1 = <string>getNetPrice(80, 0.1, true);
console.log(netPriceString1);
let netPriceNumber1 = <number>getNetPrice(80, 0.1, false);
console.log(netPriceNumber1);