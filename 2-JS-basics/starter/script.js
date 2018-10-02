var firstName = 'Pei';
var lastName = 'Shing';
var age = 25;
var isAdult = true;

var statement;
var question;

// string concatenation
statement = firstName + ' ' + lastName + ' is ';
// using type coercion
statement += age + '. So, they are an adult. ' + isAdult;
console.log(statement);

// variable mutation
age = 'twenty five';
statement = firstName + ' is ' + age;
question = "Do you want to update Pei's age?";

//create pop up alert
alert(statement);

// get user input
var newAge = prompt(question);
