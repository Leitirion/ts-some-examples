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

// change the month and year
let month = 2,
    year = 2022;

let day = 0;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        day = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        day = 30;
        break;
    case 2:
        // leap year
        if (((year % 4 == 0) &&
                !(year % 100 == 0))
            || (year % 400 == 0))
            day = 29;
        else
            day = 28;
        break;
    default:
        throw Error('Invalid month');
}

console.log(`The month ${month} in ${year} has ${day} days`);

//for if you how much repeat
for (let i = 0; i < 10; i++) {
    console.log(i);
}

let i = 0;
for (; i < 5; i++) {
    console.log(i);
}

for (i = 0; ; i++) {
    console.log(i);
    if (i > 5) {
        break
    }
}

let i1 = 0;
for (; ;) {
    console.log(i1);
    i1++;
    if (i1 > 3) {
        break
    }
}

//while (until condition true)
let counter4 = 0;
while (counter < 5) {
    console.log(counter4);
    counter4++;
}

//do..while (until condition false)
let i2 = 0;
do {
    console.log(i2);
    i2++;
} while (i2 < 5);

//break
let products = [
    {name: 'phone', price: 700},
    {name: 'tablet', price: 900},
    {name: 'laptop', price: 1200}
];

for (var i3 = 0; i3 < products.length; i3++) {
    if (products[i3].price == 900)
        break;
}

// show the products
console.log(products[i3]);

let discount = 0;
let product = products[0]; //phone

switch (product.name) {
    case 'phone':
        discount = 5;
        break;
    case 'tablet':
        discount = 10;
        break;
    case 'laptop':
        discount = 15;
        break;
}

console.log(`There is a ${discount}% on ${product.name}.`);

//continue
for (let i4 = 0; i4 < 5; i4++) {
    if (i4 % 2) {
        continue;
    }
    console.log(i4);
}

let i5 = 0;
while (i5 < 3) {
    i5 = i5 + 2;
    if (i5 % 2) {
        continue;
    }
    console.log('i5=', i5);
}

let i6 = 0;
do {
    i6 = i6 + 2;
    if (i6 % 2) {
        continue;
    }
} while (i6 < 3)
console.log('i6=', i6);
