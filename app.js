// practicing string
const firstName = 'Stephen';
const lastName = `O'Connor`;
const age = 33;
const job = 'Web Dev';
const city = 'Delhi';
const str = 'Hello there my name is ';
const tags = 'web design,web-development,programming';
let val;
let html;

// concat
val = firstName + ' ' + lastName;

// append
val = 'Brad';
val += ' Pitt';

val = 'Hello, my name is ' + firstName + ' ' + lastName + ' and I am ' + age;

// escape
val = 'Thats\'s awesome ' + firstName + ', I can\'t wait.';

// length
val = firstName.length;

// concat method
val = firstName.concat(' ' + lastName);

// change case 
val = firstName.toUpperCase();
val = lastName.toLowerCase();

val = firstName[2];

// indexOf()
val = firstName.indexOf('t');
val = firstName.lastIndexOf('p');

// charAt()
val = firstName.charAt('3');
// get last char
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = tags.replace('web design', 'JS').split(',');

// includes
val = str.includes('foo'); // false

console.log(val);

// without template strings (ES5)
html = '<ul><li>Name: ' + firstName + '</li><li>Age:' + age + ' </li><li>Job: ' + job + '</li><li>City:' +  city;

function hello() {
    return 'hello';
}

// template strings (ES6)
html = `
    <ul>
        <li>Name: ${firstName + ' ' + lastName}</li>      
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${2 + 2}</li>
        <li>${hello()}</li>
        <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
    </ul>
`;

document.getElementById("details").innerHTML = html;