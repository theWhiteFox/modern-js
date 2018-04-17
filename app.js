// function declarations
function greet(firstName = 'Alex', lastName = 'Murphy') {
    return `Hello ${firstName} ${lastName}`;
}

console.log(greet());

// function expressions
// pass in a default 3
const square = function(x = 3) {
    return x * x;
};

console.log(square(4));

// immidiatley invokable function expressions IIFE
(function(name) {
    console.log(`Hello ${name}`);
}('David'));

// property methods
const todo = {
    add: function() {
        console.log('Add todo...');
    },
    edit: function(id) {
        console.log(`Edit todo ${id}`)
    }
};

todo.delete = function() {
    console.log('Delete todo...');
};

todo.add();
todo.edit(22);
todo.delete();
