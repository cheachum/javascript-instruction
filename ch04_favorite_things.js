let readline = require('readline-sync');

console.log("Welcome to the favorite things app, V1");
//initialize an empty array to store favorites
let favorites = [];

let choice ="y";
while (choice == "y"){
    console.log("===Add a favorite thing===");
    let id_in =readline.questionInt("Favorite Id:  ");
    let thing_in =readline.question("Favorite thing:  ");
    let why_in =readline.question("Why is it a favorite?:  ");

    let favorite = {
        id: id_in,
        thing: thing_in,
        why: why_in,
    };
    favorites.push(favorite);

    choice =readline.question("Add another favorite?:  ");
}


console.log("My list of favorites:  ");
for (let f of favorites){
    console.log(`i like ${f.thing} because ${f.why}.`);
}
console.log("retrieve a favorite by id...")
// 1)prompt user for id to retrieve
let idRetrieved = readline.questionInt("which favorite (by id) do you want?: ")
// 2)get that favorite from the list and display
for (let f of favorites){
    if (f.id==idRetrieved){
        //this is the favorite we want
        displayFavorite(f);
    }
}
function displayFavorite(f) {
    console.log(`i like ${f.id} - ${f.thing} because ${f.why}.`);
}
// 3)create a function for the display -to reduce redundancy

console.log("bye!")