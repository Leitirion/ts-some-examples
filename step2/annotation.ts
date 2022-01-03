let counter:number;
counter =1;
let counter1:number =1;
let counter2=1;

let name1: string = 'John';
let name2:string;
name2 ='John';
let name5='John';

let age:number=18;
let age2:number;
age2=18;
let age5=18;

//Arrays
let name3:string[]=['John','Jane','Peter'];
let name4=['John','Jane','Peter'];
console.log(name4);

let age3:number[]=[18,19,20];
let age4=[21.22,23];
console.log(age3,age4);

let numbers1=[1,2,3];
let doubleIt=numbers1.map(e=>e*2);
console.log(doubleIt);

//Objects
let person:{
    name:'Jonh',
    age:18
}
let person1:{
    name:'Peter',
    age:19,
    dogName:'Marti'
}

//Function arguments & return types
let greeting:(name:string)=>string;

greeting = function(name:string) {
    return `Hi ${name}`;
}

// let greeting1:(name:string)=>string;
// let message='Hello, World!';
// greeting1 =function (name:string) {
//     console.log(message);
// }


