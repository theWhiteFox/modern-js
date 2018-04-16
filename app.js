const person = {
    firstName: 'Alex',
    lastName: 'Murphy',
    age: 33,
    email: 'alex@theRoboCop.it',
    'prime directives': [
        "Serve the public trust",
        "Protect the innocent",
        "Uphold the law",
        "Never Oppose an OCP Officer"
    ],
    adress: {
        city: 'Detroit',
        state: 'Micigan'
    },
    'D.O.B': function() {
        return 2018 - this.age;
    }
};

let val;

val = person;

// get specific val
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person["prime directives"];
val = person.adress.state;
val = person.adress['city'];
val = person["D.O.B"]();

console.log(val);

for(var key in person) {
    console.log(key + ': ' + person[key]);
}

