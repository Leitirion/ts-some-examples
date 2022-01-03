//if..else
const max = 100;
let counter = 10;

if (counter < max) {
    counter++;
}
counter--;

console.log(counter);

const max1 = 100;
let counter1 = 10;

if (counter1 < max1) {
    counter1++;
} else {
    counter1--;
}

console.log(counter1);

const max2 = 100;
let counter2 = 10;

counter2 < max2 ? counter2-- : counter2++;
console.log(counter2);

const max3 = 100;
let counter3 = 10;

if (counter3 > 10) {
    counter3++;
} else if (counter3 < 10) {
    counter3++;
} else {
    counter3--;
}
console.log(counter3);

//Switch case
let targetId = 'btnDelete';

switch (targetId) {
    case 'btnUpdate':
        console.log('Update');
        break;
    case 'btnDelete':
        console.log('Delete');
        break;
    case 'btnNew':
        console.log('New');
        break;
}