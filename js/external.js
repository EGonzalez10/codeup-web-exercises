console.log("Hello from external Javascript")
alert('Welcome to my Website')
var favColor = prompt("What is your favorite color?")
alert("Great, " + (favColor) + " is my favorite color too.")

var movie1 = prompt("How many days did you rent The Little Mermaid?")
var movie2 = prompt("How many days did you rent Brother Bear?")
var movie3 = prompt("How many days did you rent Hercules?")
alert("Your total for the movie rented is $" + (((movie1) * 3) + ((movie2) * 3) + ((movie3) * 3)) + ".")

var google = prompt("How many hours did you work at Google?");
var amazon = prompt("How many hours did you work at Amazon?");
var facebook = prompt("How many hours did you work at Facebook?");
var paycheck = (google * 400) + (amazon * 380) + (facebook * 350);
alert("Your total check is $" + paycheck.toFixed(2) + "."); 



