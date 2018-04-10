
// practicing console.log()

console.clear();
console.log(123 + '!');
console.log(true);

// var, let, const 
// block level scope
let greeting;
greeting = "Hello?";
greeting = "Hello there?";
console.log(greeting);

// const game; // SyntaxError: missing = in const declaration

const name = 'John';
console.log('name typeof: ' + typeof name);
console.log(name);
// name = 'Sara'; // TypeError: invalid assignment to const `name'

let test;

const person = {
    // Primitive Types
    name: 'John', // String
    age: 32, // number 
    hasKids: true, // boolean
    foo: null, // null
    sym: Symbol(), // symbol
    test, // undefined
    // Reference Types
    // array
    hobbies: [
        'swimming',
        'hiking'
    ],    
    // object literal
    address: {
        city: 'Delhi',
        state: 'Himachal Pradesh'
    },
    // object
    today: new Date()   
};

console.log('person typeof: ' + typeof person);
console.log('person.name typeof: ' + typeof person.name);
console.log('person.hasKids typeof: ' + typeof person.hasKids);
console.log('person.sym typeof: ' + typeof person.sym);
console.log('person.test typeof: ' + typeof person.test);
console.log('person.address typeof: ' + typeof person.address); // incorrect not object but primitive data type

console.log('person.hobbies typeof: ' + typeof person.hobbies);
console.log('person.date typeof: ' + typeof person.today);
console.log('person.address typeof: ' + typeof person.address);

// person name & age can be changed
person.name = 'Sara';
person.age = 34;
console.log(person);


const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// items within the array can be changed
console.log('push: ' + numbers.push(6));
console.log(numbers);

console.log('numbers includes: ' + numbers.includes(6));

console.log({a:1, b:2});
console.table({a:1, b:2});

console.error('Error alert!');

console.warn('This is a warning!');

console.time('How long for 3 Hello Worlds');
    console.log('Hello World!');
    console.log('Hello World!');
    console.log('Hello World!');
console.timeEnd('How long for 3 Hello Worlds');