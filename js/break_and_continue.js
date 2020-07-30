
var number = prompt("Choose an odd number between 1 and 50.")
var numberToBreakAt = number
    for (var x = 1; x <= 49; x += 2) {
        if (number % 2 === 0) || (number === ""){
            break
        }
    }