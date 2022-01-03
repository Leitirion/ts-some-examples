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

//Turple
let bgColor, headerColor:[number,number,number,number?];
bgColor=[255,20,0, 0.5];
headerColor=[255,0,0];
console.log(`bgColor=`,bgColor,'/',`headerColor=`,headerColor);

//enum
enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
};
console.log(Month);

function isItSummer(month:Month){
    let isSummer:boolean;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer=true;
            break;
        default:
            isSummer=false;
            break;
    }
    return isSummer;
}
console.log(isItSummer(Month.Sep),isItSummer(Month.Jun));

enum TimeOfDay {
    x,
    y,
    b,
    z
}
function isItNight(time:TimeOfDay){
    let IsNight:boolean;
    switch (time){
        case TimeOfDay.x:
        case TimeOfDay.y:
        case TimeOfDay.b:
            IsNight =true;
            break;
        default:
            IsNight=false;
            break;
    }
return IsNight;
}
console.log(isItNight(TimeOfDay.z));