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

const person = {
    name: 'John',
    age: 32
};

console.log('person typeof: ' + typeof person);

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