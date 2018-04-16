const numbers = [43,67,2,44,36,5];
const numbers2 = new Array(22,45,26,4,6,85);
const fruit = ['Apple','Orange','Pear','Banana'];
const mixed = [22,'Hello',true,undefined,null,{a:5, b:1}, new Date()];

let val;

// get the array length
val = numbers.length;
// check if is array
val = Array.isArray(numbers);
// get a single val
val = numbers[3];
val = numbers[0];
// insert into array
numbers[2] = 100;
// find index of val
val = numbers.indexOf(36);

/* mutating arrays, 
add to end */
numbers.push(250);
// add to front
numbers.unshift(120);
// take from end
numbers.pop();
// take from front
numbers.shift();
// splice values
numbers.splice(1, 3);
// reverse array
numbers.reverse();

// concat array
val = numbers.concat(numbers2);

// sorting array
val = fruit.sort();
// val = numbers.sort();

// compare func
// val = numbers.sort(function(x,y) {
//     return x - y;
// });

// // compare func reverse sort
// val = numbers.sort(function(x,y) {
//     return y - x;
// });

// find in array
function under25(num) {
    return num < 25;
}

val = numbers.find(under25);

// find in array
function over25(num) {
    return num > 25;
}

val = numbers.find(over25);

console.log(numbers);
console.log(val);
