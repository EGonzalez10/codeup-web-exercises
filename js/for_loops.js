function showMultiplicationTable(input){
    for (var a = 1; a <= 10; a++){
        console.log((input + ' x ' + a + " = " + (input * a) ))
        }
    }
showMultiplicationTable(7)



var random = Math.floor((Math.random() * 180) + 20);
for (var x = 1; x<= 10; x++) {
    var random = Math.floor((Math.random() * 180) + 20);
    if (random % 2 === 0){
        console.log(random + " is and even number.");
    } else {
        console.log(random + " is an odd number.");
    }
}


for (var i = 1; i <= 9; i++){
    console.log(i.toString().repeat(i))
}
//


for (var p = 100; p >= 5; p-=5){
    console.log(p)
}
