// if(something) {
//     do something
// } else {
//     do something else
// }

const id = 100;
const id2 = '100';

// equal to
if(id == 100) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}

// equal to value & type
if(id2 === 100) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}

// not equal to 
if(id2 !== 100) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}

if(id) {
    console.log(`The id is ${id}`);
} else {
    console.log('No id');
}

// test if undefined
if(typeof id3 !== 'undefined') {
    console.log(`The id is ${id}`);
} else {
    console.log('No id');
}

// greater or less than
if(id > 200) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}

// if else
const color = 'pink';

if(color === 'white') {
    console.log('Color is white');
} else if(color === 'blue') {
    console.log('Color is white');
} else {
    console.log('Color is not white or blue');
}

// logical opertorsSteve
const name = 'Steve';
const age = 20;

if(age > 0 && age < 12) {
    console.log(`${name} is a child`);
} else if(age > 13 && age <= 19) {
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}

if(age < 16 && age > 65) {
    console.log(`${name} cannot take part`);
} else {
    console.log(`${name} can take part`);
}

// ternary operator
console.log(id === 100 ? 'Correct' : 'Incorrect');

// switch
switch(color) {
    case 'red':
    console.log(`Color is red`);
    break;
    case 'blue':
    console.log(`Color is blue`);
    break;
    default:
    console.log(`Color is not red or blue it's ${color}`);
    break;
}

let day = new Date().getDay();

switch(day) {
    case 0:
    console.log(`Day is Sunday ${day}`);
    break;
    case 1:
    console.log(`Day is Monday ${day}`);
    break;
    case 2:
    console.log(`Day is Tuesday ${day}`);
    break;
    case 3:
    console.log(`Day is Wednesday ${day}`);
    break;
    case 4:
    console.log(`Day is Thursday ${day}`);
    break;
    case 5:
    console.log(`Day is Friday ${day}`);
    break;
    case 6:
    console.log(`Day is Saturday ${day}`);
    break;
    default:
    console.log(`Not a day ${day}`);
    break;
}