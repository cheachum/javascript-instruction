let readline = require('readline-sync');
console.log("Welcome to the Friends List App!")

//prompt add name until user enters "Exit"
let exit = "N";
let friends = [];
while (exit == ("N")|| exit == ("n")) {
    let friendName = readline.question("Name a friend: ");
    friends.push(friendName);
    exit= readline.question("Exit Y/N: ");
}
//once exit print friends list
console.log(friends);







