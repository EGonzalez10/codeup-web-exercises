
while(true) {
    var randomNumber = parseInt(prompt("Give me an odd number between 1 and 50."));
    if (randomNumber % 2 !== 0 && randomNumber <= 50 && randomNumber >= 1) {
        break;
    }
}
console.log ("Number to skip is: " + randomNumber);
for (var i = 1; i <= 50; i+=2) {
    if (i === randomNumber) {
        console.log('Yikes! Skipping number:' + i);
        continue;
    }
    console.log('Here is odd number: ' + i);
}