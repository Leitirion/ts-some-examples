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
    };
    return isSummer;
};
console.log(isItSummer(Month.Sep),isItSummer(Month.Jun));

enum TimeOfDay {
    x=3,
    y,
    b,
    z=13
};
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
    };
return IsNight;
};
console.log(isItNight(14));
console.log(isItNight(TimeOfDay.b));

enum ApprovalStatus {
    draft,
    approved
};

const requests={
    request1:{
        id:1,
        name:'requestName1',
        status: ApprovalStatus.approved,
        description: 'Please approve this request'
    },
    request2:{
        id:2,
        name:'requestName2',
        status: ApprovalStatus.draft,
        description: 'Please draft this request'
    }
};
if(requests.request1.status===ApprovalStatus.approved){
    console.log('Approved');
};
if(requests.request2.status===ApprovalStatus.approved){
    console.log('Approved');
};
    console.log('Draft!');

//void
// function log(message): void {
//     console.log(messsage);
// }

//Any
function add(a: any, b: any) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}

//Never
function fn(a: string | number): boolean {
    if (typeof a === "string") {
        return true;
    } else if (typeof a === "number") {
        return false;
    }
    // make the function valid
    return neverOccur();
}

let neverOccur = () => {
    throw new Error('Never!');
}

//union
function add2(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}

//Alias (creating new type from existing)
type nameOfBook = string | number
let name6:nameOfBook=`Jack's Journey`;
let neme7:nameOfBook=123;

//String Literal Types
type MouseEvent1 = 'click' | 'dblclick' | 'mouseup' | 'mousedown'
let mouseEvent:MouseEvent1
mouseEvent='click';
console.log(mouseEvent);
mouseEvent='dblclick';
console.log(mouseEvent);

//Type Inference
let items=[1,2,3,'hi'];

function increment(counter:number) {
    return counter++;
}