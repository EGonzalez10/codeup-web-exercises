while(true) {
    var input = parseInt(prompt("Choose an odd number between 1 and 50."));
    if (input % 2 !== 0 && input <= 50 && input >= 1) {
        break;
    }
}
console.log("Number to skip is: " + input)

for (var a = 1; a < 50; a +=2) {
    if (a === input){
        console.log("Yikes! Skipping number " + a);
        continue;
    }
        console.log("Here is an odd number: " + a);
}
