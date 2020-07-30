
var i = 2
while (i <= 65536) {
    console.log(i);
    i *= 2
}



var allCones = Math.floor(Math.random() * 50) + 50;
do {
    var conesBought = Math.floor(Math.random() * 5) + 1;
    if(conesBought <= allCones) {
        console.log(conesBought + ' cones sold...');
        allCones = allCones - conesBought;
    }
    else{
        console.log('Cannot sell you ' + conesBought + ' cones I only have ' + allCones + '...')
    }
} while (allCones > 0);
console.log('Yay! I sold them all!');