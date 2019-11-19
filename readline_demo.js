let readline = require('readline-sync');

console.log("Readline demo app!");
console.log("Get some input from the console...");

let str =readline.question('enter a string: ');
console.log("You entered: "+str);
let n1 =readline.questionInt('Enter a whole #: ');
console.log("Your # square = "+n1*n1);
let d1 = readline.questionFloat('Enter a decimal #: ');
console.log("dec /nbr = "+d1/n1);