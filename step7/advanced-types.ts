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
