// // for loop

// for(let i  =0; i < 10; i++) {
//   // console.log(i);
//   if(i === 2) {
//     console.log('2 is my fav number');
//     continue;
//   }
//   if(i === 5) {
//     console.log('Stop the loop');
//     break;
//   }
//   // console.log('Number ' + i);
// }

// // while loop
// let i = 0;
// while(i < 10) {
//   // console.log('Number ' + i);
//   i++;
// }

// // do while
// let x = 100;
// do {
//   // console.log('Number ' + x);
//   x++;
// }

// while(x < 10);


const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i = 0; cars.length; i++) {
//   console.log(cars[i]);
// }

// foreach
cars.forEach(function(car, index, array) {
  console.log(car, index, array);
});

// map
const users = [
    {id:1, name:'John'},
    {id:2, name:'Sara'},
    {id:3, name:'Karan'},
];

const ids = users.map(function(user) {
  return user.id;
});

console.log(ids);

const user = {
  firstName: 'Larry',
  lastName: 'David',
  age: 70
};

// for in
for(const x in user) {
  console.log(`${x} for in`);
}

// for of
for (var chr of "😺😲") {
    alert(chr);
}