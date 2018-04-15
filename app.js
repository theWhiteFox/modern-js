// practicing conversion

let val;

// number to string
val = 5;

/// boolean to string
val = String(true);

val = 'String';

// date to string
val = String(new Date());

// array to string
val = String([1,2,3,4]);

// toString()
val = (5).toString();
val = (true).toString();

// string to number
val = Number('5');
val = Number('hello');
val = Number([1,2,3,4]);

val = parseInt('100.30');
val = parseFloat('100.30');

 // output
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));
console.log(val.length);

// type coercion
const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);


