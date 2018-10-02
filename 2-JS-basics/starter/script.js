var firstName = 'Pei';
var lastName = 'Shing';
var age = 25;
var isAdult = true;

var statement;

// string concatenation
statement = firstName + ' ' + lastName + ' is ';
// using type coercion
statement += age + '. So, they are an adult. ' + isAdult;
console.log(statement);

// variable mutation
age = 'twenty five';
