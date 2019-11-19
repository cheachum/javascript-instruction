let readline = require('readline-sync');
console.log("Welcome to the table of powers!");
 let n1 =readline.questionInt('Enter an Integer: ');


for (let i=0; i<=1; i++){
    let square = n1*n1;
    let cube = n1*n1*n1;

console.log("Your number squared: " +square);
    console.log("your number cubed: " +cube);
}
    